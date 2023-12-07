let tableBody = document.querySelector(".table-body")

const currentUser = JSON.parse(localStorage.getItem("currentUser"))

function generatedMovieList() {
    let table = ''
    for (let i = 0; i < currentUser[0].yourMovies.length; i++) {
        table += "<tr>";
        table += "<td class='movies-list__item'>" + currentUser[0].yourMovies[i].name + "</td>";
        table += "<td class='movies-list__item'>" + currentUser[0].yourMovies[i].genre + "</td>";
        table += "<td class='movies-list__item'>" + "12h" + "</td>";
        table += "<td class='movies-list__item'>" + currentUser[0].yourMovies[i].price + "$</td>";
        table += "<td class='remove movies-list__item red-color'> <button class='remove__button red-color light-text-color' type='button'>Remove</button> </td>"
        
      table += "</tr>";
    }
    
    tableBody.innerHTML = table
    }

    generatedMovieList()

     function removeMovie() {
         const removeButton = document.querySelectorAll(".remove__button")

         removeButton.forEach((button, i) => {
             button.addEventListener("click", function() {
                 let currentMovie = currentUser[0].yourMovies[i]
                 console.log(currentMovie)
                 currentUser.yourMovies.splice(currentMovie, 1)
                 localStorage.setItem('currentUser', JSON.stringify(currentUser));
             })
         })

     }

     removeMovie()


    