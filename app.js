document.querySelector(".login-form").addEventListener("submit",function(event){
    let username = document.querySelector(".username").value;
    console.log(username);

    if(username !== "coolStudent123"){
        event.preventDefault();
        alert("Invalid user name entered. Try again.");
    }
});

document.querySelector(".notes-form").addEventListener("submit",function(event){
    let notes = document.querySelector(".text-area").value;
    let importance = document.querySelector(".importance").value;
    if(notes.trim().length <= 1 || importance.trim() === "" || isNaN(Number(importance))){
        alert("Notes need to be of length greater than 1 and the Importance needs to be a number. Try again.");
        event.preventDefault();
    }
});