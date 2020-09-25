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
async function basicDetails(token, username){
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
    return topLanguages(token, username);
}

// Fetching Top 3 Languages
async function topLanguages(token, username){
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
    return totalContributions(token, username);
}

// Fetching Total Contributions
async function totalContributions(token, username){
    const headers = {
        'Authorization': `bearer ${token}`,
    }
    const body = {
        "query": `query {
            user(login: "${username}") {
              name
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                }
              }
            }
          }`
    }
    const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
    const data = await response.json()
    folio["contributions"] = data.data.user.contributionsCollection.contributionCalendar.totalContributions

    return folio
}

module.exports = async function myfolio(token, username){
    const ans = await basicDetails(token, username);
    return ans
}

//basicDetails('capturemathan');