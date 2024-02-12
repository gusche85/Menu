import './index.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'


function NutritionalInfo({nutritionInfo}) {
  return (
    <div className='pt-2'>
      <p>Calories: {nutritionInfo.calories} kcal  Protein: {nutritionInfo.protein} g  Carbs: {nutritionInfo.carbs} g  Fat: {nutritionInfo.fat} g</p>
    </div>
  );
}

function Ingredients({ingredients}){
  return (
    <>
      <div className='text-decoration-underline'>Ingredients:</div>
      <div>{ingredients}</div>
    </>
  )
}

function MenuItem({name, price, ingredients, nutritionInfo}) {
  return (
    <>
     <p>
      <h5><strong>{name}</strong> | {price}</h5>
      <Ingredients ingredients={ingredients} />
      <NutritionalInfo nutritionInfo={nutritionInfo} />
     </p>
    </>
  );
}

function Category({ title, foods}) {
  return (
    <div>
      <h2 className='text-center'>{title}</h2>
      {foods}
    </div>
  );
}

const friedChicken = (
  <>
    <MenuItem 
    name={"2pc Fried Chicken Set"} 
    price={"RM 10.00"} 
    ingredients={"Chicken, salt, pepper, chilli powder"}
    nutritionInfo={{calories: 540, protein: 31, carbs: 35, fat: 29}}/>

    <MenuItem 
    name={"6 piece nugget"} 
    price={"RM 6.00"} 
    ingredients={"Chicken nuggets, salt, pepper, mayonnaise"}
    nutritionInfo={{calories: 270, protein: 13, carbs: 16, fat: 16}}/>
  </>
);

const desserts = (
  <>
    <MenuItem 
    name={"Ice Cream"} 
    price={"RM 5.00"} 
    ingredients={"Chocolate ice cream, crushed nuts"}
    nutritionInfo={{calories: 207, protein: 2, carbs: 33, fat: 6}}/>

    <MenuItem 
    name={"Apple Pie"} 
    price={"RM 2.00"} 
    ingredients={"Apples, cinnamon powder, sugar, flour, salt"}
    nutritionInfo={{calories: 270, protein: 1, carbs: 43, fat: 10}}/>
  </>
);


function App() {
  return (
    <>
    <div className="m-5 justify-content-center align-items-center">
<main className='border border-black rounded'>
    <h1 className='text-center pt-3 pb-0'>Welcome to Texan Hut
    <img src='/line.png'></img></h1>
    <Category title={"Fried Chicken"} foods={friedChicken} />
    <Category title={"Desserts"} foods={desserts} />
    </main>
    </div>
    </>
  );
}

export default App;

