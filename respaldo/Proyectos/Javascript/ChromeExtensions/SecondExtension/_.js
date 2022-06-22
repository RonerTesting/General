let url ="https://platzi.com/p/"
let user = 'paulasosa26'
async function dameLaData (url,user){
    let  miData  =  await fetch(url+user).then(data=>data.text())
    let especificacion = miData.match(/<script\b[^>]*>([\s\S]*?)<\/script>/gm);
    // console.log(especificacion);
    let encontrada = especificacion.find(element=>element.includes('window.projects ='))
    console.log(encontrada);
}
/*
async function (){
    let await fetch("https://platzi.com/p/kasantacruza/")
      .then((data) => data.text())
      .then((data) => {
        return data.match(/<script\b[^>]*>([\s\S]*?)<\/script>/gm);
      });
        
    }
*/