//globals
var alertString = "Form Response:\n";

//validate the input of the form
function validateForm() {

  //get the variables we need to work with from the first form on the page
  var name = document.forms[0].name.value;
  var gender = document.forms[0].gender.value;
  var address = document.forms[0].address.value;
  var email = document.forms[0].email.value;
  var phone = document.forms[0].phone.value;

  //validate name
  validateName(name);

  //validate gender
  validateGender(gender);

  //validate address
  validateAddress(address);

  //validate email
  validateEmail(email);

  //validate phone
  validatePhone(phone);

  //if the alertString is unchanged, we passed
  if(alertString == "Form Response:\n"){
    alert("Validation Successful!");
  }
  else{
    alert(alertString);
  }

  //reset alertString so they don't have to refresh the page
  alertString = "Form Response:\n";

  //clear form
  //clearForm();

}

//validate the name field
function validateName(name){
  //make sure something is entered
  if(name.length<1){
    alertString += "*Required: Please enter name\n";
  }
  else{
    //use regex to look make sure it can have upper/lowercase letters and numbers
    if(/[^a-zA-Z0-9]/.test(name)) {
      alertString += "*Required: Name must be alphanumeric\n";
    }
  }
}

//validate the gender field
function validateGender(gender){
  //error if gender is left at default selection
  if(gender == "default"){
    alertString += "*Required: Gender selection\n";
  }
}

//validate the address field
function validateAddress(address){
  //if something was entered
  if(address.length<1){
    alertString += "*Required: Please enter address\n";
  }
}

//validate the email field
function validateEmail(email){
  //set up regex check
  var emailFormat = /^\w+@\w+\.\w+$/;

  //run regex test
  if(!emailFormat.test(email)){
    alertString += "*Required: Please enter valid email. Eg. xxx@xxx.xxx\n";
  }
}

//validate the email field
function validatePhone(phone){
  //set up regex checks
  var phoneDashFormat = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  var phoneRegularFormat = /^[0-9]{10}$/;

  //run regex tests
  if(!phoneDashFormat.test(phone)){
    if(!phoneRegularFormat.test(phone)){
      alertString += "*Required: Please enter valid Phone. Eg. xxx-xxx-xxxx or xxxxxxxx\n";
    }
  }
}

//clears the form of its values
function clearForm(){
  document.forms[0].name.value = "";
  document.forms[0].gender.value = "default";
  document.forms[0].address.value = "";
  document.forms[0].email.value = "";
  document.forms[0].phone.value = "";
}
