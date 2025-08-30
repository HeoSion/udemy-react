import componentsImg from "./assets/components.png";
import propsImg from "./assets/config.png";
import jsxImg from "./assets/jsx-ui.png";
import stateImg from "./assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "컴포넌트",
    description:
      "UI를 구성하는 기본 단위 입니다. 여러 컴포넌트를 조합하여 전체 사용자 인터페이스를 만들 수 있습니다.",
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
    title: "상태(State)",
    description:
      "React가 관리하는 데이터입니다. 이 데이터가 변경되면 컴포넌트가 리렌더링되고 UI가 업데이트됩니다.",
  },
];
