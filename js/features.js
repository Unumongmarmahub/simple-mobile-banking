// cash out btn start
document.getElementById("out-btn").addEventListener("click", function () {
  const addButton = document.getElementById("add-money-form");
  addButton.classList.add("hidden");

  const outButton = document.getElementById("out-money-form");
  outButton.classList.remove("hidden");
});
// cash out btn end

// add money button start
document.getElementById("add-btn").addEventListener("click", function () {
  const addButton = document.getElementById("add-money-form");
  addButton.classList.remove("hidden");

  const outButton = document.getElementById("out-money-form");
  outButton.classList.add("hidden");
});
// add money button form
