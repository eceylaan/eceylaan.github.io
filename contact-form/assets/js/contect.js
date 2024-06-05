let form = document.querySelector("form");

function formSubmit(e) {
  e.preventDefault();
  let formElement = this
  let isValid = validate(formElement);

  if (isValid) {
    alert("Message Sent!  Thanks for completing the form. We’ll be in touch soon!");
  }

  if (!validate(formElement)) {
    return;
  }

  let name = formElement[0].value
  let surName = formElement[1].value
  let email = formElement[2].value
  let generalEnquiry = formElement[3].checked
  let supportRequest = formElement[4].checked
  let message = formElement[5].value
  let consent = formElement[6].checked
  console.log(name, surName, email, generalEnquiry, supportRequest, message, consent)

  let formInfo = {
    name: name,
    surname: surName,
    email: email,
    selection: generalEnquiry ? "General Enquiry" : "Support Request",
    message: message,
    consent: "consented to being contacted",

  }
  console.log(formInfo);

  let tableContent = `
  <table>
    <tr>
        <td>First Name </td>
        <td>: ${formInfo.name}</td>
    </tr>
    <tr>
        <td>Last Name </td>
        <td>: ${formInfo.surname}</td>
    </tr>
    <tr>
        <td>Email </td>
        <td>: ${formInfo.email}</td>
    </tr>
    <tr>
        <td>Query Type </td>
        <td>: ${formInfo.selection}</td>
    </tr>
    <tr>
        <td>Message </td>
        <td>: ${formInfo.message}</td>
    </tr>
    <tr>
        <td>Consent </td>
        <td>: ${formInfo.consent}</td>
    </tr>
    </table>
`;
  document.getElementById("tableContainer").innerHTML = tableContent;

}

function validate(formElement) {
  let isValid = true;

  let nameError = document.getElementById('name-error');
  let surnameError = document.getElementById('surname-error');
  let emailError = document.getElementById('email-error');
  let messageError = document.getElementById('message-error');
  let consentError = document.getElementById('consent-error');
  let queryError = document.getElementById('query-error');

  let nameInput = formElement.querySelector('input[name="fname"]');
  let surnameInput = formElement.querySelector('input[name="lname"]');
  let emailInput = formElement.querySelector('input[name="email"]');
  let messageInput = formElement.querySelector('textarea[name="message"]');

  if (!formElement[0].value.trim()) {
    nameError.innerText = 'This field is required';
    nameError.style.display = 'block';
    nameInput.style.borderColor = 'red';
    isValid = false;
  }
  else {
    nameError.style.display = 'none';
    nameInput.style.borderColor = '';
  }

  if (!formElement[1].value.trim()) {
    surnameError.innerText = 'This field is required';
    surnameError.style.display = 'block';
    surnameInput.style.borderColor = 'red';
    isValid = false;
  }
  else {
    surnameError.style.display = 'none';
    surnameInput.style.borderColor = '';
  }

  if (!formElement[2].value.trim()) {
    emailError.innerText = 'Please enter a valid email address';
    emailError.style.display = 'block';
    emailInput.style.borderColor = 'red';
    isValid = false;
  }
  else {
    emailError.style.display = 'none';
    emailInput.style.borderColor = '';
  }

  if (!formElement[5].value.trim()) {
    messageError.innerText = 'This field is required';
    messageError.style.display = 'block';
    messageInput.style.borderColor = 'red';
    isValid = false;
  }
  else {
    messageError.style.display = 'none';
    messageInput.style.borderColor = '';
  }

  if (!formElement[6].checked) {
    consentError.innerText = 'To submit this form, please consent to being contacted';
    consentError.style.display = 'block';
    isValid = false;
  }
  else {
    consentError.style.display = 'none';
  }

  if (!formElement[3].checked && !formElement[4].checked) {
    queryError.innerText = 'Please select a query type';
    queryError.style.display = 'block';
    isValid = false;
  } else {
    queryError.style.display = 'none';
  }

  return isValid;
}

form.addEventListener("submit", formSubmit);


