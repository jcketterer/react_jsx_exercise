const RandomEmoji = props => {
  const randEmoji = Math.floor(Math.random() * props.emojis.length)
  const pickedEmoji = props.emojis[randEmoji]
  return <h3>Random Emoji: {pickedEmoji}</h3>
}
