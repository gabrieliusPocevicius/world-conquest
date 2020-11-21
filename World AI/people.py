import urllib.request
import json


print("Hello World")
data = {}

data['people'] = []
data['people'].append({
    'name': 'Scott',
    'website': 'stackabuse.com',
    'from': 'Nebraska'
})


with open('data.json', 'w', encoding='utf-8') as outfile:
    json.dump(data, outfile)


with urllib.request.urlopen('http://python.org/') as response:
    html = response.read()
print(html)
