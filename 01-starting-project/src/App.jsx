import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

export default function App() {
  let [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton = 'Component', 'JSX', 'Props', 'State'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  console.log("APP COMPONENT EXECUTING");

  let tabContent = <p>주제를 선택해주세요.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic]?.title}</h3>
        <p>{EXAMPLES[selectedTopic]?.description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic]?.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>React 4가지 요소</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>개념 및 예시</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              {[CORE_CONCEPTS[0].title]}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              {[CORE_CONCEPTS[1].title]}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              {[CORE_CONCEPTS[2].title]}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              {[CORE_CONCEPTS[1].title]}
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}
