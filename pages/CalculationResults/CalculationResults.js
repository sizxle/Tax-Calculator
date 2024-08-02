window.onload = (event) => {
  const customer = Customer.fromJSON(
    JSON.parse(localStorage.getItem("customer"))
  );
  if (localStorage.getItem("id")) {
    const taxInfo = customer.getTaxInfo(0);
    populateForm(taxInfo);
    const taxCalculator = new TaxCalculator(taxInfo);
    taxCalculator.compute();
    showResults(taxCalculator);
  }
};

function populateForm(taxInfo) {
  document.getElementById("taxPaid").value = taxInfo.getTaxPaid();
  document.getElementById("taxYear").value = taxInfo.getTaxYear();
  document.getElementById("salary").value = taxInfo.getSalary();
  document.getElementById("bonus").value = taxInfo.getBonuses();
  document.getElementById("interest").value = taxInfo.getInterestReceived();
  document.getElementById("dividends").value = taxInfo.getDividends();
  document.getElementById("totalCapitalGain").value =
    taxInfo.getTotalCapitalGain();
  document.getElementById("retirementFunding").value =
    taxInfo.getRetirementFunds();
  document.getElementById("travelAllowance").value =
    taxInfo.getTravelAllowance();
  document.getElementById("medicalDependencies").value =
    taxInfo.getDependents();
}

document.getElementById("taxInfoForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const customer = Customer.fromJSON(
    JSON.parse(localStorage.getItem("customer"))
  );

  const form = document.getElementById("taxInfoForm");
  const formData = new FormData(form);
  const taxInfo = new TaxInfo();

  taxInfo.setId(customer.getTaxInfoList().length);
  taxInfo.setTaxPaid(formData.get("taxPaid"));
  taxInfo.setTaxYear(formData.get("taxYear"));
  taxInfo.setSalary(formData.get("salary"));
  taxInfo.setBonuses(formData.get("bonuses"));
  taxInfo.setInterestReceived(formData.get("interestReceived"));
  taxInfo.setDividends(formData.get("dividends"));
  taxInfo.setTotalCapitalGain(formData.get("totalCapitalGain"));
  taxInfo.setRetirementFunds(formData.get("retirementFunding"));
  taxInfo.setTravelAllowance(formData.get("travelAllowance"));
  taxInfo.setDependents(formData.get("medicalDependencies"));
  // customer.addTaxInfo(taxInfo);
  const taxCalculator = new TaxCalculator(taxInfo);
  taxCalculator.compute();

  console.log(taxCalculator.totalExpense);

  showResults(taxCalculator);
  // localStorage.setItem("customer",JSON.stringify(customer.toObject()))
});

function showResults(taxCalculator) {
  const summary = document.getElementById("summary");
  summary.style.display = "block";

  const taxYear = document.getElementById("tax-year");
  taxYear.innerText = taxCalculator.taxInfo.getTaxYear();

  const incomeAssessed = document.getElementById("income-total");
  incomeAssessed.innerText = taxCalculator.totalTaxableIncome;

  const progressBarExpense = document.getElementById("progress-bar-expanse");
  let width =
    (taxCalculator.totalExpense / taxCalculator.totalTaxableIncome) * 100;
  progressBarExpense.style.width = `${width}%`;

  const totalIncomeTaxable = document.getElementById("total-income");
  const income = taxCalculator.totalTaxableIncome;
  const formattedIncome = new Intl.NumberFormat().format(income);
  totalIncomeTaxable.innerText = `${formattedIncome}`;

  const totalExpense = document.getElementById("total-expense-deductible");
  const expanse = taxCalculator.totalExpense;
  const formattedExpanse = new Intl.NumberFormat().format(expanse);
  totalExpense.innerText = formattedExpanse;

  const taxableIncome = document.getElementById("taxable-income");
  const incomeTaxable = taxCalculator.amountToBeTaxed;
  const formattedIncomeTaxable = new Intl.NumberFormat().format(incomeTaxable);
  taxableIncome.innerText = formattedIncomeTaxable;

  const taxPayable = document.getElementById("tax-payable");
  const payableTax = taxCalculator.taxPayable;
  const formattedPayableTax = new Intl.NumberFormat().format(payableTax);
  taxPayable.innerText = formattedPayableTax;

  const medicalCredit = document.getElementById("medical-credit");
  const medicalCredits = taxCalculator.medicalCredit;
  const formattedMedicalCredit = new Intl.NumberFormat().format(medicalCredits);
  medicalCredit.innerText = formattedMedicalCredit;

  const rebate = document.getElementById("rebate");
  const rebateValue = taxCalculator.rebate;
  const formattedRebate = new Intl.NumberFormat().format(rebateValue);
  rebate.innerText = formattedRebate;

  const netPayable = document.getElementById("nett-payable");
  const netPayableValue = taxCalculator.netTaxPayable;
  const formattedNetPayable = new Intl.NumberFormat().format(netPayableValue);
  netPayable.innerText = formattedNetPayable;

  const taxPaid = document.getElementById("tax-paid");
  const taxPaidValue = taxCalculator.taxInfo.getTaxPaid();
  const formattedTaxPaid = new Intl.NumberFormat().format(taxPaidValue);
  taxPaid.innerText = formattedTaxPaid;

  const finalPayable = document.getElementById("final-payable");
  let finalPayableValue = taxCalculator.finalTaxPayable;

  if (finalPayableValue < 0) {
    finalPayableValue *= -1;
    const formattedFinalPayable = new Intl.NumberFormat().format(
      finalPayableValue
    );
    finalPayable.innerText = `You Paid More Tax By R${formattedFinalPayable}`;
  } else {
    const formattedFinalPayable = new Intl.NumberFormat().format(
      finalPayableValue
    );
    finalPayable.innerText = `You Owe R${formattedFinalPayable}`;
  }
}

function navigateToDashboard() {
  window.location.href = "../dashboard/dashboard.html";
}

document.getElementById("save-btn").addEventListener("click", (event) => {
  event.preventDefault();
  const customer = Customer.fromJSON(
    JSON.parse(localStorage.getItem("customer"))
  );

  const form = document.getElementById("taxInfoForm");
  const formData = new FormData(form);
  const taxInfo = new TaxInfo();

  taxInfo.setId(customer.getTaxInfoList().length);
  taxInfo.setTaxPaid(formData.get("taxPaid"));
  taxInfo.setTaxYear(formData.get("taxYear"));
  taxInfo.setSalary(formData.get("salary"));
  taxInfo.setBonuses(formData.get("bonuses"));
  taxInfo.setInterestReceived(formData.get("interestReceived"));
  taxInfo.setDividends(formData.get("dividends"));
  taxInfo.setTotalCapitalGain(formData.get("totalCapitalGain"));
  taxInfo.setRetirementFunds(formData.get("retirementFunding"));
  taxInfo.setTravelAllowance(formData.get("travelAllowance"));
  taxInfo.setDependents(formData.get("medicalDependencies"));
  customer.addTaxInfo(taxInfo);
  const taxCalculator = new TaxCalculator(taxInfo);
  taxCalculator.compute();
  showResults(taxCalculator);
  localStorage.setItem("customer", JSON.stringify(customer.toObject()));
});
