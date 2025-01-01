export default function Joke(props) {
  const comments =
    props.comments &&
    props.comments.map(function (comment) {
      return <li>{comment}</li>;
    });

  return (
    <>
      <p>{props.isPun ? "This is a pun" : "This is not a pun"}</p>
      {props.setup && <p className="setup">Setup: {props.setup}</p>}
      <p className="punchline">Punchline: {props.punchline}</p>
      <p>Upvotes: {props.upvotes}</p>
      <p>Downvotes: {props.downvotes}</p>
      <p>Comments:</p>
      <ul>{comments}</ul>
      <hr />
    </>
  );
}
