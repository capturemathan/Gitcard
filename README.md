# Gitcard
Template cards to showcase your GitHub proficiency on blogs and websites :bowtie:

![Gitcard](https://github.com/capturemathan/Gitcard/blob/master/assets/banner.jpg?raw=true)

### Installation </>
`npm install gitcardjs --save`

### Usage
1. Add the CSS tags
``` html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://raw.githubusercontent.com/capturemathan/Gitcard/master/assets/gitfolio.css">
```
2. Require the Package
``` javascript
const Gitcard = require('gitcardjs');
```
3. Call the package with passing `github username`
``` javascript
Gitcard('capturemathan').then(function(res){
    console.log(res)
    /*
    <div class="column is-one-quarter"><div class="card" id="cardfolio"><div class="card-image" id="profilepic"><figure class="image container is-128x128"><img class="is-rounded" src="https://avatars2.githubusercontent.com/u/36666781?v=4"></figure></div><div class="has-text-centered" id="name"><a href="https://github.com/capturemathan" target="_blank">Mathana Kumar S</a></div><div class="has-text-centered" id="languages"><span class="is-info tag" id="item">Java</span><span class="is-info tag" id="item">Python</span><span class="is-info tag" id="item">JavaScript</span></div><div class="has-text-centered" id="repos"><img style="vertical-align:middle" src= "https://raw.githubusercontent.com/capturemathan/Gitcard/master/assets/cloud.png" height="40" width="40"><span id="repotext">22 Repositories</span></div><div class="has-text-centered" id="contributions"><img style="vertical-align:middle" src= "https://raw.githubusercontent.com/capturemathan/Gitcard/master/assets/graph.png" height="40" width="40"><span id="contribtext">557 Contributions</span></div><footer class="card-footer" id="follow"><div class="card-footer-item">27 Followers</div><div class="card-footer-item">15 Following</div></footer></div></div>
    */
   Pass the res to any of the container tags using `innerHTML` methods like `dangerouslySetInnerHTML` in REACT
})
```