const App = () => (
  <div>
    <TwoComponents>
      <RandomColor colors={['green', 'purple', 'blue', 'white', 'black']} />
      <RandomEmoji emojis={['๐คฉ', '๐ฐ', '๐ฆน', '๐งท', '๐']} />
    </TwoComponents>
    <FirstComponent />
    <NamedComponent name="JC" />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
