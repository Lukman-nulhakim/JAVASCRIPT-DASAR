
async function getAPI(){
    try {
        const result    = await fetch('https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/');
        const data      = await result.json();
        console.log(data);
    } catch(error) {
        console.log(error);
    }
}

getAPI();