const movieName = document.querySelector(".movies-list__name")
const movieGenre = document.querySelector(".movies-genre")
const moviePrice = document.querySelector(".movies-list__price")
const rentButton = document.querySelector(".rent__button")
let tableBody = document.querySelector(".table-body")

const movieList = [{
    "name": "Batman",
    "genre": "Action",
    "price": 4.55,
    "isInStock": 5,
}, {
    "name": "Spider-man",
    "genre": "Action",
    "price": 5.00,
    "isInStock": 1,
}, {
    "name": "7 pounds",
    "genre": "Drama",
    "price": 7.00,
    "isInStock": 3,
}, {
    "name": "Green Book",
    "genre": "Comedy",
    "price": 6.35,
    "isInStock": 0,
}, {
    "name": "The Dressmaker",
    "genre": "Drama",
    "price": 5.60,
    "isInStock": 3,
}, {
    "name": "The exorcist",
    "genre": "Horror",
    "price": 3.70,
    "isInStock": 0,
}, {
    "name": "Miss Sloane",
    "genre": "Thriller",
    "price": 8.10,
    "isInStock": 7,
}, {
    "name": "Molly's game",
    "genre": "Drama",
    "price": 5.40,
    "isInStock": 0,
},]

function generatedMovieList() {

let table = ''
for (let i = 0; i < movieList.length; i++) {
    table += "<tr>";
    table += "<td class='movies-list__item'>" + movieList[i].name + "</td>";
    table += "<td class='movies-list__item'>" + movieList[i].genre + "</td>";
    table += "<td class='movies-list__item'>" + movieList[i].price + "$</td>";
    if (movieList[i].isInStock > 0) {
        table += '<td class="movies-list__item"><img class="movies-list__item-img" src="./assets/check.png" alt="Check"/></td>';
      } else {
        table += '<td class="movies-list__item"><img class="movies-list__item-img" src="./assets/cross.png" alt="Cross"/></td>';
      }
    table += "<td class='rent movies-list__item dark-color'> <button class='rent__button dark-color light-text-color' type='button'>Rent</button> </td>"
    
  table += "</tr>";
}

tableBody.innerHTML = table
addMovie()
}

generatedMovieList()

const yourMovies = []

function addMovie() {
    const rentButton = document.querySelectorAll(".rent__button")

    rentButton.forEach((button, i) => {
    button.addEventListener("click", function() {
        if (movieList[i].isInStock > 0) {
            yourMovies.push(movieList[i])
            movieList[i].isInStock--;
            console.log(yourMovies)
            generatedMovieList()
        } else {
            alert("Movie is out of stock")
        }
    })
})

}