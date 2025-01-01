export default function Joke({ setup, punchline }) {
  return (
    <article>
      {setup && setup} {punchline}
    </article>
  );
}
