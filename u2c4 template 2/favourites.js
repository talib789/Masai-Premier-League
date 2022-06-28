// write js code here corresponding to favourites.html
var fav = JSON.parse(localStorage.getItem("favourites"));
    dispalydata(fav);

    function dispalydata(data){
        data.forEach(function(elem, index){
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
            td6.innerText= "Remove";
            td6.style.color="red"
           td6.setAttribute("class","delete text")
           td6.addEventListener("click", function(){
               Removefun(elem,index);
              
           });
           tr.append(td1,td2,td3,td4,td5,td6);
       
           document.querySelector("tbody").append(tr);
        })
    }
    
    function Removefun(elem , index){
        fav.splice(index,1);
        localStorage.setItem("favourites", JSON.stringify(fav));

        window.location.reload()

      
    } 
