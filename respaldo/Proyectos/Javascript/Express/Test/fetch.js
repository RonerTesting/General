const fetch = require('node-fetch')
let username = 'Gatichico'
const url = `https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}`
const API_KEY = 'RGAPI-b6e40425-3863-4b7a-88ef-96056fd04f12'

const options = {
    method:'GET',
    headers:{
    "X-Riot-Token": API_KEY,
    'Content-Type': 'application/json;charset=utf-8',
    }
}
makeARequest(url,options)
async function makeARequest(){
    const response = await fetch(url,options)
    for (key in response){
        if(key==='headers'){
            response[key].forEach(element => {
                console.log(element)
            });
            // console.log(`${key}:${response[key][0]}`)
        }
        console.log(`${key}:${response[key]}`)
    }
}
