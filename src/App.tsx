import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Layout from "./layout/Layout";
import Music from "./pages/Music";

const App: React.FC = () => {
  return (
    <div className="">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/music" element={<Music />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
