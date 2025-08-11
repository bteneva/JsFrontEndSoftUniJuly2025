function extract(targetElementId) {
    const targetElement = document.getElementById(targetElementId)
    const content = targetElement.textContent

    const pattern = /\(.+?\)/g
    const matches = content.match(pattern)

    const formattedMatches = matches.map(match => match.substring(1, match.length-1))

    return formattedMatches.join(`; `)

    //const result = document.getElementById('result')
    //result.textContent = 'Result: ' + formattedMatches.join(`; `)
}

