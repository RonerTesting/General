const https = require('https');

let username = 'Gatichico'
const API_KEY = 'RGAPI-b6e40425-3863-4b7a-88ef-96056fd04f12'
const options = {
    hostname:`la1.api.riotgames.com`,
    path:`/lol/summoner/v4/summoners/by-name/${username}`,
    port: 443,
    method:'GET',
    headers:{
        "X-Riot-Token": "RGAPI-fc8b3c85-8d74-4b16-be84-6cf19d898954",
        'Content-Type': 'application/json;charset=utf-8',
        }
};

const req = https.request(options, async res => {
  console.log(`statusCode: ${res.statusCode}`);
  let data = ''
  await res.on('data', d => {
    data+=d.toString();
  });
  console.log(data)
});

req.on('error', error => {
  console.error(error);
});

req.end();