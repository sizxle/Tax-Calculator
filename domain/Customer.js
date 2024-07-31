class Customer{

    #name;
    #surname;
    #email;
    #taxInfoList;

    constructor(name,surname,email,taxInfoList=[]){
        this.#name=name;
        this.#surname=surname;
        this.#email=email;
        this.#taxInfoList=taxInfoList;
    }

    getName(){
        return this.#name;
    }

    setName(name){
        this.#name=name;
    }

    getSurname(){
        return this.#surname;
    }

    setSurname(surname){
        this.#surname=surname;
    }

    getEmail(){
        return this.#email;
    }

    setEmail(email){
        this.#email=email;
    }



    toString(){
        return `${this.#name}  ${this.#surname};`
    }

    addTaxInfo(taxInfo){
        if(taxInfo instanceof TaxInfo){
            this.#taxInfoList.push(taxInfo);
        }
    }
    getTaxInfoList(){
        return this.#taxInfoList;
    }

    getTaxInfo(id){
        return this.#taxInfoList[id];
    }

    toObject() {
        return {
            name: this.#name,
            surname: this.#surname,
            email: this.#email,
            taxInfoList: this.#taxInfoList.map(taxInfo=> taxInfo.toObject()),
        };
    }

    static fromJSON(object){
        const taxInfoList = object.taxInfoList.map(ti => new TaxInfo(ti.salary,ti.bonuses,ti.interestReceived,ti.dividends,ti.totalCapitalGain,ti.retirementFunds,ti.travelAllowance));
        return new Customer(object.name,object.surname,object.email,taxInfoList);
    }
}