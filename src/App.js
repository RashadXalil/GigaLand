import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Index from './pages/Index/index'
import Footer from './components/Footer/Footer'
import Wallet from './pages/Wallet/Wallet';
import Faq from './pages/Faq/Faq';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/wallet' element={<Wallet/>}/>
      <Route path='/faq' element={<Faq/>}/>
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
