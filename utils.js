// Required Imports
const fetch = require('node-fetch');
const cheerio = require('cheerio');
const axios = require("axios");

// Variable Declarations
var followers=0
var following=0
var imgurl=""
var repocount=0
var name=""
var reposurl=""
var languages=[]
var freqLanguages={}
var contributions=0

// Basic Details Function
async function basicDetails(){
    await fetch('https://api.github.com/users/capturemathan')
    .then(response => response.json())
    .then(json => {
        name=json["name"]
        repocount=json["public_repos"]
        followers=json["followers"]
        following=json["following"]
        imgurl=json["avatar_url"]
        reposurl=json["repos_url"]
    })
    console.log(name,repocount,followers,following,imgurl,reposurl);
    topLanguages();
}

// Fetching Top 3 Languages
async function topLanguages(){
    await fetch(reposurl)
    .then(response => response.json())
    .then(json => {
        for(var i=0; i<json.length;i++){
            var lang=json[i]["language"]
            if(lang==null){
                continue;
            }
            else if(freqLanguages[lang]){
                freqLanguages[lang]++;
            }
            else{
                freqLanguages[lang]=1
            }
        }
        
        var items = Object.keys(freqLanguages).map(function(key) {
            return [key, freqLanguages[key]];
        });

        items.sort(function(first, second) {
            return second[1] - first[1];
        });
        
        var count=0
        for(var i=0;i<items.length;i++){
            if(count==3){
                break;
            }
            else{
                languages.push(items[i][0])
                count++;
            }
        }
        console.log(languages)
    })
    totalContributions();
}

// Fetching Total Contributions
async function totalContributions(){
    const result = await axios.get('https://github.com/users/capturemathan/contributions');
    const data = cheerio.load(result.data);
    let cal = data(".js-yearly-contributions")
    contributions=parseInt(data(".position-relative h2", cal).text().trim().replace(/\n/g, '').split(" ")[0])
    console.log(contributions)
}

basicDetails()