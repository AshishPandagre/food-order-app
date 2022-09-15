import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';


const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Great awesome',
        price: 22.09
    },
    {
        id: 'm2',
        name: 'Sushi2',
        description: 'Great awesome',
        price: 22.09
    },
    {
        id: 'm3',
        name: 'Sush3',
        description: 'Great awesome',
        price: 22.09
    },
    {
        id: 'm4',
        name: 'Sushi4',
        description: 'Great awesome4',
        price: 22.09
    }
]


const AvailableMeals = () => {
    
    const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}


export default AvailableMeals;
