document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const mobileNumber = document.getElementById("input-mobile-number").value;

    const pinNumber = document.getElementById("input-pin-number").value;

    if (mobileNumber === "018" && pinNumber === "1234") {
      window.location.href = "index2.html";
    } else {
      alert("Your Mobile Number or Pin Number Wrong.");
    }
  });
