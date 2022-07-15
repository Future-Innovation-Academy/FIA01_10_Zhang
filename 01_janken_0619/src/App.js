
import './App.css';
import { useState } from "react";


export default function App() {
  const myhand = (self) => {
    // var janken=[1,2,3];
    // var a= Math.floor(Math.random*3)
    var computer = Math.floor(Math.random() * 3 + 1);
    switch (computer) {
      case 1:
        setComputer('グー');
        break;
      case 2:
        setComputer('チョキ');
        break;
      default:
        setComputer('パー');
        break;
    };
    switch (self) {
      case 1:
        setself('グー');
        break;
      case 2:
        setself('チョキ');
        break;
      default:
        setself('パー');
        break;
    };


    if (computer === self) {
      setResult('引き分け');
    } else if ((self - computer)===1 || (computer === 3 && self === 1)) {
      setResult('負け');
    } else {
      setResult('勝ち');
    }


  };

  // useStateについて記述
  const [computer, setComputer] = useState(true);
  const [self, setself] = useState(true);
  const [result, setResult] = useState(true);
  //a =　1が入っています
  //
  return (
    <div className="App">
      <h1>相手：{computer}</h1>
      <h1>自分：{self}</h1>
      <h1>結果：{result}</h1>

      <button onClick={() => myhand(1)}>グー</button>

      <button onClick={() => myhand(2)}>チョキ</button>

      <button onClick={() => myhand(3)}>パー</button>


      <hr />
    </div>
  );
}

