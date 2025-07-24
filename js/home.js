// add money section start
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputMoney = document.getElementById("input-money-number").value;
    const inputMoneyNumber = parseFloat(inputMoney);

    const inputPin = document.getElementById("add-money-pin").value;
    const inputPinNumber = parseFloat(inputPin);

    const availableBalance =
      document.getElementById("available-balance").innerText;
    const availableBalanceNumber = parseFloat(availableBalance);
    const newBalance = availableBalanceNumber + inputMoneyNumber;

    if (inputPinNumber === 1234) {
      document.getElementById("available-balance").innerText = newBalance;
    } else {
      alert("Your pin in wrong.");
    }

    document.getElementById("input-money-number").value = "";
    document.getElementById("input-pin").value = "";
  });

// add money section start end
