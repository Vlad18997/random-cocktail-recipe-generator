let poza, titlu;
document.addEventListener('DOMContentLoaded', onLoad);

function onLoad(){
    poza =document.getElementById('poza');
    titlu=document.getElementById('denumire');

    getRandomCocktail();
}

async function getRandomCocktail(){
    let res =await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    let json =await res.json();
    let data =json.drinks[0];
    titlu.textContent = data.strDrink;
    poza.src =`${data.strDrinkThumb}/preview`;

    const list = document.getElementById('list');
    list.innerHTML= '';

    for(let i = 1; i<16; i++){

        let ingredient = data[`strIngredient${i}`];
        let cantitate =data[`strMeasure${i}`];
        if(ingredient){
            let li = document.createElement('li');
            li.textContent = ingredient + (cantitate ? ` - ${cantitate} ` : '');
            list.appendChild(li);
        }else{
            break;
        }
    }
    document.getElementById('indicatii').textContent = data.strInstructions;
    
}

