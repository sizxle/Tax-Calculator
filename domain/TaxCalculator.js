class TaxCalculator{

    #taxInfo;
    #TotalTaxableIncome;

    constructor(taxInfo){
        if(taxInfo instanceof TaxInfo){
            this.#taxInfo=taxInfo;
        }
    }

    compute(){
        this.#TotalTaxableIncome=this.#taxInfo.getSalary()+this.#taxInfo.getBonuses();
        
    }



}