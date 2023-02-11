let films= []
let number = 0
async function getFilm(){
    try{
        const url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films'
        let response = await fetch(url, {
            headers:{
                'Content-Type': 'application/json',
                'X-API-KEY': '77864d20-a9e0-4023-84a9-3287f80644ec',
            },
        })
        const films = await response.json()
        console.log(films)
        showFilm(films.items)
    }
    catch(error){
        console.error(error);
        alert('О Ш И Б К А')
    }
}

getFilm()

function showFilm (posts) {
    const postsDiv = document.getElementById('posts')
    for ( let post of posts){
        let filmName = post.nameRu || post.nameOriginal 
        if (filmName.length > 33) {
            filmName = filmName.slice(0, -9) + '...'
        }
        postsDiv.innerHTML += `
        <button id = "${post.kinopoiskId}" onclick="toFilmPage(${post.kinopoiskId})">
            <div class="post">
                <img src="${post.posterUrlPreview}" alt="${filmName}" height="470px" width="350px" margin="auto">
                <h4 style="display: flex; flex-wrap: wrap">${filmName}</h4>
                <p></p>
            </div>
        </button>`
        films.push(filmName)
    }
}
console.log(films)

function toFilmPage(post) {
    console.log(post);
    let page = window.open(`./page.html?id=${post}`);

}

// const page = document.querySelector('post.kinopoiskId')
// page.onclick = function showContent (posts){
//     var window = window.open()
//     alert('')
// }