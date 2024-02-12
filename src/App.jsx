import './index.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'


function NutritionalInfo({nutritionInfo}) {
  return (
    <div className='pt-2 fst-italic'>
      Calories: {nutritionInfo.calories} kcal  Protein: {nutritionInfo.protein} g  Carbs: {nutritionInfo.carbs} g  Fat: {nutritionInfo.fat} g
    </div>
  );
}

function Ingredients({ingredients}){
  return (
    <>
      <div className='text-decoration-underline'>Ingredients:</div>
      <div>{ingredients}</div>
    </>
  );
}

function Allergen({allergen}) {
  return (
    <>
     <div className='fst-italic'>Might contain: {allergen}</div>
    </>
  );
}

function Image({image}) {
  return (
    
     <img className='object-fit-cover img-fluid rounded-start' id='menuImage' src={image} alt='menu_image'></img>
    
  );
}

function MenuItem({image, name, price, ingredients, allergen, nutritionInfo}) {
  return (
    
     <div className='card mb-3'>
      <div className='row g-0'>
        <div className='col-md-4'><Image image={image}/></div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'><strong>{name}</strong> | {price}</h5>
            <Ingredients ingredients={ingredients} />         
            <NutritionalInfo nutritionInfo={nutritionInfo} />
            <Allergen allergen={allergen} />
          </div>
        </div>
      </div>
     </div>
    
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
    image='/fchicken1.png'
    name={"2pc Fried Chicken Set"} 
    price={"RM 10.00"} 
    ingredients={"Chicken, salt, pepper, chilli powder"}
    nutritionInfo={{calories: 540, protein: 31, carbs: 35, fat: 29}}
    allergen={<img className='allergen' src='/allergen3.png'/>}/>

    <MenuItem 
    image='/fchicken2.png'
    name={"6 piece nugget"} 
    price={"RM 6.00"} 
    ingredients={"Chicken nuggets, salt, pepper, mayonnaise"}
    nutritionInfo={{calories: 270, protein: 13, carbs: 16, fat: 16}}/>
  </>
);

const desserts = (
  <>
    <MenuItem 
    image='/drinks3.png'
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
    <img className='img-fluid' src='/line.png'></img></h1>
    <Category title={"Fried Chicken"} foods={friedChicken} />
    <Category title={"Desserts"} foods={desserts} />
    </main>
    </div>
    </>
  );
}

export default App;

