// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', ()=>{
  console.log('the page is loaded')
  const hide = document.querySelector('#modal');
  console.log("Modal element:", hide);
  if (hide) {
    hide.classList.add("hidden"); 
    console.log("Modal is now hidden");
  } else {
    console.error(" Error: Modal element not found!");
  };


const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
  
  const hearts = document.querySelectorAll('.like-glyph');
  hearts.forEach(heart => {
    heart.addEventListener("click", () => {
      console.log("Heart clicked:", heart); 
      mimicServerCall()
        .then(() => {
        console.log('Server request succesful!');
        
        if (heart.textContent === EMPTY_HEART) {
          heart.textContent = FULL_HEART;
          heart.classList.add("activated-heart"); 
        } else {
          heart.textContent = EMPTY_HEART; 
          heart.classList.remove("activated-heart"); 
        }
      })
        .catch(() => {
          console.error("Server request failed");
          const hide = document.querySelector("#modal");
          hide.classList.remove("hidden");

          setTimeout(() => {
            hide.classList.add("hidden");
          }, 3000);
    });
  });
});
  




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
})
