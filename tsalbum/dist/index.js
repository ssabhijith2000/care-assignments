"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const cards = document.getElementById('cards');
const noItemsDisplay = document.getElementById('noitems');
const searchSelect = document.getElementById('searchBy');
const searchField = document.getElementById('searchField');
const errorMsg = document.getElementById('error');
const modal = document.getElementById("myModal");
const span = document.getElementById("close");
const gridContainer = document.getElementById("grid-container");
const photoSearch = document.getElementById('photosearchField');
class API {
    get(url) {
        let promise = new Promise((resolve, reject) => {
            fetch(url).then((response) => response.json().then((data) => resolve(data))).catch(() => { reject(null); });
        });
        return promise;
    }
}
class DBQuery {
    queryWithIndex(tablename, indexColumn, indexValue) {
        let promise = new Promise((resolve, reject) => {
            let db = openRequest.result;
            let transaction = db.transaction(tablename, "readwrite");
            let objectStore = transaction.objectStore(tablename);
            const albumIDIndex = objectStore.index(indexColumn);
            const keyRng = IDBKeyRange.only(indexValue);
            const allPhotosReq = albumIDIndex.getAll(keyRng);
            let output = [];
            allPhotosReq.onsuccess = () => {
                const allPhotos = allPhotosReq.result;
                resolve(allPhotos);
            };
            allPhotosReq.onerror = () => {
                console.error('Fetching data underwent error');
                reject(null);
            };
        });
        return promise;
    }
    queryWithValuesLike(tablename, columname, value) {
        let promise = new Promise((resolve, reject) => {
            let db = openRequest.result;
            let transaction = db.transaction(tablename, "readonly");
            let objectStore = transaction.objectStore(tablename);
            const cursorreq = objectStore.openCursor();
            let output = [];
            const regex = new RegExp(`${value}`, "gi");
            cursorreq.onsuccess = () => {
                const cursor = cursorreq.result;
                if (cursor) {
                    if (regex.test(cursor.value[columname])) {
                        output.push(cursor.value);
                        cursor.continue();
                    }
                    else {
                        console.log('Found all elements');
                        resolve(output);
                    }
                }
            };
            cursorreq.onerror = () => {
                console.error('Fetching data underwent error');
                reject(null);
            };
        });
        return promise;
    }
    getAllDataFromTable(tablename) {
        let promise = new Promise((resolve) => {
            let db = openRequest.result;
            let transaction = db.transaction(tablename, "readwrite");
            let objectStore = transaction.objectStore(tablename);
            let getRequest = objectStore.getAll();
            getRequest.onsuccess = () => {
                let output = getRequest.result;
                resolve(output);
            };
        });
        return promise;
    }
}
const BASE_URL = "https://jsonplaceholder.typicode.com/";
let GetAPI = new API();
let dbquery = new DBQuery();
let openRequest = window.indexedDB.open("albumdb");
function insertIntoTable(tablename, data) {
    let db = openRequest.result;
    data.forEach((item) => {
        let transaction = db.transaction(tablename, "readwrite");
        let objectStore = transaction.objectStore(tablename);
        let addRequest = objectStore.add(item);
        addRequest.onsuccess = () => {
            console.log(`${tablename} added`);
        };
        addRequest.onerror = function () {
            console.error("Error adding album to table", addRequest.error);
        };
    });
}
function findEntriesCount(tablename) {
    let promise = new Promise((resolve) => {
        const db = openRequest.result;
        const transaction = db.transaction(tablename, "readwrite");
        const objectStore = transaction.objectStore(tablename);
        const countRequest = objectStore.count();
        countRequest.onsuccess = () => {
            let count = countRequest.result;
            resolve(count);
        };
    });
    return promise;
}
function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        let albumcount = yield findEntriesCount('albums');
        if (albumcount < 90) {
            console.log("albums database not found. adding..");
            let albums = yield GetAPI.get(BASE_URL + 'albums');
            insertIntoTable('albums', albums);
        }
        let photocount = yield findEntriesCount('photos');
        if (photocount < 4000) {
            console.log("photos database not found. adding..");
            let photos = yield GetAPI.get(BASE_URL + 'photos');
            insertIntoTable('photos', photos);
        }
    });
}
function displayAlbums(viewList) {
    let cardsContent = "";
    if (cards !== null) {
        if (viewList.length === 0) {
            cards.innerHTML = "no items to display";
        }
        else {
            viewList.forEach((album) => {
                cardsContent += ` <div onclick=openModal(${album.id.toString()}) class="card">
            
          <div class="contents">
            <h2>${album.title}</h2>           
          </div> 
        </div>`;
            });
            cards.innerHTML = cardsContent;
        }
    }
}
openRequest.onupgradeneeded = function () {
    let db = openRequest.result;
    db.createObjectStore('albums', { keyPath: 'id' });
    let photoStore = db.createObjectStore('photos', { keyPath: 'id' });
    photoStore.createIndex('albumId', 'albumId');
};
openRequest.onerror = function () {
    console.error("Error", openRequest.error);
};
openRequest.onsuccess = function () {
    return __awaiter(this, void 0, void 0, function* () {
        initializeDatabase();
        let albums = yield dbquery.getAllDataFromTable('albums');
        displayAlbums(albums);
    });
};
function search() {
    return __awaiter(this, void 0, void 0, function* () {
        let searchValue = searchField.value;
        if (searchValue === "") {
            let albums = yield dbquery.getAllDataFromTable('albums');
            displayAlbums(albums);
        }
        else {
            let albums = yield dbquery.queryWithValuesLike('albums', 'title', searchValue);
            displayAlbums(albums);
        }
    });
}
function searchPhotos(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let input = photoSearch.value;
        const regex = new RegExp(input, "gi");
        let photos = yield dbquery.queryWithIndex('photos', 'albumId', id);
        if (input === '')
            displayPhotos(photos);
        else {
            let filteredPhotos = photos.filter((photo) => regex.test(photo.title));
            displayPhotos(filteredPhotos);
        }
    });
}
function displayPhotos(viewPhotoList) {
    let cardsContent = "";
    if (cards !== null) {
        if (viewPhotoList.length === 0) {
            gridContainer.innerHTML = "no items to display";
            gridContainer.classList.replace('grid-container', 'grid-container-empty');
        }
        else {
            gridContainer.classList.replace('grid-container-empty', 'grid-container');
            viewPhotoList.forEach((album) => {
                cardsContent += ` <div class="grid-item">
        <a href ='${album.url}'> <img src='${album.thumbnailUrl}'></a>
        <h6>${album.title}</h6>
      </div>`;
            });
            gridContainer.innerHTML = cardsContent;
        }
    }
}
function openModal(id) {
    return __awaiter(this, void 0, void 0, function* () {
        let photos = yield dbquery.queryWithIndex('photos', 'albumId', id);
        photoSearch.addEventListener('keyup', () => { searchPhotos(id); });
        searchPhotos(id);
        modal.style.display = "flex";
    });
}
span.onclick = function () {
    modal.style.display = "none";
};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
//# sourceMappingURL=index.js.map