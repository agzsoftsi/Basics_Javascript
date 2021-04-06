/**
  * Case Promises
  */
// eslint-disable-next-line no-unused-vars

const datos = [{
  id: 1,
  title: 'Iron Man',
  year: 2008,
},
{
  id: 2,
  title: 'Spiderman',
  year: 2017,
},
{
  id: 3,
  title: 'Avengers',
  year: 2019,
}];

// Sincrono
const getDatos = () => datos;
console.log(getDatos());

// Asincrono me devuelve undefine por que no tiene promesas
const getNewDatos = () => {
  setTimeout(() => datos, 1500);
};
console.log(getNewDatos());

// Asincrono me devuelve usando promesas
const getNewDatosP = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(datos);
  }, 1500);
});
getNewDatosP().then((datos) => {
  console.log(datos);
});


// Asincrono me devuelve usando promesas async y await
async function newPromise() {
  try{
    const datosN = await getDatos();
    console.log(datosN);
  }
  catch (err){
    console.log("error");
  }

}

newPromise();
