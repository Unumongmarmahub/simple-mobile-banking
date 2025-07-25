document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutMoney = document.getElementById("cast-out-money-number").value;
    const cashOutMoneyNumber = parseFloat(cashOutMoney);

    const cashOutPin = document.getElementById("cash-out-pin").value;
    const castOutPinNumber = parseFloat(cashOutPin);

    const availableBalance =
      document.getElementById("available-balance").innerText;
    const availableBalanceMoney = parseFloat(availableBalance);

    const newBalance = availableBalanceMoney - cashOutMoneyNumber;

    if (
      Number.isNaN(cashOutMoneyNumber) ||
      Number.isNaN(availableBalanceMoney)
    ) {
      alert("Invalid balance format.");
      return;
    }

    if (availableBalanceMoney < cashOutMoneyNumber) {
      alert("Please enter a valid amount.");
      return;
    }

    if (castOutPinNumber === 1234) {
      document.getElementById("available-balance").innerText = newBalance;
    } else {
      alert("Your pin in wrong.");
    }

    document.getElementById("cast-out-money-number").value = "";
    document.getElementById("cash-out-pin").value = "";
  });
