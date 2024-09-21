import { useState } from "react";
import './App.css';

export default function App() {
  const [level, setLevel] = useState(0);

  const feed = (amount) => {
    setLevel((prevLevel) => prevLevel + amount);
  };

  const reset = () => {
    setLevel(0);
  };

  const imageSrc =
    level > 200
      ? "https://i.pinimg.com/originals/d8/c9/1a/d8c91a38ba7965bcc7ad62335ae279a7.gif"
      : level > 100
      ? "https://image.tnews.co.th/uploads/images/contents/w1024/2022/01/wQZyfK3BtTPVcywuPsMP.webp?x-image-process=style/lg-webp"
      : "https://www.khaosod.co.th/wpapp/uploads/2024/09/Nong-Moo-Deng4548-5.jpg";

  return (
    <div className="container">
      <h1>Level {level}</h1>
      <img src={imageSrc} alt="หมูเด้ง" height={400 + level} />
      <br />

      <button onClick={() => feed(5)} style={{ margin: "0 10px" }} aria-label="Feed with watermelon">
        <img
          src="https://s.isanook.com/he/0/ud/4/21905/watermelon.jpg?ip/crop/w670h402/q80/jpg"
          alt="แตงโม"
          height={100}
        />
      </button>
      <button onClick={() => feed(10)} style={{ margin: "0 10px" }} aria-label="Feed with pumpkin">
        <img
          src="https://www.calforlife.com/image/food/pumpkin.jpg"
          alt="ฟักทอง"
          height={100}
        />
      </button>
      <button onClick={() => feed(20)} style={{ margin: "0 10px" }} aria-label="Feed with grass">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcxWVc8eMi8kr4Elt-xb2ASk5AaHQfV98b0w&s"
          alt="หญ้า"
          height={100}
        />
      </button>
      <br />
      <button onClick={reset} style={{ margin: "20px" }} aria-label="Start over">
        Start Over
      </button>
    </div>
  );
}