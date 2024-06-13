let contactForm = document.querySelector(".contact-form");

function handleFormSubmit(e) {
  e.preventDefault();
  // contactForm.checkValidity() === true
  if (contactForm.checkValidity()) {
    // alert("bu form okey");
    contactForm.submit(); //formu js ile submit etmeye yarıyor
  }
  //else {
  //alert("eksik var kardeş");
  //  }

}

contactForm.addEventListener("submit", handleFormSubmit);