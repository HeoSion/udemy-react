export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // const ButtonContainer = buttonsContainer;
  // 상수로 직접 만들어서 사용하기 보다, prop에 재설정 해서 사용하는게 좋음

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
