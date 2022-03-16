var saba = 1;
setInterval(function(){
    document.getElementById('radio' + saba).checked=true;
    saba++;
    if(saba > 4){
        saba =1;
    }
},4000);





// var modal = document.getElementById("myModal");
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];
// btn.addEventListener("click", function(event) {
//     modal.style.display = "block";
// })
// span.onclick = function() {
//   modal.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }



// var modal=document.getElementById






// var modal1 = document.getElementById("myModal1");
// var btn = document.getElementById("myBtn1");
// var span = document.getElementsByClassName("close1")[0];
//  btn.onclick = function() {
//   modal1.style.display = "block";
//  }
// span.onclick = function() {
//   modal1.style.display = "none";
// }
// window.onclick = function(event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";
//   }
// }



// var register = document.getElementById("register");
// let gadasvla = document.getElementById("gadasvla2");

// gadasvla.addEventListener('click', function(event) {
//   register.style.display = "none";
//   avtoriz.style.display = "block";
// });

