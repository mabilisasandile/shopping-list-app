
import './App.css';
import Home from './components/Home';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import ViewList from './components/ViewList';
import Update from './components/Update';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/viewlist' element={<ViewList />} />
          <Route path='/update' element={<Update />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
