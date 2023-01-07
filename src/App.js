import React from "react";
import "./App.css";
import Game from "./components/Game";

// Component Character
// state gồm 
// bodyImg
// faceImg
// ...

// Component Preview
// xem thêm hướng dẫn
// truyền state bằng cách nào đó
// div cha relative
// <Hair/> => img position absolute, zindex cao hơn khuôn mặt
// <Face /> => img position absolute, zindex cao hơn khuôn mặt
// ...

// Body select component
// có 1 cái mảng chứa đường dẫn img
// khi click mỗi ô => setBodyImg 



function App() {
  return (
    <div className="container">
      <Game />
    </div>
  );
}

export default App;
