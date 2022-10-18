const cards = document.getElementById('cards')
const noItemsDisplay = document.getElementById('noitems')
const searchSelect = document.getElementById('searchBy')
const searchField = <HTMLInputElement> document.getElementById('searchField')
const errorMsg = document.getElementById('error')
const modal = <HTMLElement> document.getElementById("myModal");
const span = <HTMLElement>document.getElementById("close");
const gridContainer = <HTMLElement> document.getElementById("grid-container")
const photoSearch =  <HTMLInputElement> document.getElementById('photosearchField')

 interface Albums  {
  userId : number
  id : number
  title: string
 }

 interface Photos{
  albumId : number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
 }

class API {
    get(url:string) {
        let promise:Promise<Array<Albums | Photos>>= new Promise((resolve, reject) => {
            fetch(url).then((response) => response.json().then((data)=>resolve(data))).catch(() => { reject(null); });
        });
        return promise;
    }
}

class DBQuery {
    queryWithIndex(tablename:string, indexColumn:string, indexValue:string) {
      let promise: Promise<Albums[] | Photos[]> = new Promise((resolve,reject) => {
        let db = openRequest.result
        let transaction = db.transaction(tablename, "readwrite"); 
        let objectStore = transaction.objectStore(tablename);
        const albumIDIndex = objectStore.index(indexColumn)
        const keyRng = IDBKeyRange.only(indexValue)
        const allPhotosReq = albumIDIndex.getAll(keyRng)
        let output: Albums[] | Photos[] = []
  
        allPhotosReq.onsuccess = () => {
          const allPhotos = allPhotosReq.result;
          resolve(allPhotos)
        }
        allPhotosReq.onerror = () =>{
          console.error('Fetching data underwent error')
          reject(null)
        }
      })
     return promise
    }

    queryWithValuesLike(tablename:string, columname:string, value:string){
      let promise: Promise<Albums[] | Photos[] > = new Promise((resolve,reject) => {
        let db = openRequest.result
        let transaction = db.transaction(tablename, "readonly"); 
        let objectStore = transaction.objectStore(tablename);
        const cursorreq = objectStore.openCursor()
        let output: Albums[] | Photos[]  = []
        const regex = new RegExp(`${value}`,"gi")
        cursorreq.onsuccess = () => {
          const cursor = cursorreq.result;
          
          if(cursor){
            if (regex.test( cursor.value[columname])){
              output.push(cursor.value)
              cursor.continue()
            }else {
              console.log('Found all elements')
              resolve(output)
            }
          }
        }
        cursorreq.onerror = () =>{
          console.error('Fetching data underwent error')
          reject(null)
        }
      })
     return promise
    }
    
    getAllDataFromTable(tablename:string){
      let promise: Promise<any[]> = new Promise((resolve) => {
        let db = openRequest.result
        let transaction = db.transaction(tablename, "readwrite"); 
        let objectStore = transaction.objectStore(tablename);
        let getRequest = objectStore.getAll()
        getRequest.onsuccess = ()=>{
          let output: any[] = getRequest.result
          resolve(output)
        }
      })
     return promise
    }


}
const BASE_URL = "https://jsonplaceholder.typicode.com/";
let GetAPI = new API()
let dbquery = new DBQuery()
let openRequest =  window.indexedDB.open("albumdb");

function insertIntoTable(tablename: string, data: Object[]){
  let db = openRequest.result
  data.forEach((item:Object) => {
    let transaction = db.transaction(tablename, "readwrite"); 
    let objectStore = transaction.objectStore(tablename);
    let addRequest = objectStore.add(item)
    addRequest.onsuccess = ()=>{
      console.log(`${tablename} added`)
    }
    addRequest.onerror = function() {
      console.error("Error adding album to table", addRequest.error);
    }
})}

function findEntriesCount(tablename:string):Promise<any>{
  let promise = new Promise((resolve)=>{
    const db = openRequest.result
    const transaction = db.transaction(tablename, "readwrite"); 
    const objectStore = transaction.objectStore(tablename);
    const countRequest = objectStore.count()
    countRequest.onsuccess = ()=>{
      let count = countRequest.result
      resolve(count)
    }
  })
  return promise
}


async function initializeDatabase(){
  let albumcount:number = await  findEntriesCount('albums') 
 if (albumcount < 90){
    console.log("albums database not found. adding..")
    let albums =  await  GetAPI.get(BASE_URL + 'albums');
    insertIntoTable('albums',albums)
  }

  let photocount: number = await  findEntriesCount('photos')
  if(photocount <4000){
    console.log("photos database not found. adding..")
    let photos = await GetAPI.get(BASE_URL + 'photos')
    insertIntoTable('photos',photos)   
  }
}

function displayAlbums(viewList: any ){
  let cardsContent = ""
  if (cards!==null){
    if (viewList.length === 0){
        cards.innerHTML = "no items to display"
    }
    else{
        viewList.forEach((album: Albums) => {
            cardsContent += ` <div onclick=openModal(${album.id.toString()}) class="card">
            
          <div class="contents">
            <h2>${album.title}</h2>           
          </div> 
        </div>`
      
        }
        );
      cards.innerHTML = cardsContent
    }
  }
}

openRequest.onupgradeneeded=function() {
 let db = openRequest.result
 db.createObjectStore('albums',{keyPath :'id'})
 let photoStore =  db.createObjectStore('photos',{keyPath :'id'})
 photoStore.createIndex('albumId','albumId')
 };

openRequest.onerror = function() {
  console.error("Error", openRequest.error);
};

openRequest.onsuccess = async function() {
 initializeDatabase()
 let albums = await dbquery.getAllDataFromTable('albums')
 displayAlbums(albums)
};

async function search(){
  let searchValue = searchField.value
  if (searchValue === ""){
    let albums = await dbquery.getAllDataFromTable('albums')
    displayAlbums(albums)
  }else{
    let  albums = await dbquery.queryWithValuesLike('albums','title', searchValue)
    displayAlbums(albums)
  }
}

async function searchPhotos(id:string){
  let input = photoSearch.value
  
  const regex = new RegExp(input,"gi")
  let photos:any = await dbquery.queryWithIndex('photos','albumId',id)
  if (input === '')
   displayPhotos(photos)
  else{
  let filteredPhotos = photos.filter((photo:any) => regex.test(photo.title))
  
  displayPhotos(filteredPhotos)
  }
}

function displayPhotos(viewPhotoList:any){
  let cardsContent = "";
  if (cards !== null) {
      if (viewPhotoList.length === 0) {
          gridContainer.innerHTML = "no items to display";
          gridContainer.classList.replace('grid-container','grid-container-empty')
        }
      else {
        gridContainer.classList.replace('grid-container-empty','grid-container')
        viewPhotoList.forEach((album:any) => {
              cardsContent += ` <div class="grid-item">
        <a href ='${album.url}'> <img src='${album.thumbnailUrl}'></a>
        <h6>${album.title}</h6>
      </div>`;
          });
          gridContainer.innerHTML = cardsContent;
      }
  }
}

async function openModal(id:string){
  photoSearch.addEventListener('keyup',()=>{searchPhotos(id)})
  searchPhotos(id)
  modal.style.display = "flex";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const debounce = (fn: Function, ms = 500) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};


const debounceSearch = debounce(() => search());
