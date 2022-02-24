const Tweet = props => {
  return (
    <div>
      <h2>Tweet!</h2>
      <p>{props.username}</p>
      <p>{props.name}</p>
      <p>{props.date}</p>
      <p>{props.message}</p>
    </div>
  )
}
