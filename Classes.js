class Person{
    constructor(id,name,address="Pune"){
        this.id = id;
        this.name = name;
        this.address = address;
    }

    display(){
        console.log(`id:${this.id} name:${this.name} address : ${this.address}`);
    }
}

class Employee extends Person{
    constructor(id,name,address,desg,role="Software Developer"){
        super(id,name,address);
        this.desg = desg;
        this.role = role;
    }
    display(){
        super.display();
        console.log(`desg : ${this.desg} role : ${this.role}`)
    }
}

let ob = new  Employee(1,"Sumit","Pune","CS");
ob.display();

jsonObj = JSON.stringify(ob); // convert ob into JSON

console.log(`Json Obj : ${jsonObj}`);

JsObj = JSON.parse(jsonObj);  // convert it into Js Object

// console.log(`Js Object ${JsObj}`);

console.log("below is Js Object")

console.log(JsObj);

