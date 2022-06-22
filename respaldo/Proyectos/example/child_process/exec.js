// const { spawn } = require('child_process');
// const ls = spawn('ls', ['-lh', '/usr']);

// ls.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls.stderr.on('data', (data) => {
//   console.error(`stderr: ${data}`);
// });

// ls.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

const { exec } = require('child_process');

exec('find /',(error,stdout,stderr)=>{
  if(error){
    console.log(`error ${error.message}`);
    return
  }
  if(stderr){
    console.log(`stderr ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);

})