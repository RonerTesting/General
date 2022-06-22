(async () => {
  const puppeteer = require("puppeteer");
  const URL =
    "http://oferta.senasofiaplus.edu.co/sofia-oferta/buscar-oferta-educativa.html";
  const mongoose = require("mongoose");
  let conection = mongoose
    .connect("mongodb://localhost:27017/test")
    .catch((err) => {
      console.log(err);
    });
  const SenaCourse = require("./model.js");
  // console.log(SenaCourse)
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(URL);
  await page.screenshot({ path: "example.png", fullPage: true });
  let complementaria = [];

  console.log(complementaria);
  let cont = 0;
  while (true) {
    // if (cont===4)break;
    cont++;
    console.log(page.url());
    // page.waitForTimeout(100);
    try {
      let siguiente = await page.click(
        ".busqueda_siguiente.paginadorBusquedaOfertaEducativaManual"
      );
    } catch (e) {
      console.log(e);
      break;
    }
    await page.screenshot({
      path: `./screenshot/example_${cont}.png`,
      fullPage: true,
    });
    callInfo = await page.$$eval(".complementaria", (body) => {
      let data = [];
      body.forEach((element) => {
        let myData = {};
        try {
          myData.nombre = "CURSO DE " + element.querySelector("h3").innerText;
          myData.tipo = element.querySelector(".cuerpo_resultado").innerText;
          myData.modalidad =
            element.querySelector(".tabla_presencial").innerText;
          myData.ciudad = element.querySelector(".tabla_ciudad").innerText;
          myData.lugar = element.querySelector(".tabla_centro").innerText;
          myData.fechaInicio = element.querySelector(".tabla_inicio").innerText;
          myData.nivelRequerido = element.querySelector(".right p").innerText;
          myData.URL = element.querySelector(".td6 a").href;
        } catch (error) {
          console.log(error);
        }
        data.push(myData);
      });
      return data;
    });
    if(typeof(callInfo)!=='number')
      complementaria.push(...callInfo);

    callInfo = await page.$$eval(".titulada", (body) => {
      let data = [];
      body.forEach((element) => {
        let myData = {};
        try {
          myData.nombre = "CURSO DE " + element.querySelector("h3").innerText;
          myData.tipo = element.querySelector(".cuerpo_resultado").innerText;
          myData.modalidad =
            element.querySelector(".tabla_presencial").innerText;
          myData.ciudad = element.querySelector(".tabla_ciudad").innerText;
          myData.lugar = element.querySelector(".tabla_centro").innerText;
          myData.fechaInicio = element.querySelector(".tabla_inicio").innerText;
          myData.nivelRequerido = element.querySelector(".right p").innerText;
          myData.URL = element.querySelector(".td6 a").href;
        } catch (error) {
          console.log(error);
        }
        data.push(myData);
      });
      return data;
    });
    if(typeof(callInfo)!=='number')
      complementaria.push(...callInfo);

    callInfo = await page.$$eval(".virtual", (body) => {
      let data = [];
      body.forEach((element) => {
        let myData = {};
        try {
          myData.nombre = "CURSO DE " + element.querySelector("h3").innerText;
          myData.tipo = element.querySelector(".cuerpo_resultado").innerText;
          myData.modalidad =
            element.querySelector(".tabla_virtual").innerText;
          myData.ciudad = element.querySelector(".tabla_ciudad").innerText;
          myData.lugar = element.querySelector(".tabla_centro").innerText;
          myData.fechaInicio = element.querySelector(".tabla_inicio").innerText;
          myData.nivelRequerido = element.querySelector(".right p").innerText;
          myData.URL = element.querySelector(".td6 a").href;
        } catch (error) {
          console.log(error);
        }
        data.push(myData);
      });
      return data;
    });

    if(typeof(callInfo)!=='number'){

      complementaria.push(...callInfo);
    }
    if (callInfo === 1) {
      break;
    }

  }
  // console.log(...complementaria);
  Object.entries(complementaria).forEach(async ([key, obj]) => {
    console.log(obj.nombre);
    const course = await new SenaCourse({
      nombre: obj.nombre,
      tipo: obj.tipo,
      modalidad: obj.modalidad,
      ciudad: obj.ciudad,
      lugar: obj.lugar,
      fechaInicio: obj.fechaInicio,
      nivelRequerido: obj.nivelRequerido,
      URL: obj.URL,
    });
    await course.save((err, course) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Curso ${obj.nombre} guradado.`);
      }
    });
    // console.log(complementaria[key])
  });

  console.log("fin de programa");

  await browser.close();
})();
