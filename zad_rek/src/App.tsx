import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { Products } from './pages/Products';
import { ErrorPage } from './pages/ErrorPage';
import { Home } from './components/Home';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation></Navigation>

      <div className="p-4">
        <Routes>
          {/* Main path */}
          <Route path="/" element={<Home />} />

          {/* Products path  */}
          <Route path="/products" element={<Products />} />

          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
