class Customer{

    #name;
    #surname;
    #email;

    constructor(name,surname,email){
        this.#name=name;
        this.#surname=surname;
        this.#email=email;
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
            email: this.#email
        };
    }

    static fromJSON(object){
        return new Customer(object.name,object.surname,object.email);
    }
}