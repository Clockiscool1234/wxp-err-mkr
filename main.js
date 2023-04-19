
//grabs url and sets inputs to title and msg

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);
let errtitle = urlParams.get('title');
let errmsg = urlParams.get('msg');
let errico = urlParams.get('icon');

if ( errico == "0" || errico == "") {
  document.getElementById("icon").src = "img/critical.png";
}
if ( errico == "1") {
  document.getElementById("icon").src = "img/warning.png";
}
if ( errico == "2") {
  document.getElementById("icon").src = "img/information.png";
}
if ( errico == "3") {
  document.getElementById("icon").src = "img/question.png";
}

// renders image and hides the err div element

var node = document.getElementById("err");
var canvas = document.createElement("canvas");

document.getElementById("title").value = errtitle;
document.getElementById("msg").value = errmsg;
document.getElementById('errtitle').innerHTML = errtitle;
document.getElementById('errmsg').innerHTML = errmsg;
html2canvas(document.querySelector("#err"), {
  width: 412
}).then(canvas => {
    document.body.appendChild(canvas)
});
node.style.display = "none";

// generates error

function errgen(){
   document.getElementById("noico").innerHTML = "";
   console.log(document.querySelector('input[name="erricon"]:checked'))
   let erricon = document.querySelector('input[name="erricon"]:checked').value;
   window.location = '?msg=' + msg.value + '&title=' + title.value + '&icon=' + erricon;
}
