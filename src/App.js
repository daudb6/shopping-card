
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Products } from './Component/Products/Products';
import { Provider } from 'react-redux';
import store from './Features/store';

function App() {
  return (
    <Provider store = {store}>
    
    <Navbar />
    <Routes>
    <Route path='Products' element={<Products/>} />

    </Routes>
    </Provider>
  );
}

export default App;
