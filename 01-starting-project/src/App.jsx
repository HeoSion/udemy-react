import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

export default function App() {
  let [selectedTopic, setSelectedTopic] = useState("components");

  // 처음에 App 컴포넌트 함수와 TabButton 컴포넌트 함수가 재실행되기 때문에 출력됌
  function handleSelect(selectedButton) {
    // selectedButton = 'Component', 'JSX', 'Props', 'State'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }
  // 버튼을 클릭하게 되면, UI 상에서는 클릭한대로 잘 나오지만,
  // console 실행로그로 확인을 해보면 이전 상태인 값이 출력된 것을 확인할 수 있음
  // App 컴포넌트의 컴포넌트 함수가 다시 실행하고 나서야 업데이트된 값을 사용 가능함
  // 그제서야 새로운 값을 사용할 수 있으므로, 업데이트 스케줄이 조정되자마자,
  // 로그 출력을 하면, 보이지 않는 것!
  // 다시 말해 아직 예전 App 함수에 있다는 것임

  console.log("APP COMPONENT EXECUTING");

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic]?.title}</h3>
            <p>{EXAMPLES[selectedTopic]?.description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic]?.code}</code>
            </pre>
          </div>
        </section>
      </main>
    </>
  );
}
