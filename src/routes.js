import {BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Article from "./pages/Article";

const Router = () => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/articles" element={<Article/>}/>
    </Routes>
  </BrowserRouter>
);

export default Router;