/*
 * Copyright (c) 2020 | Mathana Kumar S (https://capturemathan.github.io)
 */

const utils= require('./utils.js')
const inithtml='<div class="column is-one-quarter"><div class="card" id="cardfolio">'
const endhtml ='</div></div>'
var finalhtml=inithtml;

async function fetchFolio(token, username){
    return utils(token, username).then(function(res){
        return htmlFolio(res,username);
    });
}

function htmlFolio(result,username){
    
        //console.log(result)

        const initprofile = '<div class="card-image" id="profilepic"><figure class="image container is-128x128"><img class="is-rounded"' 
        + ' src=' + '"' + result["imgurl"] + '">';
        const endprofile='</figure></div>';
        finalhtml+=initprofile+endprofile;

        const initname='<div class="has-text-centered" id="name"><a'
        + ' href='+ '"https://github.com/' + username + '" ' + 'target="_blank">' + result["name"];
        const endname= '</a></div>';
        finalhtml+=initname+endname;

        const initlang = '<div class="has-text-centered" id="languages">'
        const endlang = '</div>'
        const initspantag = '<span class="is-info tag" id="item">'
        const endspantag = '</span>'
        const langarray=result["languages"]
        var finalspan=''
        for(var i=0;i<langarray.length;i++){
            finalspan+=initspantag+langarray[i]+endspantag;
        }
        finalhtml+=initlang+finalspan+endlang;

        const initrepo='<div class="has-text-centered" id="repos"><img style="vertical-align:middle"' 
        + ' src= ' +'"https://raw.githubusercontent.com/capturemathan/Gitcard/master/assets/images/cloud.png" ' + 'height="40" width="40">';
        const nrepo = '<span id="repotext">' + result["repocount"] + ' Repositories';
        const endrepo = '</span></div>';
        finalhtml+=initrepo+nrepo+endrepo;

        const initcontrib='<div class="has-text-centered" id="contributions"><img style="vertical-align:middle"' 
        + ' src= ' +'"https://raw.githubusercontent.com/capturemathan/Gitcard/master/assets/images/graph.png" ' + 'height="40" width="40">';
        const ncontrib = '<span id="contribtext">' + result["contributions"] + ' Contributions';
        const endcontrib = '</span></div>';
        finalhtml+=initcontrib+ncontrib+endcontrib;

        const initfooter ='<footer class="card-footer" id="follow"><div class="card-footer-item">'
        + result["followers"] + ' Followers</div><div class="card-footer-item">'
        + result["following"] + ' Following</div></footer>';
        finalhtml+=initfooter;

        finalhtml+=endhtml;
        //console.log(finalhtml)
        return finalhtml
}

module.exports = async function Gitcard(token, username){
    return fetchFolio(token, username).then(function(ans){
        return ans;
    });
}
//console.log(Gitcard('capturemathan'))