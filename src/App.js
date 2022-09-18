import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./main.css"
import Header from "./components/header";
import Main from "./components/main";
import Products from "./components/products";




const App = () => {
  return (
    <BrowserRouter>
      <div className="body">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" exact element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
