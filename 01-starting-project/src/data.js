import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "UI를 구성하는 핵심적인 기본 단위입니다. 여러 컴포넌트를 조합하여 전체 사용자 인터페이스를 만들 수 있습니다.",
  },
  {
    image: jsxImg,
    title: "JSX",
    description:
      "실제로 렌더링될 마크업을 정의하기 위해, 동적인 값도 포함할 수 있는 HTML과 유사한 코드를 반환합니다.",
  },
  {
    image: propsImg,
    title: "Props",
    description:
      "컴포넌트에 입력 데이터를 전달하여 설정이 가능하도록 만들고, 이를 통해 재사용성을 높여줍니다.",
  },
  {
    image: stateImg,
    title: "State",
    description:
      "React가 관리하는 데이터입니다. 이 데이터가 변경되면 컴포넌트가 리렌더링되고 UI가 업데이트됩니다.",
  },
];

export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "컴포넌트는 React 애플리케이션을 구성하는 기본 단위입니다. 컴포넌트는 화면에 무언가를 렌더링(표시)하는 독립적인 모듈(HTML + CSS + JS의 조합)입니다.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX는 JavaScript를 확장한 문법입니다. 템플릿 언어와 유사하지만, (동적인 콘텐츠를 출력하는 등) JavaScript의 모든 기능을 사용할 수 있다는 장점이 있습니다.",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: "Props",
    description:
      "컴포넌트는 props라고 불리는 임의의 입력을 받습니다. 이 props는 일반적인 함수에 있는 인자(argument)와 같습니다.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: "State",
    description:
      "state는 React 컴포넌트가 사용자 액션, 네트워크 응답 등 다양한 변화에 대응하여 시간에 따라 출력 결과를 바꿀 수 있게 해주는 데이터입니다.",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
