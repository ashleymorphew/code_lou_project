function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
    }
  }

function validateForm() {
  let name = document.forms["contactForm"]["name"].value;
  let email = document.forms["contactForm"]["email"].value;
  if (name == "" && email == "") {
    alert("Form must be filled out!");
    return false;
  }
  else if (name == "") {
    alert("Name must be filled out!")
    return false;
  }
  else if (email == "") {
    alert("Email must be filled out!")
    return false;
  }
}



