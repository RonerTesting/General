const { writeFileSync, readFileSync } = require("fs");
console.log('start');
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first} , ${second}`,
  {flag:'a'}
);

console.log('done with this task');
console.log('starting the next one');const { writeFile, readFile } = require("fs");

readFile(
  "./content/first.txt",
  /*utf8,*/ (error, result) => {
    if (error) {
      console.log(err);
      return;
    }
    const first = result.toString();
    console.log(first);
    readFile("./content/second.txt", (error, result) => {
      if (error) {
        console.log(error);
      }
      const second = result;
      writeFile(
        "./content/result-async.txt",
        `Here is the result:\n${first} , ${second}`
        ,(err,result)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log(result)
        }
      );
    });
  }
);
