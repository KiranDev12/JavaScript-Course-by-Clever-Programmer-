let dogImage = document.getElementById('dogImage')
let getImage = document.getElementById('getImage')

getImage.onclick = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(json => {
            console.log((json))
            dogImage.innerHTML = `<img src = "${json.message}" height = 300 weight = 300>`
        })
}
