//POST

await fetch('URL', {
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({OBJECT})
})


//PUT
await fetch('URL', {
    method:'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({OBJECT})
})

//DELETE
await fetch('URL', {
    method:'DELETE',
})