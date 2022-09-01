import PizzaClasic from '../Assets/Pizza-Simple.png'
import BlackOlives from '../Assets/Pizza-Black-Olives.png'
import Combo from '../Assets/Pizza-Combo.png'
import Vegan from '../Assets/Pizza-Salad.png'
import Coke from '../Assets/big-coke.png'

export const products = [
    {
        img: `${PizzaClasic}`,
        name:'Classic pizza',
        price:'$20',
        desc: 'Our ol’ and reliable classic pizza, just mozzarella',
        category:'Classic',
        id:'1',
        favourite:true
    },
    {
        img: `${BlackOlives}`,
        name:'Black Olives',
        price:'$20',
        desc: 'A flavourful olive pizza, only for the brave ones',
        category:'Classic',
        id:'2',
        favourite:true
    },
    {
        img: `${Combo}`,
        name:'Pizza an’ coke',
        price:'$25',
        desc: 'Our ol’ and reliable classic pizza but not just mozzarella also brings with her a coke',
        category:'Combos',
        id:'3'
    },
    {
        img: `${Vegan}`,
        name:'Salad Pizza',
        price:'$25',
        desc: 'Our 100% cruelty free option even the cheese is vegan!',
        category:'Vegan',
        id:'4',
        favourite:true
    },
    {
        img: `${Coke}`,
        name:'Coke',    
        price:'$8',
        desc: 'A fresh and fizzy drink!',
        category:'Drinks',
        id:'5'
    }
]

export const favouriteProducts = ()=>{
    let result = [];
    for(let i in products){
        if(products[i].favourite)
        result.push(products[i]);
    }
    return result;
}