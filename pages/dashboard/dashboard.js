

window.onload = (event) => {
  const customer= Customer.fromJSON(JSON.parse(localStorage.getItem("customer")));

  document.getElementById("customerName").innerText=customer.getName() +" "+ customer.getSurname();
  
  const itemList=document.getElementById('item-list');
  const emptyMessage=document.getElementById('empty-message');

  const calculationList=customer.getTaxInfoList();

  if(calculationList && calculationList.length>0){
    calculationList.forEach(item=>{
      const listItem= document.createElement('li');
      listItem.textContent=item.id;
      listItem.classList.add('card');
      itemList.appendChild(listItem);
    })
  }else{
    emptyMessage.style.display='block';
  }
};

document.getElementById("create-calculation").addEventListener("click",event=>{

  event.preventDefault();
  window.location.href = '../CalculationResults/CalculationResult.html';
})


function closeModal(modalId){
    document.getElementById(modalId).style.display="none";
}

function openModal(modalId){
    document.getElementById(modalId).style.display="block";
}