import react from 'react'
import {Routes, Route} from 'react-router-dom' 
import Home from './componets/home'
import About from './componets/About'
import NavBar from './componets/navbar'
import Ordersummery from './componets/ordersummery'
import Nomatch from './componets/nomatch'
import Product from './componets/product'
import Featured from './componets/featuredPro'
import NewPro from './componets/newPro'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/order-summary' element={<Ordersummery/>}></Route>
        <Route path='/products' element={<Product/>}>
          <Route path='featured' element={<Featured/>}></Route>
          <Route path='new' element={<NewPro/>}></Route>
        </Route>
        <Route path='*' element={<Nomatch/>}></Route>
        
        
      </Routes>
    </div>
  );
}

export default App;
