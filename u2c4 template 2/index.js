// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit", submitfun);

var submit = JSON.parse(localStorage.getItem("schedule")) || []
function submitfun(){
    event.preventDefault();

  var submitobj={
      matchnumber:document.querySelector("#matchNum").value,
      teamA:masaiForm.teamA.value,
      teamB:masaiForm.teamB.value,
      Date:document.querySelector("#date").value,
      places:document.querySelector("#venue").value, 
     };
    submit.push(submitobj);
    console.log(submit)

    localStorage.setItem("schedule", JSON.stringify(submit))

    window.location.href="matches.html"
}
