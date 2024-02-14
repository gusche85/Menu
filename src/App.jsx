
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'


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

//card pictures aka menu pictures
function Image({image}) {
  return (
     <img className='object-fit-cover img-fluid rounded-start-pill rounded-pill-top' height='90px' id='menuImage' src={image} alt='menu_image'></img>
  );
}

//menu layout
function MenuItem({image, name, price, ingredients, allergen, foodcode, nutritionInfo}) {
  return (
   
     <div className='card rounded-pill rounded mb-3 border-warning bg-transparent text-light'>
      <div className='row g-0'>
        <div className='col-sm-4 col-md-4'><Image image={image}/></div>
        <div className='col-sm-8 col-md-8'>
          <div className='card-body'>
            <h5 className='card-title pt-1'><strong>{name}</strong> | {price}</h5>
            <Code foodcode={foodcode} />
            <Ingredients ingredients={ingredients} />         
            <NutritionalInfo nutritionInfo={nutritionInfo} />
            <Allergen allergen={allergen} />
          </div>
        </div>
      </div>
     </div>
    
  );
}

function Code({foodcode}) {
  return (
    <div className='text-warning'>Code: {foodcode}</div>
  )
}

//category
function Category({ title, foods}) {
  return (
    <div>
      <h3 className='text-center mb-3'>{title}</h3>
      {foods}
    </div>
  );
}

//default slide
function CategorySlide({ title, foods, active }) {
  return (
    <div className={`carousel-item ${active ? 'active' : ''}`}>
      <Category title={title} foods={foods} />
    </div>
  );
}

function CategoryCarousel({ categories }) {

  const handleSlideClick = () => { //click anywhere on screen to go to next slide
    const carousel = new bootstrap.Carousel(document.getElementById('carouselExampleFade'));
    carousel.next();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
    <div id='carouselExampleFade' className='carousel slide carousel-fade' onClick={handleSlideClick}>
    <div className='carousel-inner'>
      {categories.map((category, index) => (
        <CategorySlide key={index} title={category.title} foods={category.foods} active={index === 0} />
      ))}
    </div>
    
  </div>
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
        foodcode={"01"}
        ingredients={"Deep-fried battered chicken strips. Seasoned with salt, pepper and chilli powder."}
        nutritionInfo={{calories: 340, protein: 31, carbs: 35, fat: 29}}
        allergen={['/allergen2.png', '/allergen3.png']} 
        />,

        <MenuItem key={2} 
        image='/fchicken2.png'
        name={"6 piece nugget"} 
        price={"RM 6.00"} 
        foodcode={"02"}
        ingredients={"Deep-fried minced chicken meat seasoned with salt and pepper. Served with mayonnaise."}
        nutritionInfo={{calories: 270, protein: 13, carbs: 16, fat: 16}}
        allergen={['/allergen2.png']}
        />,

        <MenuItem key={3}
        image='/fchicken3.png'
        name={"5 piece chicken"} 
        price={"RM 12.00"} 
        foodcode={"03"}
        ingredients={"Deep-fried battered chicken pieces seasoned with cajun spices. Served with ketchup."}
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
        foodcode={"04"}
        ingredients={"Beef pepperoni, olives, tomato puree, tomatoes, bell peppers, mozarella cheese."}
        nutritionInfo={{calories: 450, protein: 5, carbs: 35, fat: 46}}
        allergen={['/allergen2.png', '/allergen3.png']}
        />,

        <MenuItem key={5} 
        image='/pizza2.png'
        name={"Margherita pizza"} 
        price={"RM 25.00"} 
        foodcode={"05"}
        ingredients={"Tomatoes, basil leaves, tomato puree, pesto sauce, mozarella cheese"}
        nutritionInfo={{calories: 470, protein: 5, carbs: 36, fat: 46}}
        allergen={['/allergen2.png', '/allergen3.png']}
        />,

        <MenuItem key={6}
        image='/pizza3.png'
        name={"Seafood pizza"} 
        price={"RM 25.00"} 
        foodcode={"06"}
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
        name={"Protein shake"} 
        price={"RM 8.00"} 
        foodcode={"07"}
        ingredients={"Coconut milk blended with vanilla ice-cream and peanut butter."}
        nutritionInfo={{calories: 770, protein: 43, carbs: 36, fat: 46}}
        allergen={['/allergen.png']}
        />,

        <MenuItem key={8} 
        image='/drinks2.png'
        name={"Lemon and lime"} 
        price={"RM 5.00"} 
        foodcode={"08"}
        ingredients={"Lemon and lime juice flavoured with sugar and mint. Served cold."}
        nutritionInfo={{calories: 25, protein: 0, carbs: 16, fat: 0}}
        />,

        <MenuItem key={9} 
        image='/drinks3.png'
        name={"Iced lemon tea"} 
        price={"RM 5.00"} 
        foodcode={"09"}
        ingredients={"Classic lemon and honey drink. Perfect on a hot day"}
        nutritionInfo={{calories: 25, protein: 0, carbs: 16, fat: 0}}
        />,
      ]
    }
  ];

  return (
    <CategoryCarousel categories={categories} />
  );
}

function AllergenDisplay({ legend }) {
  return (
    <div className='fst-italic text-center'>
      Legend: 
      {legend.map((allergen, index) => (
        <div key={index} className='list-inline-item align-items-center'>
          <img src={allergen.image} className='pic-allergen'/>
          <span>{allergen.description}</span>
        </div>
      ))}
    </div>
  );
}

function App() {
  const allergenLegend = [
    { image: '/allergen.png', description: 'peanuts' },
    { image: '/allergen1.png', description: 'crustaceans' },
    { image: '/allergen2.png', description: 'egg' },
    { image: '/allergen3.png', description: 'wheat' },
  ];

  return (
    <>
    <div className="m-4 justify-content-center align-items-center">
<main className='border-black rounded'>
    <h2 className='text-center text-warning pt-2 pb-0 mb-0'>Welcome to Texan Hut
    <img className='img-fluid m-0' src='/line2.png'></img></h2>
    <Menu />
    <AllergenDisplay legend={allergenLegend} />
    </main>
    </div>
    </>
  );
}

export default App;

