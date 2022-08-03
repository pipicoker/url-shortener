const menu = document.querySelector(".menu")
const links = document.querySelector(".navbar")

const shortened = document.querySelector(".shortened")
var error = document.querySelector(".error-message")
var url = document.getElementById("url")

//function that toggles the mobile menu
menu.addEventListener("click", function(){
    if (links.style.display == "none") {
            links.style.display = "flex"
    } else {
        links.style.display = "none"
        }
})


// prevents the button from submitting on click
document.querySelector(".btn").addEventListener("click", function(event){
  event.preventDefault()
});

//this function displays the error message
function displayError() {
                error.style.display = "block" 
                url.style.borderColor = "red"
                url.style.borderWidth = "2px"
        }

document.querySelector(".btn").addEventListener("click", fetchUrl)
// function takes the link inputed and makes a request to the API and displays the result 
function fetchUrl() { 
        var choice = document.getElementById("url").value

        document.querySelector(".shortened").style.display = "block" 

        if (choice == "" ) {
                displayError()
        }
        else {
                if (displayError) { // removes the error message if the user inputs url
                        error.style.display = "none" 
                        url.style.borderWidth = "0"
                }

                         fetch("https://api.shrtco.de/v2/shorten?url=" + `${choice}`)
                 .then(res => res.json())
                 .then(data => {
                         console.log(data)
                         
                         var short = data.result["full_short_link"];
                         const ul = shortened.querySelector("ul");
                         
                        // creates a new link
                        const li = document.createElement("li")
                        li.setAttribute("class", "li mt-4 bg-white rounded-md px-4 py-4 md:py-2 divide-y md:divide-y-0 divide-gray md:flex md:items-center")
                        li.innerHTML = `
                        <p class = "initial-link">${choice} </p>
                        <div class = "new-link">
                                <p class = "shorter" >${short}<p/>
                                <button class = "button">copy</button>
                        </div>

                        `
                        //  on click on the copy button it copies the new link
                           li.getElementsByClassName("button")[0].addEventListener("click", (e) => {
                               
                                   var toCopy = e.target.parentElement.previousSibling.innerText;
                                   navigator.clipboard.writeText(toCopy)  //copies the short link to the clipboard
                                   alert("copied the link: " + toCopy)

                                   e.target.style.backgroundColor = "hsl(257, 27%, 26%)"
                                   e.target.innerText = "copied!"
                                
                         })
                         ul.appendChild(li)

                                        })
                                        .catch(err => {
                                                console.log(`error ${err}`)
                                        })
        }
}








