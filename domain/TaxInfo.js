class TaxInfo{

    #id
    #salary;
    #bonuses;
    #interestReceived;
    #dividends;
    #totalCapitalGain;
    #retirementFunds;
    #travelAllowance;

    constructor(){

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


}