
import './App.scss';

import Header from './components/header';
import Poster from './components/poster';
import Produtos from './components/produtos';
 import Footer from './components/footer'; 
 import 'bootstrap/dist/css/bootstrap.min.css';
 
 
function App() {
  return (
   <div>
     <Header/>
     <Poster/>
     <Produtos/>
     
   </div>
  );
}

export default App;
