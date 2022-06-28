// write js code here corresponding to matches.html
var submitArr=JSON.parse(localStorage.getItem("schedule"));
 Displaydata(submitArr);

var favouritearr = JSON.parse(localStorage.getItem("favourites")) || []

function Displaydata(data){
 data.forEach(function(elem){
     var tr = document.createElement("tr")

     var td1 = document.createElement("td")
     td1.innerText= elem. matchnumber;

     var td2 = document.createElement("td")
     td2.innerText= elem. teamA;

     var td3 = document.createElement("td")
     td3.innerText= elem. teamB;

     var td4 = document.createElement("td")
     td4.innerText= elem.Date;

     var td5 = document.createElement("td")
     td5.innerText= elem.places;

     var td6 = document.createElement("td")
     td6.innerText= "favourite";
     td6.style.color="blue"
    td6.style.cursor="pointer"
    td6.addEventListener("click", function(){
        favouritefunc(elem);
       
    })
    tr.append(td1,td2,td3,td4,td5,td6);

    document.querySelector("tbody").append(tr);
 });
}
 function favouritefunc(elem){
 console.log(elem);
    favouritearr.push(elem);
    localStorage.setItem("favourites",JSON.stringify(favouritearr))

    window.location.href="favourites.html"
}