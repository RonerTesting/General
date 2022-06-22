const axios = require('axios').default;

axios({
    method:'GET',
    hostname:`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}`,
    path:``,
    port: 443,
    headers:{
        "X-Riot-Token": "RGAPI-fc8b3c85-8d74-4b16-be84-6cf19d898954",
        'Content-Type': 'application/json;charset=utf-8',
        }
})