import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// This is importing components from the components folder
import HomePageComponent from './components/HomePageComponent.js';
import NavbarComponent from './components/NavbarComponent.js';
import SayHelloComponent from './components/SayHelloComponent.js';
import AddingComponent from './components/AddingComponen.js';
import AskingQuestionsComponent from './components/AskingQuestionsComponent.js';
import GreaterOrLessComponent from './components/GreaterOrLessComponent.js';
import MadLibComponent from './components/MadlibComponent.js';
import OddOrEvenComponent from './components/OddOrEvenComponent.js';
import ReverseItAlphaNumericComponent from './components/ReverseItAlphaNumericComponent.js';
import ReverseItNumbersOnlyComponent from './components/ReverseItNumbersOnlyComponent.js';
import Magic8BallComponent from './components/Magic8BallComponent.js';
import RestaurantPickerComponent from './components/RestaurantPickerComponent.js';


import { BrowserRouter, Routes, Route } from 'react-router-dom';


//What is a functional component. It is a function that returns JSX

function App() {
  

  return (

    //Browser Router enables clientside routing (Routers pages without full page reloading)
    <BrowserRouter>
      <NavbarComponent />
      {/* Routes is used for your route structure */}
      <Routes>
        {/* Route defines our path to the individual components */}
        {/* '/' is out default route */}
        <Route path='/' element={<HomePageComponent/>} />
        <Route path='pageTwo' element={<SayHelloComponent />} />
        <Route path='pageThree' element={<AddingComponent />} />
        <Route path='pageFour' element={<AskingQuestionsComponent />} />
        <Route path='pageFive' element={<GreaterOrLessComponent />} />
        <Route path='pageSix' element={<MadLibComponent />} />
        <Route path='pageSeven' element={<OddOrEvenComponent />} />
        <Route path='pageEight' element={<ReverseItAlphaNumericComponent />} />
        <Route path='pageNine' element={<ReverseItNumbersOnlyComponent />} />
        <Route path='pageTen' element={<Magic8BallComponent />} />
        <Route path='pageEleven' element={<RestaurantPickerComponent />} />
       
      </Routes>


    </BrowserRouter>

  );
}

export default App;
