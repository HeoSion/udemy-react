import Player from "./components/Player";

export default function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player1" symbol="X" />
          <Player initialName="Player2" symbol="O" />
        </ol>
        GAME BOARD
      </div>
    </main>
  );
}
