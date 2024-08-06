document
  .getElementById("registrationForm")
  .addEventListener("submit", (event) => {
    const form = document.getElementById("registrationForm");
    const formData = new FormData(form);
    const customer = new Customer();

    formData.forEach((value, key) => {
      switch (key) {
        case "name":
          customer.setName(value);
          break;
        case "surname":
          customer.setSurname(value);
          break;
        case "email":
          customer.setEmail(value);
          break;
      }
    });

    if (!validateCustomerForm(customer)) {
        event.preventDefault();
      return false;
    }
    localStorage.setItem("customer", JSON.stringify(customer.toObject()));
    event.preventDefault();
    closeModal("registrationModal");

    window.location.href = "pages/dashboard/dashboard.html";
  });

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function validateCustomerForm(customer) {
  const name = customer.getName().trim();
  const surname = customer.getSurname().trim();
  const email = customer.getEmail().trim();

  const toast= document.getElementById("toast");


  if (name === "" || surname === "" || email === "") {
    toast.innerText="All fields are required.";
    toast.className = 'toast show'; 
    setTimeout(function() {
        toast.className = toast.className.replace('show', '');
    }, 2000);
    return false;
  }

  // Additional validation (e.g., email format)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    toast.innerText="Please enter a valid email address.";
    toast.className = 'toast show'; 
    setTimeout(function() {
        toast.className = toast.className.replace('show', '');
    }, 2000);
    return false;
  }

  localStorage.setItem("showToast", "true");
  return true;
}
