import './index.css'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.min.js'


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
      <div className='pt-1 pb-1 fw-light'>{ingredients}</div>
    </>
  );
}

function Allergen({allergen}) {
  return (
    <>
     <div className='fst-italic'>
      Might contain: {Array.isArray(allergen) ? 
          allergen.map((allergens, index) => (
            <img key={index} className='allergens' src={allergens} alt={`Allergen ${index + 1}`}/>
          )) : 'No allergens specified'}</div>
    </>
  );
}

function Image({image}) {
  return (
    
     <img className='object-fit-cover img-fluid rounded-start-pill' height='90px' id='menuImage' src={image} alt='menu_image'></img>
    
  );
}

function MenuItem({image, name, price, ingredients, allergen, nutritionInfo}) {
  return (
    

     <div className='card rounded-pill mb-3 border-warning bg-transparent text-light'>
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
      <h2 className='text-center mb-3'>{title}</h2>
      {foods}
    </div>
  );
}

function CategorySlide({ title, foods, active }) {
  return (
    <div className={`carousel-item ${active ? 'active' : ''}`}>
      <Category title={title} foods={foods} />
    </div>
  );
}

function CategoryCarousel({ categories }) {
  return (
    <div id='carouselExampleIndicators' className='carousel slide'>
    <div className='carousel-indicators'>
      {categories.map((_, index) => (
        <button key={index} type="button" data-bs-slide-to={index} data-bs-target="#carouselExampleIndicators" className={index === 0 ? 'active' : ''}></button>
      ))}
    </div>
    <div className='carousel-inner'>
      {categories.map((category, index) => (
        <CategorySlide key={index} title={category.title} foods={category.foods} active={index === 0} />
      ))}
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
}

function Menu() {
  // Define the categories
  const categories = [
    {
      title: 'Fried Chicken',
      foods: [
        <MenuItem 
        key={1}
        image='/fchicken1.png'
        name={"Chicken fingers"} 
        price={"RM 10.00"} 
        ingredients={"Chicken strips dipped in batter, seasoned with salt, pepper and chilli powder. Deep-fried to perfection."}
        nutritionInfo={{calories: 340, protein: 31, carbs: 35, fat: 29}}
        allergen={['/allergen2.png', '/allergen3.png']} 
        />,

        <MenuItem key={2} 
        image='/fchicken2.png'
        name={"6 piece nugget"} 
        price={"RM 6.00"} 
        ingredients={"Deep-fried minced chicken meat seasoned with salt and pepper. Served with mayonnaise."}
        nutritionInfo={{calories: 270, protein: 13, carbs: 16, fat: 16}}
        allergen={['/allergen2.png']}
        />,

        <MenuItem key={3}
        image='/fchicken3.png'
        name={"5 piece chicken"} 
        price={"RM 12.00"} 
        ingredients={"Chicken pieces dipped in batter, seasoned with cajun spices. Deep-fried to perfection and served with ketchup."}
        nutritionInfo={{calories: 570, protein: 33, carbs: 16, fat: 16}}
        allergen={['/allergen2.png', '/allergen3.png']}
        />
      ]
    },
    {
      title: 'Pizza',
      foods: [
        <MenuItem key={4} 
        image='/pizza1.png'
        name={"Pepperoni pizza"} 
        price={"RM 25.00"} 
        ingredients={"Beef pepperoni, olives, tomato puree, tomatoes, bell peppers, mozarella cheese."}
        nutritionInfo={{calories: 450, protein: 5, carbs: 35, fat: 46}}
        allergen={['/allergen2.png', '/allergen3.png']}
        />,

        <MenuItem key={5} 
        image='/pizza2.png'
        name={"Tomato basil pizza"} 
        price={"RM 25.00"} 
        ingredients={"Tomatoes, basil leaves, tomato puree, pesto sauce, mozarella cheese"}
        nutritionInfo={{calories: 470, protein: 5, carbs: 36, fat: 46}}
        allergen={['/allergen2.png', '/allergen3.png']}
        />,

        <MenuItem key={6}
        image='/pizza3.png'
        name={"Seafood delight pizza"} 
        price={"RM 25.00"} 
        ingredients={"Pineaple chunks, marinara sauce, squid, tuna, prawns, tomatoes"}
        nutritionInfo={{calories: 570, protein: 9, carbs: 36, fat: 46}}
        allergen={['/allergen1.png', '/allergen2.png', '/allergen3.png']}
        />,
        
      ]
    },
    {
      title: 'Drinks',
      foods: [
        <MenuItem key={7} 
        image='/drinks1.png'
        name={"Coconut penut butter shake"} 
        price={"RM 8.00"} 
        ingredients={"Coconut milk blended with vanilla ice-cream and peanut butter."}
        nutritionInfo={{calories: 770, protein: 43, carbs: 36, fat: 46}}
        allergen={['/allergen.png']}
        />,

        <MenuItem key={8} 
        image='/drinks2.png'
        name={"Lemon and lime"} 
        price={"RM 5.00"} 
        ingredients={"Lemon and lime juice flavoured with sugar and mint"}
        nutritionInfo={{calories: 25, protein: 0, carbs: 16, fat: 0}}
        
        />,

        <MenuItem key={9} 
        image='/drinks3.png'
        name={"Iced lemon tea"} 
        price={"RM 5.00"} 
        ingredients={"Classic lemon and honey drink."}
        nutritionInfo={{calories: 25, protein: 0, carbs: 16, fat: 0}}
  
        />,
      ]
    }
  ];

  return (
    <CategoryCarousel categories={categories} />
  );
}


function App() {
  return (
    <>
    <div className="m-5 justify-content-center align-items-center">
<main className='border-black rounded'>
    <h1 className='text-center pt-3 pb-0'>Welcome to Texan Hut
    <img className='img-fluid' src='/line.png'></img></h1>
    <Menu />
    </main>
    </div>
    </>
  );
}

export default App;

