import './index.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'


function NutritionalInfo({nutritionInfo}) {
  return (
    <div>
      <p>Calories: {nutritionInfo.calories} kcal</p>
      <p>Protein: {nutritionInfo.protein} g</p>
      <p>Carbs: {nutritionInfo.carbs} g</p>
      <p>Fat: {nutritionInfo.fat} g</p>
    </div>
  );
}

function MenuItem({name, price, nutritionInfo}) {
  return (
    <>
     <p>
      <strong>{name}</strong> | {price}
      
      <NutritionalInfo nutritionInfo={nutritionInfo} />
     </p>
    </>
  );
}

function Category({ title, foods}) {
  return (
    <div>
      <h2>{title}</h2>
      {foods}
    </div>
  );
}

const friedChicken = (
  <>
    <MenuItem 
    name={"2pc Fried Chicken Set"} 
    price={"RM 10.00"} 
    nutritionInfo={{calories: 540, protein: 31, carbs: 35, fat: 29}}/>

    <MenuItem 
    name={"6 piece nugget"} 
    price={"RM 6.00"} 
    nutritionInfo={{calories: 270, protein: 13, carbs: 16, fat: 16}}/>
  </>
);

const desserts = (
  <>
    <MenuItem 
    name={"Ice Cream"} 
    price={"RM 5.00"} 
    nutritionInfo={{calories: 207, protein: 2, carbs: 33, fat: 6}}/>

    <MenuItem 
    name={"Apple Pie"} 
    price={"RM 2.00"} 
    nutritionInfo={{calories: 270, protein: 1, carbs: 43, fat: 10}}/>
  </>
);


function App() {
  return (
    <>
    <div className="m-5 justify-content-center align-items-center">
<div className='border border-black rounded'>
    <h1 className='text-center'> Aunty Fried Chicken</h1>
    <Category title={"Fried Chicken"} foods={friedChicken} />
    <Category title={"Desserts"} foods={desserts} />
    </div>
    </div>
    </>
  );
}

export default App;

