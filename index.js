//Main Page Global 변수
const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const reultList = document.getElementById('search-result');
const foodDetailContent = document.querySelector('.food-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');

//
const categoryBtn = document.querySelectorAll('.sub-btn');
const openBtn = document.querySelectorAll('.fa-angle-right');


const menuBtn = document.querySelector('.menu-1');

//Event Listners
searchBtn.addEventListener('click', getRecipeData);
reultList.addEventListener('click',getFoodRecipe);
//

async function getRecipeData() {
    let searchInputText = searchBox.value.trim();
    console.log(searchInputText);
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputText}`);
    const jsonData = await response.json();
    console.log(jsonData);
    let html = '';
    if(jsonData.meals){
        jsonData.meals.forEach(meal => {
            html +=`
                <div class="food-item" data-id ="${meal.idMeal}">
                    <div class="food-img">
                        <img src="${meal.strMealThumb}" alt="food">
                    </div>
                    <div class="food-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">Get Recipe</a>
                    </div>
                </div>
                `;
            });
        } else if(jsonData.meals === null) {
            html = `We don't find any recipes!`;
            reultList.classList.add('notFound')
            // const emptyString = document.createElement('h3');
            // emptyString.textContent = `We don't find any recipe!`;
            // reultList.appendChild(emptyString);
        }
        reultList.innerHTML = html;
}
// receipeData();
async function getFoodRecipe(event) {
    event.preventDefault();
    if(event.target.classList.contains('recipe-btn')) {
        let foodItem = event.target.parentElement.parentElement;
        let itemName = foodItem.getAttribute('data-id');
        console.log(itemName);
        const response = await fetch (`www.themealdb.com/api/json/v1/1/lookup.php?i=52772`)
        const jsonData = await response.json();
        console.log(jsonData);
    }
}
getFoodRecipe();