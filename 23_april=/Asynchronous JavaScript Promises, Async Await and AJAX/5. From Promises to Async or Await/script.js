// From Promise to Async / Await

// PRODUCE
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve([512, 422, 329, 877]);
        // reject('Error message');
    }, 1500);
})

const getRecipe = recId => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Fresh Tomato', publisher: 'Jonas'};
            resolve(`${ID} : ${recipe.title}`);
        },1500, recId)
    })
}

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(publisher => {
            const recipe2 = {title: ' Italian Pizza', publisher: 'Jonas'};
            resolve(`${publisher} : ${recipe2.title}`);
        },1500, publisher);
    })
}

// CONSUME
// getIDs.then(IDs => { // IDs = [512, 422, 329, 877]
//     console.log(IDs);
//     return getRecipe(IDs[1]); // 422
// })
// .then(recipe => {
//     console.log(recipe);
//     return getRelated('Jonas');
// }) // 2
// .then(recipe => {
//     console.log(recipe);
// })
// .catch(error => {
//     console.log('Error');
// })


// Async Await
async function getRecipesAw() {
    const IDs = await getIDs;
    console.log(IDs);

    const recipe = await getRecipe(IDs[1]);
    console.log(recipe);

    const related = await getRelated('Jonas');
    console.log(related);

    // bisa lempar data apapun
    return recipe; // cuman contoh

}

getRecipesAw().then(result => console.log(`${result} is the best ever!`));






