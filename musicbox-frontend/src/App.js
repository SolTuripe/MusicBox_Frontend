import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "../src/components/layout/Layout";
import Home from "./pages/home/Home";
import Show from "./pages/show/Show";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="show" element={<Show />} />
      </Route>
    </Routes>
  );
}

export default App;
