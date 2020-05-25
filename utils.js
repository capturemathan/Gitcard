const fetch = require('node-fetch');

var followers=0
var following=0
var imgurl=""
var repocount=0
var name=""

async function basicDetails(){
    await fetch('https://api.github.com/users/capturemathan')
    .then(response => response.json())
    .then(json => console.log(json));
}
basicDetails();