if (typeof init === "undefined") {
    const init = function () {
      const injectElement = document.createElement("div");
      injectElement.className = "myElement";
      injectElement.innerHTML = "Mi elemento inyectado";
      document.body.appendChild(injectElement);
      console.log(window.location.href);
    };
  
    init();
  }
  
  /*
  async function dameLaData (url){
    let xd = await fetch(URL)
            .then()
            .catch(err=>console.log(err))
  }
  */
  /*
  
  Observable del cliente acutal
  
  let chat = document.querySelector('.ForumContent')
  
  const config = { childList: true};
  const callback = (mutationsList, observer)=>{
       for(const mutation of mutationsList) {
          if (mutation.type === 'childList') {
              let chatActualizado = document.querySelector('.ChatFeed');
              let nuevos = chatActualizado.children.length - chatInicial.children.length;
              console.log('A child node has been added or removed.');
              console.log(nuevos);
          }
          else if (mutation.type === 'attributes') {
              console.log('The ' + mutation.attributeName + ' attribute was modified.');
          }
      }
  }
  const observer = new MutationObserver(callback);
  
  // Start observing the target node for configured mutations
  observer.observe(chat, config);
  
  // Later, you can stop observing
  
  <script>(.*?)</script>
  
  */
  
  let chat = document.querySelector(".ChatFeed");
  
  const config = { childList: true };
  const callback = (mutationsList, observer) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        const lista = mutationsList[0].target;
        console.log("A child node has been added or removed.");
        console.log(lista);
        inspecionarLista(lista);
      } else if (mutation.type === "attributes") {
        console.log("The " + mutation.attributeName + " attribute was modified.");
      }
    }
  };
  const observer = new MutationObserver(callback);
  
  // Start observing the target node for configured mutations
  observer.observe(chat, config);
  
  // Later, you can stop observing
  async function miFuncion(e) {
    try {
  
      let curso = document.querySelector('.cursos');
      curso.innerHTML='';
      let url = 'https://platzi.com/p/'+this.querySelector("p.Message-content-author").innerText
      console.log(url);
      let dataStorage = JSON.parse(localStorage.getItem('estudiantes'));
      if (dataStorage) {
        let findUser = dataStorage.find(el=>el.user===url); 
        if(findUser){
          console.log(findUser,url);
          
          let infoUser = [...findUser.data.matchAll(/\{(?:[^{}]|())*\}/g)];
          console.log("usuarios",dataStorage.length,'infoUser: ',infoUser)
          let xd = infoUser.find((e,index)=>{
            if(e[0].includes('/cursos/')){
              console.log(JSON.parse(e[0]))
              let item = document.createElement('img');
              // item.innerText=JSON.parse(e[0]).title;
              item.style.backgroundColor=JSON.parse(e[0]).color;
              item.src=JSON.parse(e[0]).badge;
              item.style.borderRadius='100%';
              item.style.height='44px';
              item.style.width='44px';
              item.style.margin='4x';
              
              let infoItem= 
  
              curso.appendChild(item)
            }
            //name:[^,]*
          })
          // let arry = [dataStorage]
          // console.log(arry);
          // const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) !== index)
          // const duplicateElements = toFindDuplicates(arry);
          // console.log(duplicateElements);
          // console.log(dataStorage);
        }else{
          let miData = await fetch(url).then((data) => data.text());
          let especificacion = miData.match(
            /<script\b[^>]*>([\s\S]*?)<\/script>/gm
          );
          // console.log(especificacion);
          let encontrada = especificacion.find((element) =>
            element.includes("window.projects =")
          );
          dataStorage.push({user:url,data:encontrada})
          dataStorage = JSON.stringify(dataStorage);
          localStorage.setItem('estudiantes',dataStorage);
          // console.log(encontrada);
    
        }
      }else{
        dataStorage=[];
        let miData = await fetch(url).then((data) => data.text());
        let especificacion = miData.match(
          /<script\b[^>]*>([\s\S]*?)<\/script>/gm
        );
        // console.log(especificacion);
        let encontrada = especificacion.find((element) =>
          element.includes("window.projects =")
        );
        dataStorage.push({user:url,data:encontrada})
        dataStorage = JSON.stringify(dataStorage);
        localStorage.setItem('estudiantes',dataStorage);
        // console.log(encontrada);
      }
  
     } catch (error) {
      console.log(error);
    }
  }
  
  function inspecionarLista(lista) {
    elementos = [...lista.children];
    [...lista.children].forEach((element) => {
      element.removeEventListener("mouseenter", miFuncion);
      element.addEventListener("mouseenter", miFuncion);
    });
  }
  
  const contenedor = document.createElement('div');
  contenedor.style.color='white';
  contenedor.style.height="250px";
  contenedor.style.width="400px";
  contenedor.style.backgroundColor="rgba(102,51,153,9.5)";
  contenedor.className='xd';
  contenedor.style.position="fixed";
  contenedor.style.borderRadius="20px";
  contenedor.style.bottom="20px";
  contenedor.style.right="20px";
  contenedor.style.zIndex='1';
  contenedor.style.display='flex';
  contenedor.style.justifyContent='space-around';
  contenedor.style.alignItems='center';
  contenedor.style.flexFlow='column';
  contenedor.style.overflowX='hidden';
  
  contenedor.style.display='flex';
  
  const cursos = document.createElement('div');
  cursos.className='cursos';
  cursos.overflowX='auto';
  cursos.style.display='flex';
  cursos.style.flexWrap='wrap';
  cursos.style.justifyContent='space-around';
  // cursos.style.setProperty()
  cursos.style.width='100%';
  cursos.style.height='100%';
  cursos.innerHTML="palabra"
  
  const personal = document.createElement('div')
  personal.innerHTML="palabra"
  personal.style.width='100%';
  personal.style.height='100%';
  
  contenedor.appendChild(cursos)
  contenedor.appendChild(personal)
  
  const body = document.querySelector('body');
  body.appendChild(contenedor);
  
  // const arry = ['apple','orange', 'banana', 'grapes', 'mango', 'orange'];
  
  // sudo apt-get install docker-ce=5:20.10.13~3-0~ubuntu-focal docker-ce-cli=5:20.10.13~3-0~ubuntu-focal containerd.io
  
  
  