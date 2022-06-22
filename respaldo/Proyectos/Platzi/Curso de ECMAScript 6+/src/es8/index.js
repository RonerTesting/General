const data = {
    frontend:'Oscar',
    backend:'Isabel',
    design:'Ana'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.lenght);

const mydata = {
    frontend:'Oscar',
    backend:'Isabel',
    design:'Ana'
}
const values = Object.values(mydata);
console.log(values); 

const string = 'hello'
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,'------1'));


const helloWorld = ()=>{
    return new Promise((resolve,reject)=>{
        (false)
        ? setTimeout(() => resolve('Hello World'), 1000)
        : reject( new Error('Test'))
    })
}

const helloAsync = async ()=>{
    const hello = await helloWorld();
    console.log(hello);

}

helloAsync();

const anotherFunction = async ()=>{
    try{
        const hello =  await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
}

anotherFunction();