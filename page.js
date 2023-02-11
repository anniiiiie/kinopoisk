
async function showContent(){
    let filmId = window.location.href
    const filmIdSplite = filmId.split('=')
    const numberFilm = filmIdSplite[1]
    try{
        const response = await axios.get(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${numberFilm}`,{
            headers:{
                'Content-Type': 'application/json',
                'X-API-KEY': '77864d20-a9e0-4023-84a9-3287f80644ec',
            }
        });
        const film = response.data
        console.log(response.data);
        let filmContr = film.countries
        let countries = ``
        for (i=0; filmContr.length>i; i++){
            if (i != filmContr.length -1){
                countries += `${filmContr[i].country}` + `,`
            }
            else{
                countries += `${filmContr[i].country}`
            }
        }
        let filmGanr = film.genres
        let genres = ``
        for (i=0; filmGanr.length>i; i++){
            if (i != filmGanr.length -1){
                genres += `${filmGanr[i].genre}` + `, `
            }
            else{
                genres += `${filmGanr[i].genre}`
            }
        }
        let year = film.year
        if (film.endYear !== null){
            year += `-` + `${film.endYear}`
        }
        const informationDiv = document.querySelector('.information')
    informationDiv.innerHTML += `
    <div id="information_1">
        <img src="${film.posterUrl}" height="600px" width="450px" margin="auto">
    </div>
    <div id="information_2">
        <div style: display: flex;flex-direction: row;>
            <h4 style="display: flex; flex-wrap: wrap">${film.nameRu}</h4>
            <p><b>Год:</b> ${year}</p>
            <p><b>Страны:</b> ${countries}</p>
            <p><b>Жанр:</b> ${genres}</p>
            <p><b>Аннотация:</b> ${film.description}</p>
        </div>
    </div>`
    }
    catch(error){
        console.error(' О Ш И Б К А ', error)
    }
    
}
showContent()