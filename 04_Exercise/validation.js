//falidate the input of the form
function validateForm() {

  //get the variables we need to work with from the first form on the page
  var name = document.forms[0].name.value;
  var gender = document.forms[0].gender.value;
  var address = document.forms[0].address.value;
  var email = document.forms[0].email.value;
  var phone = document.forms[0].phone.value;
  //alert(name + gender + address + email + phone);

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

  //clear form if everything passes
  //clearForm();

}

//validate the name field
function validateName(name){
  if(name.length<1){
    alert("*Required: Please enter name");
  }
  else{
    //use regex to look make sure it can have upper/lowercase letters and numbers
    if(/[^a-zA-Z0-9]/.test(name)) {
      alert("*Required: Name must be alphanumeric");
    }
  }
}

//validate the gender field
function validateGender(gender){
  if(gender == "default"){
    alert("*Required: Gender selection");
  }
}

//validate the address field
function validateAddress(address){
  if(address.length<1){
    alert("*Required: Please enter address");
  }
}

//validate the email field
function validateEmail(email){
  //http://www.w3resource.com/javascript/form/email-validation.php
  //var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var emailFormat = /^\w+@\w+\.\w+$/;
  if(!emailFormat.test(email)){
    alert("*Required: Please enter valid email. Eg. xxx@xxx.xxx");
  }
}

//validate the email field
function validatePhone(phone){
  //http://www.w3resource.com/javascript/form/email-validation.php
  //var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var phoneDashFormat = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
  var phoneRegularFormat = /^[0-9]{10}$/;
  var passedPrev = false;
  if(!phoneDashFormat.test(phone)){
    //passedPrev = true;
    if(!phoneRegularFormat.test(phone)){
      alert("*Required: Please enter valid Phone. Eg. xxx-xxx-xxxx or xxxxxxxx");
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
