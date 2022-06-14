var signup = document.getElementById("login");

signup.addEventListener("click", function () {
  if (confirm("가입하시겠습니까?")) {
    window.location.href = "mainpage.html";
  } else {
    window.location.href = "signup.html";
  }
});
