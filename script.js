function myFunction(x) {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function validateForm() {
  let name = document.forms["contactForm"]["name"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
}
     