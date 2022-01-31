let fireBtn = document.querySelector("#fire");
let skyBtn = document.querySelector("#sky");
let body = document.body;
let cardBody = document.querySelector(".card-body");

//when you click
fireBtn.onclick = function(){

    refreshPage();
    
    body.style.backgroundColor = "yellow";

    const img = document.createElement("img");

    img.src="assets/tik-tok-logo.png";

   

    cardBody.appendChild(img);

    


}


skyBtn.onclick = function(){

    refreshPage();

    body.style.backgroundColor = "blue";

}


function refreshPage(){
    cardBody.innerHTML = "";
}




