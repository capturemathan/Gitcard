# Gitcard
Template cards to showcase your GitHub proficiency on blogs and websites :bowtie:
</br></br>
![npm](https://img.shields.io/npm/dt/gitcardjs?color=brightgreen&style=for-the-badge)

![Gitcard](https://github.com/capturemathan/Gitcard/blob/master/assets/images/banner.jpg?raw=true)

### Installation </>
`npm install gitcardjs --save`

### Usage
1. Download the desired CSS theme (Light or Dark) from [here](https://github.com/capturemathan/Gitcard/tree/master/assets/themes) and link it as a Stylesheet, uses [Bulma](https://bulma.io/) under the hood.
``` js
import './gitcard-light.css'; 
```
2. Require the Package
``` javascript
const Gitcard = require('gitcardjs');
```
3. Call the package by passing `github authorization token` with scope `read:user` from [here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) and `github username`
``` javascript
Gitcard('token', 'capturemathan').then(function(res){
    console.log(res)
    /*
    <div class="columns"><div class="column is-one-quarter">...</div></div>
    */
   Pass the res to any of the container tags using `innerHTML` methods like `dangerouslySetInnerHTML` in REACT
})
```
4. Refer to the [example](https://github.com/capturemathan/Gitcard/tree/master/example) directory for further details. 
### Open Source License
Read the license [here](https://github.com/capturemathan/Gitcard/blob/master/LICENSE)
