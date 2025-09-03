import reactImg from "../../assets/react-core-concepts.png";
import getRandomInt from "../../util";
import "./Header.css";

const reactDescriptions = ["기초적인", "결정적인", "핵심적인"];

export default function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React 핵심 요소</h1>
      <p>{description} 모든 앱을 만들 때 필요한 React 개념</p>
    </header>
  );
}
