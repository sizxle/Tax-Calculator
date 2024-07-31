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

    toObject() {
        return {
            name: this.#name,
            surname: this.#surname,
            email: this.#email,
            taxInfoList: this.#taxInfoList,
        };
    }

    static fromJSON(object){
        return new Customer(object.name,object.surname,object.email,object.taxInfoList);
    }
}