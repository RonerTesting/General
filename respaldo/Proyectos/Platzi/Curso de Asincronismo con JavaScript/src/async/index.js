const doSomethingAsync = () =>{
    return new Promise((resolve,reject)=>{
        true
        ? setTimeout(()=>resolve('I did Something Async'),3000)
        :reject(new Error("I couldn't make it"))
    })
}

const doSomething = async ()=>{
    console.log('a');
    const something= await doSomethingAsync();
    console.log(something);
}
console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async()=>{
    try{
    const something = await doSomethingAsync();
    console.log(something);
    }catch
    {
        console.error(error);
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');
