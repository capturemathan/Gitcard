/*
 * Copyright (c) 2020 | Mathana Kumar S (https://capturemathan.github.io)
 */
import 'regenerator-runtime/runtime'
import getPortfolio from './utils.js'

async function fetchFolio(token, username) {
    const result = await getPortfolio(token, username)

    const markup = `
    <div class="column is-one-quarter">
        <div class="card" id="cardfolio">
            <div class="card-image" id="profilepic">
                <figure class="image container is-128x128">
                    <img class="is-rounded" src="${result['avatar_url']}" />
                </figure>
            </div>
            <div class="has-text-centered" id="name">
                <a href="https://github.com/${username}" target="_blank">${result['name']}</a>
            </div>
            <div class="has-text-centered" id="languages">
                ${result['languages'].map((lan) => `<span class="is-info tag" id="item">${lan}</span>`)}
            </div>
            <div class="has-text-centered" id="repos">
                <img style="vertical-align:middle" src="https://raw.githubusercontent.com/capturemathan/Gitcard/master/assets/images/cloud.png" height="40" width="40" />
                <span id="repotext">${result['public_repos']} Repositories</span>
            </div>
            <div class="has-text-centered" id="contributions">
                <img style="vertical-align:middle" src="https://raw.githubusercontent.com/capturemathan/Gitcard/master/assets/images/graph.png" height="40" width="40">
                <span id="contribtext">${result['contributions']} Contributions</span>
            </div>
            <footer class="card-footer" id="follow">
                <div class="card-footer-item">${result['followers']} Followers</div>
                <div class="card-footer-item">${result['following']} Following</div>
            </footer>
        </div>
    </div>
`

    return markup
}

async function Gitcard(token, username) {
    return await fetchFolio(token, username)
}

module.exports = Gitcard
