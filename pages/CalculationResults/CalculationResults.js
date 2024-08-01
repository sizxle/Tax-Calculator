window.onload = (event) => {
    const customer= Customer.fromJSON(JSON.parse(localStorage.getItem("customer")));



  };

  document.getElementById("taxInfoForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const customer=Customer.fromJSON(JSON.parse(localStorage.getItem("customer")));
  
    const form = document.getElementById("taxInfoForm");
    const formData = new FormData(form);
    const taxInfo = new TaxInfo();
  
    taxInfo.setId(customer.getTaxInfoList().length);
    taxInfo.setTaxPaid(formData.get("taxPaid"))
    taxInfo.setTaxYear(formData.get("taxYear"))
    taxInfo.setSalary(formData.get("salary"));
    taxInfo.setBonuses(formData.get("bonuses"));
    taxInfo.setInterestReceived(formData.get("interestReceived"));
    taxInfo.setDividends(formData.get("dividends"));
    taxInfo.setTotalCapitalGain(formData.get("totalCapitalGain"));
    taxInfo.setRetirementFunds(formData.get("retirementFunding"));
    taxInfo.setTravelAllowance(formData.get("travelAllowance"));
    taxInfo.setDependents(formData.get("medicalDependencies"))
    // customer.addTaxInfo(taxInfo);
    const taxCalculator= new TaxCalculator(taxInfo);
    taxCalculator.compute();

    console.log(taxCalculator.totalExpense)

    showResults(taxCalculator);
    // localStorage.setItem("customer",JSON.stringify(customer.toObject()))
  });

  
function showResults(taxCalculator){

  const summary=document.getElementById("summary");
  summary.style.display="block"

  const totalIncomeTaxable= document.getElementById("total-income");
  const income = taxCalculator.totalTaxableIncome;
  const formattedIncome = new Intl.NumberFormat().format(income);
  totalIncomeTaxable.innerText= `${formattedIncome}`;  
  
  const totalExpense= document.getElementById("total-expense-deductible");
  totalExpense.innerText=taxCalculator.totalExpense;
 
  const taxableIncome= document.getElementById("taxable-income");
  taxableIncome.innerText=taxCalculator.amountToBeTaxed;

  const taxPayable= document.getElementById("tax-payable");
  taxPayable.innerText=taxCalculator.taxPayable;

  const medicalCredit= document.getElementById("medical-credit");
  medicalCredit.innerText=taxCalculator.medicalCredit;

  const rebate= document.getElementById("rebate");
  rebate.innerText=taxCalculator.rebate;

  const netPayable= document.getElementById("nett-payable");
  netPayable.innerText=taxCalculator.netTaxPayable;

  const finalPayable= document.getElementById("final-payable");
  finalPayable.innerText=taxCalculator.finalTaxPayable;
}