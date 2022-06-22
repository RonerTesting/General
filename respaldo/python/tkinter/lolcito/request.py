import requests
from pprint import pprint
username="Gatichico"
URL = f"https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/{username}"
KEY="RGAPI-b6e40425-3863-4b7a-88ef-96056fd04f12"
payload = {'api_key': KEY}
r = requests.get(URL,payload)
pprint(r.json())