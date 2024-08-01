window.onload = (event) => {
    const customer= Customer.fromJSON(JSON.parse(localStorage.getItem("customer")));
    const taxInfo=customer.getTaxInfo(0); //fix this
    const taxCalculator= new TaxCalculator(taxInfo);
    taxCalculator.compute();


  };

  document.getElementById("taxInfoForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const customer=Customer.fromJSON(JSON.parse(localStorage.getItem("customer")));
  
    const form = document.getElementById("taxInfoForm");
    const formData = new FormData(form);
    const taxInfo = new TaxInfo();
  
    taxInfo.setId(customer.getTaxInfoList().length);
    taxInfo.setSalary(formData.get("salary"));
    taxInfo.setBonuses(formData.get("bonuses"));
    taxInfo.setInterestReceived(formData.get("interestReceived"));
    taxInfo.setDividends(formData.get("dividends"));
    taxInfo.setTotalCapitalGain(formData.get("totalCapitalGain"));
    taxInfo.setRetirementFunds(formData.get("retirementFunding"));
    taxInfo.setTravelAllowance(formData.get("travelAllowance"));
  
    customer.addTaxInfo(taxInfo);
    localStorage.setItem("customer",JSON.stringify(customer.toObject()))
  
    console.log(customer)
  
    closeModal("taxInfoModal");
  });