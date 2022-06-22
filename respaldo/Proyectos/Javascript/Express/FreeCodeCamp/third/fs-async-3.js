const {readFile,writeFile} = require('fs').promises;

const util = require('util')

const PATH = '../second/content/';

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start = async()=>{
    try {
        const first = await readFile(PATH+'first.txt','utf8')
        const second = await readFile(PATH+'second.txt','utf8')
        await writeFile('./content/result-mind-grenade.txt',`THIS IS AWESOME : ${first}\n`,{flag:'a'})
        console.log(`"${first}" and "${second}"`);
        
    } catch (error) {
        console.log(error);
    }
}
start()


/*---------------------------------------------------------------*/
// const getText=(path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,'utf8',(err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         });
//     })
// }
// getText(PATH+'first.txt')
// .then(result=>console.log(result))
// .catch(err=>console.log(err))
/*---------------------------------------------------------------*/
