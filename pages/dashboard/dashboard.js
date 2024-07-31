document.getElementById("taxInfoForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const form = document.getElementById("taxInfoForm");
  const formData = new FormData(form);
  const taxInfo = new TaxInfo();

  taxInfo.setSalary(formData.get("salary"));
  taxInfo.setBonuses(formData.get("bonuses"));
  taxInfo.setInterestReceived(formData.get("interestReceived"));
  taxInfo.setDividends(formData.get("dividends"));
  taxInfo.setTotalCapitalGain(formData.get("totalCapitalGain"));
  taxInfo.setRetirementFunds(formData.get("retirementFunding"));
  taxInfo.setTravelAllowance(formData.get("travelAllowance"));

    if(localStorage.getItem("taxInfoList")==null){
        localStorage.setItem("taxInfoList","[]")
    }else{
        localStorage.getItem("taxInfoList");
    }
  console.log(localStorage.getItem("taxInfoList"));
});
