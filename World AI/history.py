import json


array = [1, 2, 3]
new_array = []
array.reverse()
new_array = array
print(new_array)


with open('data.json') as json_file:
    data = json.load(json_file)
    for p in data['people']:
        print('Name: ' + p['name'])
        print('Website: ' + p['website'])
        print('From: ' + p['from'])

        print('')
