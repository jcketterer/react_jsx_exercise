const App = () => (
  <div>
    <Tweet username="yadood" name="JC" date="1988-12-18" message="ITS MY BURFDAY!" />
    <Tweet username="TNwhiskey" name="Tim" date="1989-03-30" message="NO, ITS MY BURFDAY!" />
    <Tweet username="PublicEnemy" name="Conner" date="1989-02-20" message="NO, YOURE ALL WRONG ITS MY BURFDAY!" />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'))
