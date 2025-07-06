function Clearform() {
  //document.getElementById("fullname").value = "";
  document.getElementById("contactForm").reset();
}
function hideptags() {
  let ptags = document.getElementsByTagName("p");
  // p tag is going to come back as a html colllection that why we are using thr for loop to access the styles of the p tags
  for (let item of ptags) {
    // item.style.visibility = "hidden";
    item.style.display = "none";
  }
}

$("#Jquerybutton").click(function () {
  $("p").hide();
});
