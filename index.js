const increasebutn = document.getElementById("incbutn");
const resetbutn = document.getElementById("resetbutn");
const decbutn = document.getElementById("decbutn");

const numb = document.getElementById("numb");

let count = 0;



increasebutn.onclick = function(){
    if (count < 100) {
        count ++;
        numb.textContent = count;
      
    }
    else {
        window.alert("You haave reached the maximum capacity")
    }
}

resetbutn.onclick = function(){
    count = 0 ;
    numb.textContent = count;
}

decbutn.onclick = function(){
    count--;
    numb.textContent = count;
}



