function extract(targetElementId) {
    const targetEl = document.getElementById(targetElementId)
    const content = targetEl.textContent

    const pattern = /\(.+?\)/g
    const matches = content.match(pattern)

    const formattedMatches = matches.map(match => match.substring(1, match.length-1))

    return formattedMatches.join(`; `)
}

let text = extract("content")

console.log(text)