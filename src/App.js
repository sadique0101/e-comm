
import './App.css';
import HomePage from './Component/HomePage/HomePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailPage from './Component/DetailPage/index';
import Checkout from './Component/Checkout';

function App() {
  return (
    <BrowserRouter>
<Routes>
<Route index element={<HomePage />} />
<Route path="/:userId" element={<DetailPage />} />
<Route path="/:userId/checkout" element={<Checkout />} />
</Routes>
    </BrowserRouter>
  );
}

export default App;
