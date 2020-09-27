/*
 * Copyright (c) 2020 | Mathana Kumar S (https://capturemathan.github.io)
 */

// Required Imports
const fetch = require('node-fetch')

// Basic Details Function
async function getPortfolio(token, username) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()

    let folio = {
        name,
        repocount,
        followers,
        following,
        imgurl,
        reposurl
    } = data
    folio.languages = await topLanguages(folio.reposurl)
    folio.contributions = await totalContributions(token, username)

    return folio
}

// Fetching Top 3 Languages
async function topLanguages(reposurl) {
    const response = await fetch(reposurl)
    const data = await response.json()

    let languagesMap = data.reduce((acc, { language }) => ((acc[language] = (acc[language] || 0) + 1), acc), {})

    let topThreeLanguages = Object.keys(languagesMap)
        .sort((first, second) => languagesMap[second] - languagesMap[first])
        .slice(0, 3)

    return topThreeLanguages
}

// Fetching Total Contributions
async function totalContributions(token, username) {
    const headers = {
        Authorization: `bearer ${token}`
    }
    const body = `{
        query: query {
            user(login: "${username}") {
                contributionsCollection {
                    contributionCalendar {
                        totalContributions
                    }
                }
            }
        }
    }`

    const response = await fetch('https://api.github.com/graphql', { method: 'POST', body, headers })
    const data = await response.json()
    return data.data.user.contributionsCollection.contributionCalendar.totalContributions
}

module.exports = getPortfolio