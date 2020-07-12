let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let birthday = document.getElementById("birthday");
let address = document.getElementById("address");
let city = document.getElementById("city");
let state = document.getElementById("state");
let zip = document.getElementById("zip");

// select

let education = document.getElementById("education");
let height_feet = document.getElementById("height-feet");
let height_in = document.getElementById("height-in");

//result

let resultEducation = 0;

let height_feet_result = 0;
let height_in_result = 0;

//check name validation
function checkName() {
  var name = document.getElementById("name").value;
  if (
    name.length == 0 ||
    name.length > 40 ||
    name == null ||
    !name.trim().length
  ) {
    //prevent submit if fails
    alert("Name can not only be empty space or greater than 40 characters");
  }
}

// confirm email validation
function confirmEmail() {
  var email = document.getElementById("email").value;
  var confemail = document.getElementById("confirmedEmail1").value;
  if (email != confemail) {
    //prevent submit if fails
    alert("Email Not Matching!");
  }
}

function dataSave() {
  //result page
  let result_name = document.getElementById("result_name");
  resultEducation = education[education.selectedIndex];
  height_feet_result = height_feet[height_feet.selectedIndex];
  height_in_result = height_in[height_in.selectedIndex];

  //store * input
  if (
    name.value.length !== 0 &&
    email.value.length !== 0 &&
    phone.value.length !== 0 &&
    birthday.value.length !== 0 &&
    resultEducation.value !== null
  ) {
    localStorage.setItem("name", name.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("phone", phone.value);
    localStorage.setItem("birthday", birthday.value);
    localStorage.setItem("education", education.value);
  }

  //store optional input height
  if (
    height_feet_result.value !== null &&
    height_in_result.value !== null &&
    height_feet_result.value !== "feet" &&
    height_in_result.value !== "in"
  ) {
    localStorage.setItem(
      "height",
      height_feet_result.value + " ft " + height_in_result.value
    );
  } else {
    localStorage.setItem("height", "None");
  }

  //store optional input address
  if (
    address.value !== null &&
    address.value.length > 0 &&
    city.value !== null &&
    city.value.length > 0 &&
    state.value !== null &&
    state.value.length > 0 &&
    zip.value !== null &&
    zip.value.length > 0
  ) {
    localStorage.setItem(
      "address",
      `${address.value}, ${city.value},${state.value}, ${zip.value}`
    );
  } else {
    localStorage.setItem("address", "None");
  }
}

function loadFunction(e) {
  result_name.innerHTML = localStorage.getItem("name");
  result_email.innerHTML = localStorage.getItem("email");
  result_phone.innerHTML = localStorage.getItem("phone");
  result_birthday.innerHTML = localStorage.getItem("birthday");
  console.log(localStorage.getItem("name"));
  console.log(localStorage.getItem("email"));

  if (
    localStorage.getItem("education") !== null &&
    localStorage.getItem("education").length > 0 &&
    localStorage.getItem("education") != "Degree"
  ) {
    result_education.innerHTML = localStorage.getItem("education");
  } else {
    result_education.innerHTML = "None";
  }

  if (result_height.innerHTML !== "feet ft in") {
    result_height.innerHTML = localStorage.getItem("height");
  } else {
    result_height.innerHTML = "None";
  }

  if (localStorage.getItem("address") !== null) {
    result_address.innerHTML = localStorage.getItem("address");
  } else {
    result_address.innerHTML = "None";
  }
}
