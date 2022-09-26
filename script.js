let string = ""
let button = document.querySelectorAll(".btn")
let output = document.querySelector(".output").innerText
let darkbtn = document.getElementById("darkbtn")
let themeToggleLightIcon = document.getElementById("theme-toggle-light-icon")
let themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon")


// Calculator code
Array.from(button).forEach((button) => {
    button.addEventListener("click", (e)=>{
        if(e.target.innerText == "="){
            string = eval(string)
            document.querySelector(".output").innerText = string
        }
        else if(e.target.innerText == "AC"){
            string = "0"
            document.querySelector(".output").innerText = string
        }
        else if(e.target.innerHTML == "+/-"){
            string = -string
            document.querySelector(".output").innerHTML = string
        }
        else if(e.target.innerText == "%"){
            string = string /100
            document.querySelector(".output").innerHTML = string
        }
        else {
        console.log(e.target)
        string += e.target.innerHTML
        document.querySelector(".output").innerHTML = string
        }
    })
})


// Dark mode along with storing previous dark data

if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    // Show light icon
    themeToggleLightIcon.classList.remove('hidden')
  } 
  else {
    themeToggleDarkIcon.classList.remove('hidden')
  }
  
  // Listen for toggle button click
  darkbtn.addEventListener('click', toggleMode)
  
  function toggleMode() {
    // Toggle icon
    themeToggleDarkIcon.classList.toggle('hidden')
    themeToggleLightIcon.classList.toggle('hidden')
  
    // If is set in localstorage
    if (localStorage.getItem('color-theme')) {
      // If light, make dark and save in localstorage
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
        console.log("helo1")
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
        console.log("helo2")
      }
    } else {
      // If not in localstorage
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('color-theme', 'light')
        console.log("helo3")
      } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('color-theme', 'dark')
        console.log("helo4")
      }
    }
  }
  
