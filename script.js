console.log('running')

// fetching api

// let catFacts = [];

// function getCatFacts() {
//     fetch('https://catfact.ninja/facts')
//         .then((resp) => resp.json())
//         .then((data) => {
//            catFacts = data.data
//             console.log('LINE 12: ', catFacts);
//         });
// }

// getCatFacts();
// console.log('LINE 18: ', catFacts);

// setTimeout(myFunction, 3000);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "I love You !!";
// }

// let myPromise = new Promise(function(myResolve, myReject) {
//     setTimeout(function() { myResolve("I love You !!"); }, 3000);
//   });
  
//   myPromise.then(function(value) {
//     document.getElementById("demo").innerHTML = value;
//   });

  // async function adding() {
  //   x=x +3
  //   console.log(x)
  // }

  // let x = 4

  let test = Promise.resolve()
  test.then(() => document.getElementById("demo").innerHTML = test)


function addString() {
  test = 'Hello' + '' + 'Time Travel'
  return test
}
console.log(test)
test = 'what'
console.log(test)
addString()
// since addString has been run test now equals a new string 
let mts = document.getElementById('mathTime')
let yMAth = Promise.resolve()
yMAth.then(() => mts.innerText = yMAth)

yMAth = 55-2 + 5

function helpWithMath () {
  yMAth = yMAth/2
  return yMAth
}
helpWithMath()

let btnMath = document.getElementById('addingNum')

function addFive () {
yMAth = yMAth +5
return yMAth
}

// btnMath.addEventListener( "click",  () =>{ 
//   yMAth= yMAth + 5
//   console.log('click')
//   mts.innerText = yMAth
//   console.log(yMAth)
//   return yMAth
  
// })
// console.log(yMAth)

// trying out the bob's API
// https://bobsburgers-api.herokuapp.com/burgerOfTheDay/1


let numberInput = document.getElementById('quantity')
let bobClick = document.getElementById('burgerClick')
let burgerName = document.getElementById('apiStuff')
let seasonEpisode = document.getElementById('season')


// let epiName = document.getElementById('epi')
// bobClick.addEventListener('click', () =>{
// console.log('click')
// console.log(numberInput.innerText)
// })

// This gets information from APIs
async function apiInfo(url) {
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
let country = 'us'
let zip = '40502'
let key  ='61243455494583beaa9d02e13c7f29e3'
apiInfo('https://rickandmortyapi.com/api')
apiInfo('https://bobsburgers-api.herokuapp.com')
apiInfo(`https://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${key}`)
// https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}

// getBurger('https://bobsburgers-api.herokuapp.com/burgerOfTheDay/1')

bobClick.addEventListener('click', () => {
  async function getBurger(url) {
    
    try {
      const response = await axios.get(url);
      console.log(response);
        burgerName.innerText = response.data.name
        seasonEpisode.innerText = 'The season was ' + response.data.season +'. The Episode was ' + response.data.episode +'.'
    } catch (error) {
      console.error(error);
    }
  }
  const numberBurger = document.getElementById("quantity").value;
  
  getBurger(`https://bobsburgers-api.herokuapp.com/burgerOfTheDay/${numberBurger}`)

})
