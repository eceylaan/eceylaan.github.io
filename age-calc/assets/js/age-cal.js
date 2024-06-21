let form = document.querySelector("form");
let calc = document.querySelector(".calc");
let years = document.querySelector("#years");
let months = document.querySelector("#months");
let days = document.querySelector("#days");
let diff = null;
function handleSubmit(e) {
  e.preventDefault();

  let formData = new FormData(form);
  let formObj = Object.fromEntries(formData);
  console.log(formObj);
  const birthDate = new Date(
    parseInt(formObj.year),
    parseInt(formObj.month - 1),
    parseInt(formObj.day)
  );
  console.log(birthDate);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();
  diff = {
    day: dayDiff,
    month: monthDiff,
    year: age,
  };
  renderIntoHtml();
}

form.addEventListener("submit", handleSubmit);

function renderIntoHtml() {
  years.innerText = diff.year;
  months.innerText = diff.month;
  days.innerText = diff.day;
}
