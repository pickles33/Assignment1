function validateForm() {
  <!-- I found this code on w3 school and I built off it -->
  let pass1 = document.forms["myForm"]["password"].value;
  let pass2 = document.forms["myForm"]["repassword"].value;
  const users = ["Harry", "Elizabeth", "Shana"];
  let username = document.forms["myForm"]["username"].value;

    
  if (pass1 != pass2) {
    alert("password and re enter password must be same");
    return false;
  }

  if (users.includes(username)) {
    alert("that username has been taken");
    return false;
  }    
}