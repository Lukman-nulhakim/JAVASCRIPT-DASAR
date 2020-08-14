// From Callback to Promise

// 1. Get an array ID of recipe
// 2. then from that id we get the title
// 3. then from publisher we got another recipe

// PENDING
// FULLFILL
// REJECT

// Callback Fungsi - Promise Object
// Promise .then()

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
getIDs.then(IDs => { // IDs = [512, 422, 329, 877]
    console.log(IDs);
    return getRecipe(IDs[1]); // 422
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Jonas');
}) // 2
.then(recipe => {
    console.log(recipe);
})
.catch(error => {
    console.log('Error');
})

// function getDriverLicense(driverName){
//     console.log(driverName);
//     return driverName;
// }

// getDriverLicense('Udin');