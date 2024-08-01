class TaxCalculator{

    #taxInfo;
    #totalTaxableIncome;
    #taxableInterest;
    #taxableDividends;
    #taxableCapitalGain;
    #totalExpense;
    #amountToBeTaxed;
    #taxPayable;
    #medicalCredit;
    #finalTaxPayable;
    #deductibleTravel;
    #deductibleRetirementFunds;

    constructor(taxInfo){
        if(taxInfo instanceof TaxInfo){
            this.#taxInfo=taxInfo;
        }
    }

    compute(){

        this.calculateTotalTaxableIncome();
        this.calculateTotalExpense();
        this.#amountToBeTaxed=this.#totalTaxableIncome-this.#totalExpense;
        console.log(this.#amountToBeTaxed)
        this.calculateTaxPayable(this.#amountToBeTaxed);
        console.log(this.#taxPayable)
        
        this.calculateFinalTaxPayable();
        // console.log(this.#finalTaxPayable);
        


    }

    calculateTotalExpense(){
        this.calculateDeductibleTravel();
        this.calculateDeductibleRetirementFunding();
        this.#totalExpense=this.#deductibleRetirementFunds+this.#deductibleTravel;
        
    }

    calculateDeductibleTravel(){
        if(Number(this.#taxInfo.getTravelAllowance()) <= TaxYear2023.TRAVEL_EXEMPTION){
            this.#deductibleTravel=Number(this.#taxInfo.getTravelAllowance());
        }else{
            this.#deductibleTravel=TaxYear2023.TRAVEL_EXEMPTION;
        }
    }

    calculateDeductibleRetirementFunding(){
        if(Number(this.#taxInfo.getRetirementFunds()) <= TaxYear2023.RETIREMENT_EXEMPTION){
            this.#deductibleRetirementFunds=Number(this.#taxInfo.getRetirementFunds());
        }else{
            this.#deductibleRetirementFunds=TaxYear2023.RETIREMENT_EXEMPTION;
        }
    }

    calculateTaxPayable(AmountToBeTaxed){
        this.#taxPayable=TaxYear2023.calculateTaxPayable(AmountToBeTaxed);
    }

    calculateMedicalCredits(dependents){
        this.#medicalCredit=TaxYear2023.calculateMedicalCredits(dependents);
    }

    calculateFinalTaxPayable(){
        this.calculateMedicalCredits(Number(this.#taxInfo.getDependents()));
        this.#finalTaxPayable=this.#taxPayable-this.#medicalCredit-TaxYear2023.PRIMARY_REBATE-Number(this.#taxInfo.getTaxPaid());
    }

    calculateTotalTaxableIncome(){
        this.calculateTaxableInterest();
        this.#taxableDividends=0;
        this.calculateTaxableCapitalGain();
        this.#totalTaxableIncome=Number(this.#taxInfo.getSalary())+Number(this.#taxInfo.getBonuses())+this.#taxableInterest+this.#taxableDividends+this.#taxableCapitalGain;

    }

    calculateTaxableInterest(){
        if(Number(this.#taxInfo.getInterestReceived()) <= TaxYear2023.INTEREST_EXEMPTION){
            this.#taxableInterest=0;
        }else{
            this.#taxableInterest=Number(this.#taxInfo.getInterestReceived())-TaxYear2023.INTEREST_EXEMPTION;
        }
    }

    calculateTaxableCapitalGain(){
        if(Number(this.#taxInfo.getTotalCapitalGain())<=TaxYear2023.CAPITAL_EXEMPTION){
            this.#taxableCapitalGain=0;
        }else{
            this.#taxableCapitalGain=(Number(this.#taxInfo.getTotalCapitalGain())-TaxYear2023.CAPITAL_EXEMPTION)*TaxYear2023.CAPITAL_EXEMPTION_RATE;
        }
    }

     get taxInfo() {
        return this.#taxInfo;
    }

    get totalTaxableIncome() {
        return this.#totalTaxableIncome;
    }

    get taxableInterest() {
        return this.#taxableInterest;
    }

    get taxableDividends() {
        return this.#taxableDividends;
    }


    get taxableCapitalGain() {
        return this.#taxableCapitalGain;
    }

    get totalExpense() {
        return this.#totalExpense;
    }

    get amountToBeTaxed() {
        return this.#amountToBeTaxed;
    }

    get taxPayable() {
        return this.#taxPayable;
    }

    get medicalCredit() {
        return this.#medicalCredit;
    }

    get finalTaxPayable() {
        return this.#finalTaxPayable;
    }

    get deductibleTravel() {
        return this.#deductibleTravel;
    }

    get deductibleRetirementFunds() {
        return this.#deductibleRetirementFunds;
    }

}