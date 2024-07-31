document.getElementById("registrationForm").addEventListener("submit",(event)=>{
    
    const form = document.getElementById("registrationForm");
    const formData = new FormData(form);
    const customer = new Customer();

    formData.forEach((value,key)=>{
        switch (key) {
            case 'name':
                customer.setName(value);
                break;
            case 'surname':
                customer.setSurname(value);
                break;
            case 'email':
                customer.setEmail(value);
                break;
        }
    });

    localStorage.setItem("customer",JSON.stringify(customer.toObject()));
    event.preventDefault();
    closeModal("registrationModal");
});

function closeModal(modalId){
    document.getElementById(modalId).style.display="none";
    // const customer1= Customer.fromJSON( JSON.parse(localStorage.getItem("customer")));
    // console.log(customer1);
}

function openModal(modalId){
    document.getElementById(modalId).style.display="block";
}

