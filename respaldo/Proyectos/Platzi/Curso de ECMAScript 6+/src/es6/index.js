function newFunction(name,age,country){
    var name = name|| "oscar";
    var age  = age || "32";
    var country = country|| "MX";
    console.log(name,age,country)
}
//>es6 

function newFunction2(name='oscar',age=32,country="MX"){
    console.log(name,age,country)
}

newFunction2();
newFunction2('Roner',25,'CO');

//>literal templates

// let hello = "Hello";
let world = "world";
// let epicPhrase = hello+' '+world;
// console.log(epicPhrase);
// let epicPhrase2 = `${hello} ${world}`;
// console.log(epicPhrase2);

//3 LET y CONST, Multilínea, Spread Operator y Desestructuración
//String multilinea
let lorem = "ipsum dolor sit, amet consectetur adipisicing elit\n"+"otra frase";
let lorem2 = `òtra fase que ocupamos
ahora añado otra farse alteatorea
`;
console.log(lorem);
console.log(lorem2);
//Desestructuracion
let person = {
    name:'Roner',
    age:25,
    country:'CO'
}

console.log(person.name,person.age);

let { name, age, country} =  person;
console.log(name,age,country);

//Spread Operator

let team1 = ['Roner','Julian','Ricardo'];
let team2 = ['Jessica','Valeria','Camila'];

let education =  ['David', ...team1,...team2];
console.log(education);

//4 Arrow Functions, Promesas y Parámetros en objetos

//parametros en objetos
let name2 = 'roner';
let edad = 25;
obj =  {name:name,age:age};
obj2 = {name2,edad};
console.log(obj2);

//arrow function

const names=[
    {name:'Roner',age:25},
    {name:'Yordi',age:28},
    {name:'Diana',age:24},
    {name:'Julio',age:27}
]

let listOfNames=names.map(function(item){
    console.log(item.name)
})

let listOfNames2 = names.map(item=>{
    console.log(item.name);
})

const listOfNames3 = (name,age,country) =>{
    //...
}
const listOfNames4 = name=>{
    //..
}

const square = num => num*num;

const helloPromise = ()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('todo bien');
        }else{
            reject('todo mal');
        }
    });
};

helloPromise()
.then(response=> console.log(response))
.catch(error=>console.log(error))
//5 Clases, Módulos y Generadores

class calculator{
    consturctor(){
        this.valueA=0;
        this.valueB=0;
    }
    sum(valueA,valueB){
        this.valueA=valueA;
        this.valueB=valueB;
        return this.valueA+this.valueB;
    }
}
//modulos
const calc =  new calculator();
console.log(calc.sum(2,2));

const hello =  require("./module");
console.log(hello());

function* helloWorld(){
    if (true){
        yield 'Hello,';
    }
    if(true){
        yield 'World';
    }
}

const generatorHellow = helloWorld();
console.log(generatorHellow.next().value);
console.log(generatorHellow.next().value);
console.log(generatorHellow.next().value);

/*
function* fibonacci(){
  var fn1 = 1;
  var fn2 = 1;
  while (true){  
    var actual = fn2;
    fn2 = fn1;
    fn1 = fn1 + actual;
    var reset = yield actual;
    if (reset){
        fn1 = 1;
        fn2 = 1;
    }
  }
}

var secuencia = fibonacci();
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 2
console.log(secuencia.next().value);     // 3
console.log(secuencia.next().value);     // 5
console.log(secuencia.next().value);     // 8
console.log(secuencia.next().value);     // 13
console.log(secuencia.next(true).value); // 1
console.log(secuencia.next().value);     // 1
console.log(secuencia.next().value);     // 2
console.log(secuencia.next().value);     // 3
*/ 
