// cash out btn start
document.getElementById("out-btn").addEventListener("click", function () {
  const addButton = document.getElementById("add-money-form");
  addButton.classList.add("hidden");
  const transactionContainer = document.getElementById("transactions");
  transactionContainer.classList.add("hidden");

  const outButton = document.getElementById("out-money-form");
  outButton.classList.remove("hidden");
});
// cash out btn end

// add money button start
document.getElementById("add-btn").addEventListener("click", function () {
  const addButton = document.getElementById("add-money-form");
  addButton.classList.remove("hidden");
  const transactionContainer = document.getElementById("transactions");
  transactionContainer.classList.add("hidden");

  const outButton = document.getElementById("out-money-form");
  outButton.classList.add("hidden");
});
// add money button form

// transaction form start
document
  .getElementById("transaction-btn")
  .addEventListener("click", function () {
    const transactionContainer = document.getElementById("transactions");
    transactionContainer.classList.remove("hidden");

    const addButton = document.getElementById("add-money-form");
    addButton.classList.add("hidden");

    const outButton = document.getElementById("out-money-form");
    outButton.classList.add("hidden");
  });
// transaction form end
