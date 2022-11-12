function setFormMessage(formElement, type, message) {
  const messageElement = formElement.querySelector(".form__message");

  messageElement.textContent = message;
  messageElement.classList.remove(
    "form__message--success",
    "form__message--error"
  );
  messageElement.classlist.add(`form__message--${type}`);
}

//setFormMessage(loginForm,'success',"You're logged In!");
function setInputError(inputElement, message) {
  inputElement.classList.add("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = message;
}

function clearInputError(inputElement) {
  inputElement.classList.remove("form__input--error");
  inputElement.parentElement.querySelector(
    ".form__input-error-message"
  ).textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");

  document
    .querySelector("#linkCreateAccount")
    .addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("form--hidden");
      createAccountForm.classList.remove("form--hidden");

      //  var enteremail = document.getElementById('getemail').value;
      //  var enterpassword = document.getElementById('getpassword').value;

      //  var getemail = localStorage.getItem('userEmail');
      //  var getpassword = localStorage.getItem('userpassword');

      //  if(enteremail === getemail){
      //    if(enterpassword === getpassword){
      //       alert('Login Successfull');
      //    }else{
      //       alert('Wrong Password');
      //    }
      //  }else{
      //    alert('Invalid Credantials');
      //  }
      // var email = document.getElementById("setemail").value;
      // var password = document.getElementById("setpassword").value;
      // console.log(email, password);

      // localStorage.setItem("userEmail", JSON.stringify(email));
      // localStorage.setItem("userpassword", JSON.stringify(password));
    });

  document.querySelector("#linkLogin").addEventListener("click", (e) => {
    e.preventDefault();
    loginForm.classList.remove("form--hidden");
    createAccountForm.classList.add("form--hidden");

    //  var email = document.getElementById('setemail').value;
    //  var password = document.getElementById('setpassword').value;

    //  localStorage.setItem("userEmail",email);
    //  localStorage.setItem("userpassword",password);
  });

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    //here -  AJAX / fetch login
    var enteremail = document.getElementById("getemail").value;
    var enterpassword = document.getElementById("getpassword").value;
    let res = await fetch(
      `https://pacific-spire-33801.herokuapp.com/comments/${enteremail}`
    );
    //  var getemail = JSON.parse(localStorage.getItem("userEmail"));
    //  var getpassword = JSON.parse(localStorage.getItem("userpassword"));

    let logininfo = await res.json();
    console.log(logininfo);
    getemail = logininfo.id;
    getpassword = logininfo.Password;

    if (enteremail == getemail) {
      if (enterpassword == getpassword) {
        alert("Login Successfull");
        localStorage.setItem("User_info",JSON.stringify(logininfo.Username))

         window.location.href="../index.html"
      } else {
        alert("Wrong Password");
      }
    } else {
      setFormMessage(
        loginForm,
        "error",
        "Invalid username/password combination"
      );
    }

    //  setFormMessage(loginForm, "error", "Invalid username/password combination");
  });

  document.querySelectorAll(".form__input").forEach((inputElement) => {
    inputElement.addEventListener("blur", (e) => {
      if (
        e.target.id === "signupUsername" &&
        e.target.value.length > 0 &&
        e.target.value.length < 8
      ) {
        setInputError(inputElement, "Username must be of atleast 8 characters");
      }
      if (
        e.target.id === "setpassword" &&
        e.target.value.length > 0 &&
        e.target.value.length < 8
      ) {
        setInputError(inputElement, "Passwerd must be of atleast 8 characters");
      }
    });
    inputElement.addEventListener("input", (e) => {
      clearInputError(inputElement);
    });
  });
});

// document
//   .getElementById("signupbutton")
//   .addEventListener("submit", function () {});

// function myfun(e){
//    e.preventDefault();
//    console.log('invoke')
// }

document.querySelector("#submt123").addEventListener("click", async (e) => {
  e.preventDefault();
  var email = document.getElementById("setemail").value.trim(" ");
  var password = document.getElementById("setpassword").value;
  var Username = document.getElementById("signupUsername").value.trim(" ");
  console.log(email, password);
  sendUdata = {
    id: email,
    Username: Username,
    Password: password,
  };
  // console.log(sendUdata);

  //   localStorage.setItem("userEmail", JSON.stringify(email));
  //   localStorage.setItem("userpassword", JSON.stringify(password));

  let res = await fetch(`https://pacific-spire-33801.herokuapp.com/comments`, {
    method: "POST",
    body: JSON.stringify(sendUdata),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let A = await res.json();
  // console.log(A);
  alert("Signup Successfull");
  // window.reload()
  // window.location.href=""

});





function myFunction() {
  var x = document.getElementById("getpassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}