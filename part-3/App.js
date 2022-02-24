const App = () => {
  return (
    <div>
      <Person name="Peter" age={42} hobbies={['drinking', 'fighting a large chicken', 'making fun of Meg']} />
      <Person name="Brian" age={10} hobbies={['Hanging with stewie', 'barking at cleveland', 'making fun of Meg']} />
      <Person name="Stewie" age={24} hobbies={['building time machines', 'loathing louise', 'making fun of Meg']} />
      <Person name="Chris" age={14} hobbies={['being awkward', 'getting harassed by herbert', 'making fun of Meg']} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
