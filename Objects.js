// // 1 way of creating objects
// p = {
//     "id":11,
//     "name":"Sumit",
//     "address":"pulgaon",
//     "project":[{"pid":11,"pname":"gaming"},{"pid":12,"pname":"banking"}],
//     "dept" : {
//         "id" : 1,
//         "deptnm" : "cs"
//     }
// }

// console.log(`id = ${p.id} name = ${p.name} address = ${p.address} `);

// console.log(p);

// console.log(p.dept.deptnm);

// console.log(p.project[0].pname);


//  console.log(JSON.stringify(p)); // convert into JSON

let Person = function(id,name,address) {  //Ctor fun()
this.id = id;
this.name = name;
this.address = address;

}

let Employee = function(desg,role){ //Ctor fun()
    this.desg = desg;
    this.role = role;
    
    }
    


p1 = new Person(11,"Sumit","Pulgaon");
p1.mobile = "99999900";  // additionally add mobile property after creating obj

e1 = new Employee("CS","SDE");

// for(value in p1){
//     console.log(`${value} ------------> ${p1[value]}`)
// }

// for(value in e1){
//     console.log(`${value} ------------> ${e1[value]}`)
// }

e1.__proto__ = p1;   // inheritance happen with __proto__ keyword  p1 --> is parent of e1;

for(value in e1){
    console.log(`${value} ------------> ${e1[value]}`)
}






