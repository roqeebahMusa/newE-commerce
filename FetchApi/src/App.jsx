import "./App.css";
import Body from "./Components/Body/Body"
import Header from "./Components/Header/Header"
import Details from "./Components/Details/Details"
import Cart from "./Components/Cart/Cart"
import Category from "./Components/Category/Category";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ThemeContext } from "./Api/Context"
import { useContext } from "react";


function reducer(state, action) {
  switch (action.type){
    case "Toggle" :
    return !state
  }
}
function App () {
  const {state} = useContext(ThemeContext)

  return (
    <div className="App" style={{backgroundColor: state? 'grey': null}}>
     <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Body/>}/>
        <Route path='/detail/:id' element={<Details/>}/>
        <Route path='/Cart' element={<Cart color={state}/>}/>
        <Route path='/categories/:cs' element={<Category color={state}/>}/>
      </Routes>
     </Router>
    </div>
  );
};

export default App;
