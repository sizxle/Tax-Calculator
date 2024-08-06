

window.onload = (event) => {
  const customer= Customer.fromJSON(JSON.parse(localStorage.getItem("customer")));

  document.getElementById("customerName").innerText=customer.getName() +" "+ customer.getSurname();
 
  const showToast = localStorage.getItem("showToast");

  if (showToast === "true") {
    var toast = document.getElementById('toast');
    toast.className = 'toast show'; 
    setTimeout(function() {
        toast.className = toast.className.replace('show', '');
    }, 2000);
    localStorage.removeItem("showToast");
  }


  const itemList=document.getElementById('item-list');
  const emptyMessage=document.getElementById('empty-message');

  const calculationList=customer.getTaxInfoList();

  if(calculationList && calculationList.length>0){
    calculationList.forEach(item=>{
      console.log(item)
      const listItem= document.createElement('li');
      listItem.textContent=item.taxYear;
      listItem.setAttribute("id","taxInfoCard");
      listItem.setAttribute("key",item.id);
      listItem.classList.add('card');
      itemList.appendChild(listItem);
    })
    document.getElementById("taxInfoCard").addEventListener("click",event=>{
      event.preventDefault;
    
      const item=document.getElementById("taxInfoCard");
      const id=item.getAttribute("key")
      localStorage.setItem("id",id);

      window.location.href="../CalculationResults/CalculationResult.html"
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

function logout(){
  window.location.href="../../index.html"
}