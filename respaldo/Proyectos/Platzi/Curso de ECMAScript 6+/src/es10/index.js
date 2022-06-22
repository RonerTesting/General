let array = [1,2,3,[1,2,3,[1,2,3]]];
console.log(array.flat(3))

let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value=>[value,value*2]))

let hello = '           hello world';
console.log(hello);
console.log(hello.trimStart());

try{
}catch{
    // error
}

let entries = [["name","roner"],["Age",25]];

console.log(Object.fromEntries(entries));

let mySymbol = `My Synmbol`
let symbol = Symbol(mySymbol);
console.log(symbol.description);
console.log(symbol)

const promise1 = new Promise((resolve,reject)=> reject("reject"))
const promise2 = new Promise((resolve,reject)=> resolve("resolve"))
const promise3 = new Promise((resolve,reject)=> resolve("resolve 1"));
Promise.allSettled([promise1,promise2,promise3])
.then(response=> console.log(response))
try{

    console.log(window);
}catch{
    
}

console.log(globalThis);

const foo = null ?? 'default string';
console.log(foo);

const user={};

console.log(user?.profile?.email)
if(user?.profile?.email){
    console.log('email')
}else{
    console.log('fail');
}
