import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    // 꼭 기억해야할 이전 상태를 업데이트를 하는 방법!
    // setIsEditing(!isEditing) -> 상태를 업데이트 하지 못함❌
    // setIsEditing(wasEditing => !wasEditing) => 함수로 사용해야 상태를 업데이트 할 수 있음✅
    // setIsEditing(!isEditing); // true 상태를 스케줄에 업데이트
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let buttonCaption = "Edit";

  if (isEditing === true) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // buttonCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button type="button" onClick={handleEdit}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
