const RandomColor = props => {
  const randColor = Math.floor(Math.random() * props.colors.length)
  const pickedColor = props.colors[randColor]
  return <h3>Random Color: {pickedColor}</h3>
}
