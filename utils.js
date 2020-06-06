/*
 * Copyright (c) 2020 | Mathana Kumar S (https://capturemathan.github.io)
 */

// Required Imports
const fetch = require('node-fetch');

// Variable Declarations
var languages=[]
var freqLanguages={}
var folio={}

// Basic Details Function
async function basicDetails(username){
    await fetch('https://api.github.com/users/'+username)
    .then(response => response.json())
    .then(json => {
        folio["name"]=json["name"]
        folio["repocount"]=json["public_repos"]
        folio["followers"]=json["followers"]
        folio["following"]=json["following"]
        folio["imgurl"]=json["avatar_url"]
        folio["reposurl"]=json["repos_url"]
    })
    return topLanguages(username);
}

// Fetching Top 3 Languages
async function topLanguages(username){
    await fetch(folio["reposurl"])
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
        folio["languages"]=languages
    })
    return totalContributions(username);
}

// Fetching Total Contributions
async function totalContributions(username){
    await fetch('https://mathanapis.000webhostapp.com/fetchcontrib.php?username='+username)
    .then(response => response.json())
    .then(json => {
        folio["contributions"]=json["contributions"]  
    });
    //console.log(folio)
    return folio
}

module.exports = async function myfolio(username){
    const ans = await basicDetails(username);
    return ans
}

//basicDetails('capturemathan');