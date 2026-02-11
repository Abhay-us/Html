function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}

function validateForm() {
  let name = document.contactForm.name.value;
  let email = document.contactForm.email.value;
  let mobile = document.contactForm.mobile.value;
  let country = document.contactForm.country.value;
  let gender = document.contactForm.gender.value;
  let hobbies = [];
  let checkboxes = document.getElementsByName("hobbies[]");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      hobbies.push(checkboxes[i].value);
    }
  }
  let nameErr = true;
  let emailErr = true;
  let mobileErr = true;
  let countryErr = true;
  let genderErr = true;

  if (name == "") {
    printError("nameErr", "Please Enter your name");
  } else {
    let regex = /^[a-zA-Z\s]+$/;
    if (regex.test(name) == false) {
      printError("nameErr", "Please Enter a valid name");
    } else {
      printError("nameErr", "");
      nameErr = false;
    }
  }

  //for email

  if (email == "") {
    printError("emailErr", "Please enter your email address");
  } else {
    let regex = /^\S+@\S+\.\S+$/;
    if (regex.test(email) === false) {
      printError("emailErr", "Please eneter valid Email adreess");
    } else {
      printError("emailErr", "");
      emailErr = false;
    }
  }

  if (mobile == "") {
    printError("mobileErr", "Please enter your mobile number");
  } else {
    let regex = /^[1-9]\d{9}$/;
    if (regex.test(mobile) === false) {
      printError("mobileErr", "Please enter a valid 10 digit mobile number");
    } else {
      printError("mobileErr", "");
      mobileErr = false;
    }
  }

  if (country == "Select") {
    printError("countryErr", "Please select your country");
  } else {
    printError("countryErr", "");
    countryErr = false;
  }

  if (gender == "") {
    printError("genderErr", "Please select your gender");
  } else {
    printError("genderErr", "");
    genderErr = false;
  }

  //to prevent page to submit
  if ((nameErr || emailErr || mobileErr || countryErr || genderErr) == true) {
    return false;
  } else {
    let data =
      "You've entered the following details: \n" +
      "Full Name: " +
      name +
      "\n" +
      "Email Address: " +
      email +
      "\n" +
      "Mobile Number: " +
      mobile +
      "\n" +
      "Country: " +
      country +
      "\n" +
      "Gender: " +
      gender +
      "\n";

    if (hobbies.length) {
      data += "Hobbies: " + hobbies.join(", ");
    }
    alert(data);
  }
}
