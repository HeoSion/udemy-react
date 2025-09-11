import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="돈가방 로고" />
      <h1>주식 계산기</h1>
    </header>
  );
}
