const App = () => (
  <div>
    <TwoComponents>
      <RandomColor colors={['green', 'purple', 'blue', 'white', 'black']} />
      <RandomEmoji emojis={['🤩', '😰', '🦹', '🧷', '💀']} />
    </TwoComponents>
    <FirstComponent />
    <NamedComponent name="JC" />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
