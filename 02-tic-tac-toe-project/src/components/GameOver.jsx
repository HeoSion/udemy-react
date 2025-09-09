export default function GameOver({ winner }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} 승리!</p>}
      {!winner && <p>무승부!</p>}
      <p>
        <button type="button">다시 시작!</button>
      </p>
    </div>
  );
}
