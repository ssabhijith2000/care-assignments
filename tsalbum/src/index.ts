
class API {
    get(url:string) {
        let promise:Promise<Array<Object>>= new Promise((resolve, reject) => {
            fetch(url).then((response) => response.json().then((data)=>resolve(data))).catch(() => { reject(null); });
        });
        return promise;
    }
}

const BASE_URL = "https://jsonplaceholder.typicode.com/";
let GetAPI = new API()
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


openRequest.onupgradeneeded=function() {
 let db = openRequest.result
 db.createObjectStore('albums',{keyPath :'id'})
 db.createObjectStore('photos',{keyPath :'id'})
 };

openRequest.onerror = function() {
  console.error("Error", openRequest.error);
};

openRequest.onsuccess = async function() {
 initializeDatabase()
 
};


