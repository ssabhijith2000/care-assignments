
let toggleAddOption = false

const addButton = document.getElementById('add')
const addContent = document.getElementById('addContent')
const nameInput = document.getElementById('name')
const artistInput = document.getElementById('artist')
const yearInput = document.getElementById('year')
const coverInput = document.getElementById('cover')
const formSubmit = document.getElementById('submit')
const cards = document.getElementById('cards')
const noItemsDisplay = document.getElementById('noitems')
const noOfSongs = document.getElementById('numberOfSongs')
const searchSelect = document.getElementById('searchBy')
const searchField = document.getElementById('searchField')
const errorMsg = document.getElementById('error')
let reader = new FileReader() 
let coverURL = ""

if(localStorage.getItem('songList') === null){
    localStorage.setItem('songList', '[]')
}
   

let songList = JSON.parse(localStorage.getItem('songList'))
let viewList = songList

function Song(name, artist, year, cover){
    this.name = name
    this.artist = artist
    this.year = year
    this.cover = cover
}
reader.onloadend = () => {
    coverURL= reader.result
};
function toggleAdd(){
    if(toggleAddOption === true){
        toggleAddOption = false
        addButton.innerHTML = '<i class="fa fa-plus"></i>'
        addContent.style.opacity = '0'
        clearPresentInputs()
    }
    else{
        toggleAddOption = true
        addButton.innerHTML =  '<i class = "fa fa-times"></i>'
        addContent.style.opacity = '1'
    }
}

function validate(songName,artist,year,cover){
    if (songName === "" || songName === null){
        errorMsg.innerHTML = "song name cannot be empty"
        return false
    } 
    else if(artist === "" || artist === null){
        errorMsg.innerHTML = "artist cannot be empty"
        return false
    }
    else if(year === "" || artist === null){
            errorMsg.innerHTML = "year cannot be empty"
            return false
    }
    else if(cover === "" || cover === null){ 
        errorMsg.innerHTML = "cover cannot be empty"
        return false
    }
return true
}

function uploadImageandReturnLink()
{
 file = coverInput.files[0]
 reader.readAsDataURL(file)
}

function clearPresentInputs(){
    errorMsg.innerHTML = ""
    nameInput.value = ""
    artistInput.value = ""
    yearInput.value = ""
    coverInput.value = ""
}

function submitOnValidated(songName,artist,year,cover){
    let song =new Song(songName,artist,year,cover)
    songList.push(song)
    localStorage.setItem('songList', JSON.stringify(songList))
    viewList = songList
    toggleAdd()
    clearPresentInputs()
    displayData(viewList);
}

function handleFormSubmit(){
    songName = nameInput.value
    artist = artistInput.value
    year = yearInput.value   

    if(validate(songName,artist,year,coverURL)){    
       submitOnValidated(songName,artist,year,coverURL)
    }  
}



function displayData(viewList){
    let cardsContent = ""

    if (viewList.length === 0){
        cards.innerHTML = "no items to display"
    }
    else{
        viewList.forEach((song) => {
            cardsContent += ` <div class="card">
            <img class="placeholder" src="${song.cover}"></img>
           <div class="contents">
            <h2>${song.name}</h5>
            <h4>Artist: ${song.artist}</h4>
            <h4>Year of release: ${song.year}</p>
            
           </div> 
        </div>`
       
        }
        );
        cards.innerHTML = cardsContent
        noOfSongs.innerHTML = songList.length
    }
}

function sortByName(viewList)
{
    sortByNameList = viewList
    console.log(sortByNameList)
    function comparebyName(a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase() ) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      }
      sortByNameList.sort(comparebyName)
      console.log(sortByNameList)
      displayData(sortByNameList)
}

function sortByArtist(viewList)
{
    sortByArtistList = viewList
    function comparebyArtist(a, b) {
        if (a.artist.toLowerCase() < b.artist.toLowerCase() ) {
          return -1;
        }
        if (a.artist.toLowerCase() > b.artist.toLowerCase()) {
          return 1;
        }
        return 0;
      }
      sortByArtistList.sort(comparebyArtist)
      displayData(sortByArtistList)
}

function sortByYear(viewList)
{
    sortByYearList = viewList
    function comparebyYear(a, b) {
        if (a.year < b.year ) {
          return -1;
        }
        if (a.year > b.year) {
          return 1;
        }
        return 0;
      }
      sortByYearList.sort(comparebyYear)
      displayData(sortByYearList)
}

function searchByName(songList, input){
 const regex = new RegExp(`${input}`,"gi")
    searchByNameList = songList
    searchByNameList = searchByNameList.filter((song)=>regex.test(song.name))
    viewList = searchByNameList
    displayData(viewList)
}

function searchByArtist(songList, input){
    const regex = new RegExp(`${input}`,"gi")
       searchByArtistList = songList
       searchByArtistList = searchByArtistList.filter((song)=>regex.test(song.artist))
       viewList = searchByArtistList
       displayData(viewList)
}

function searchByYear(songList, input){
    const regex = new RegExp(`${input}`,"gi")
       searchByYearList = songList
       searchByYearList = searchByYearList.filter((song)=>regex.test(song.year))
       viewList = searchByYearList
       displayData(viewList)
}

function search()
{
    searchOption = searchSelect.value
    searchValue = searchField.value
    if (searchValue === '')
        displayData(songList)
    else{
        if (searchOption === 'name')
        searchByName(songList,searchValue);
        else if(searchOption === 'artist')
            searchByArtist(songList,searchValue)
        else if(searchOption === 'year')
            searchByYear(songList,searchValue)
        else 
            displayData(songList,searchValue)
    }
}
   

function sort(){
let sortSelect = document.getElementById('sortBy')
sortOption = sortSelect.value
console.log(sortOption)
if (sortOption === 'name')
    sortByName(viewList);
else if (sortOption ==='artist')
    sortByArtist(viewList);
else if (sortOption === 'year')
    sortByYear(viewList)
else{
    viewList = songList
    displayData(viewList)
}
}
displayData(songList)
addButton.addEventListener('click',(e)=>toggleAdd())

