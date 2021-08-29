import fetch from 'node-fetch';
import * as fs from 'fs';

const pathToUltsky = 'D:/Games/UltSky'

async function makeLoadOrder() {
    const formData = new FormData();
    const files = document.querySelector('input[type="file"][multiple]');

    formData.append('name', 'test')
    formData.append('game_id', '3')
    formData.append('files[]', 'test.txt')
    const response = await fetch('https://api.loadorderlibrary.com/v1/lists', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
      });
      console.log(await response.json());
}

/*
async function getFile(path: string) {
    return fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            return console.error(err);
        }
        return data;
    });     
}

getFile(`${pathToUltsky}/content/profiles/UltSky (High Preset)/loadorder.txt`);
*/
