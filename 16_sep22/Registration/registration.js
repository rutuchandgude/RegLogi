const form = document.getElementById("form");
const firstName = document.getElementById("fname");
const lasttName = document.getElementById("lname");
const email = document.getElementById("emailid");
const mobileNo = document.getElementById("mobileno");
const password = document.getElementById("pass");
const cpassword = document.getElementById("cpassword");
// const radioBtn = document.querySelector(".radiobtn");
const selectStream = document.getElementById("slctstream");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
  // console.log("submit");
});

const sendData = (sRate,count)=>{
    if(sRate === count){
        alert('registration sucessfull');
        swal("Welcome! " +firstName,"Registration Successful","success");
    }
}

const successMsg=()=>{
    let formCon = document.getElementsByClassName('input-box');
    var count = formCon.length - 1;
    for(var i=0;i<formCon.length;i++){
        if(formCon[i].className === "input-box success"){
            var sRate = 0+i;
            console.log(sRate);
            sendData(count);
        }else{
            return false;
        }
    }
}

const validate = () => {
  const firstNameVal = firstName.value.trim();
  const lastNameVal = lasttName.value.trim();
  const emailVal = email.value.trim();
  const phoneVal = mobileNo.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();
//   const radioBtnVal = radioBtn.value.trim();
  const selectStreamVal = selectStream.value.trim();

  //validate usename
  if (firstNameVal === "") {
    setErrorMsg(firstName, "Firstname cannot be blank");
  } else if (!isAlphabate(firstNameVal)) {
    setErrorMsg(firstName, "Firstname can only be alphabate");
  } else if (firstNameVal.length <= 2) {
    setErrorMsg(firstName, "Firstname should be min 3 char");
  } else if (firstNameVal.length >= 50) {
    setErrorMsg(firstName, "Firstname less than 50 char");
  } else {
    setSuccessMsg(firstName);
  }

  //validate lastname
  if (lastNameVal === "") {
    setErrorMsg(lasttName, "Lastname cannot be blank");
  } else if (!isAlphabate(lastNameVal)) {
    setErrorMsg(lasttName, "Lastname can only be alphabate");
  } else if (lastNameVal.length <= 2) {
    setErrorMsg(lasttName, "Lastname should be min 3 char");
  } else if (lastNameVal.length >= 50) {
    setErrorMsg(lasttName, "Lastname less than 50 char");
  } else {
    setSuccessMsg(lasttName);
  }

  //validate mobilno
  if (phoneVal === "") {
    setErrorMsg(mobileNo, "Mobile number cannot be blank");
  } else if (phoneVal == "0") {
    setErrorMsg(mobileNo, "Phone number cannot start with 0");
  } else if (!isDigit(phoneVal)) {
    setErrorMsg(mobileNo, "Invalid number, must be 10 digits");
  } else if (phoneVal.length != 10) {
    setErrorMsg(mobileNo, "Phone number must be 10 digits.");
  } else {
    setSuccessMsg(mobileNo);
  }

  //validate email
  if (emailVal === "") {
    setErrorMsg(email, "emailid cannot be blank");
  } else if (emailVal.length < 5) {
    setErrorMsg(email, "emailid min 5 char");
  } else if (emailVal.length >= 100) {
    setErrorMsg(email, "emailid less than 100 char");
  } else if (!isEmail(emailVal)) {
    setErrorMsg(email, "Not valid email");
  } else {
    setSuccessMsg(email);
  }

   //validate password
   if (passwordVal === "") {
    setErrorMsg(password, "password cannot be blank");
  } else if (passwordVal.length < 8) {
    setErrorMsg(password, "password cannot be less than 8 char");
  } else if (passwordVal.length > 25) {
    setErrorMsg(password, "password cannot be more than 25 char");
//   } else if(!checkPass(passwordVal)) {
//     setErrorMsg(password, "Enter valid password");
  } else {
    setSuccessMsg(password);
  }

   //confirm password
   if (cpasswordVal === "") {
    setErrorMsg(cpassword, "password cannot be blank");
  } else if ((password.value) !== (cpassword.value)) {
    setErrorMsg(cpassword, "Password are not matching");
  } else {
    setSuccessMsg(cpassword);
  }

  
   //Gender
   if (radioBtnVal === "") {
    setErrorMsg(radioBtn, "gender cannot be blank");
  } else {
    setSuccessMsg(radioBtn);
  }

   //Select stream
   if (selectStreamVal === "") {
    setErrorMsg(selectStream, "Please Select stram");
   }else {
    setSuccessMsg(selectStream);
  }

  function isAlphabate(isalpha) {
    return /^[A-Za-z]+$/.test(isalpha);
  }

  function isDigit(isdigit) {
    return /^\d{10}$/.test(isdigit);
  }

  function isEmail(isemail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(isemail);
  }

//   function checkPass(checkpass){
//     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])$/.test(checkpass);
//   }


successMsg();
};

function setErrorMsg(input, errormsgs) {
  const inputBox = input.parentElement;
  const small = inputBox.querySelector("small");
  inputBox.className = "input-box error";
  small.innerText = errormsgs;
}

function setSuccessMsg(input) {
  const inputBox = input.parentElement;
  inputBox.className = "input-box success";
}
