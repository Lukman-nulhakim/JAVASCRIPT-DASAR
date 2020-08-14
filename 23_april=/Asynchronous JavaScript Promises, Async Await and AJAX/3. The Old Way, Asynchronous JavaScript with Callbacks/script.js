// Asynchronous javascript with Callbacks

// Aku mau ambil Recipe (Title sama publisher)
// Dari Id recipe
// Dari publishernya (recipe 1 - recipe 2)

function getRecipe(){
    setTimeout(() => {
        const recipeId  =   [525, 401, 322, 122];
        console.log(recipeId);
        setTimeout((id) => {
            const recipe = {title: 'Fresh Tomato Past', publisher: 'Jonas'};
            console.log(`${id} : ${recipe.title}`);
            setTimeout(publisher => {
                const recipe2 = {title: 'Italian Pizza', publisher: 'Jonas'};
                console.log(recipe2);
            }, 1500, recipe.publisher);
        }, 1500, recipeId[1]);
        
    }, 1500);
}
getRecipe(); // callback hell

// Callback fungsi yang memanggil fungsi