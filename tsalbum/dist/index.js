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
class API {
    get(url) {
        let promise = new Promise((resolve, reject) => {
            fetch(url).then((response) => response.json().then((data) => resolve(data))).catch(() => { reject(null); });
        });
        return promise;
    }
}
const BASE_URL = "https://jsonplaceholder.typicode.com/";
let GetAPI = new API();
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
openRequest.onupgradeneeded = function () {
    let db = openRequest.result;
    db.createObjectStore('albums', { keyPath: 'id' });
    db.createObjectStore('photos', { keyPath: 'id' });
};
openRequest.onerror = function () {
    console.error("Error", openRequest.error);
};
openRequest.onsuccess = function () {
    return __awaiter(this, void 0, void 0, function* () {
        initializeDatabase();
    });
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // let albums =  await GetAPI.get(BASE_URL + 'albums');
        // console.log(albums);
    });
}
main();
//# sourceMappingURL=index.js.map