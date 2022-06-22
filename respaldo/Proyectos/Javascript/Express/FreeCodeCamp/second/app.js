const { writeFile, readFile } = require("fs");
console.log('start');
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
        `Here is the result:\n${first} , ${second}`,
        (err,result)=>{
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