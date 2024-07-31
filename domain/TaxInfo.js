class TaxInfo{

    #id
    #salary;
    #bonuses;
    #interestReceived;
    #dividends;
    #totalCapitalGain;
    #retirementFunds;
    #travelAllowance;

    constructor(salary=0,bonuses=0,interestReceived=0,dividends=0,totalCapitalGain=0,retirementFunds=0,travelAllowance=0){
        this.#salary=salary;
        this.#bonuses=bonuses;
        this.interestReceived=interestReceived;
        this.#dividends=dividends;
        this.#totalCapitalGain=totalCapitalGain;
        this.#retirementFunds=retirementFunds;
        this.#travelAllowance=travelAllowance;
    }

    getId() {
        return this.#id;
      }
    
      setId(id) {
        this.#id = id;
      }
    
      getSalary() {
        return this.#salary;
      }
    
      setSalary(salary) {
        this.#salary = salary;
      }
    
      getBonuses() {
        return this.#bonuses;
      }
    
      setBonuses(bonuses) {
        this.#bonuses = bonuses;
      }
    
      getInterestReceived() {
        return this.#interestReceived;
      }
    
      setInterestReceived(interestReceived) {
        this.#interestReceived = interestReceived;
      }
    
      getDividends() {
        return this.#dividends;
      }
    
      setDividends(dividends) {
        this.#dividends = dividends;
      }
    
      getTotalCapitalGain() {
        return this.#totalCapitalGain;
      }
    
      setTotalCapitalGain(totalCapitalGain) {
        this.#totalCapitalGain = totalCapitalGain;
      }
    
      getRetirementFunds() {
        return this.#retirementFunds;
      }
    
      setRetirementFunds(retirementFunds) {
        this.#retirementFunds = retirementFunds;
      }
    
      getTravelAllowance() {
        return this.#travelAllowance;
      }
      setTravelAllowance(travelAllowance) {
        this.#travelAllowance = travelAllowance;
      }

      toString(){
        return `${this.#salary}`;
      }
      
      toObject() {
        return {
            id: this.#id,
            salary: this.#salary,
            bonuses: this.#bonuses,
            interestReceived: this.#interestReceived,
            dividends: this.#dividends,
            totalCapitalGain: this.#totalCapitalGain,
            retirementFunds: this.#retirementFunds,
            travelAllowance: this.#travelAllowance,
        };
    }


}