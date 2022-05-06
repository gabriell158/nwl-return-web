import { Widget } from "./components/Widget"

interface ButtonProps {
  text?: string
}

function Button(props: ButtonProps) {
  console.log(props.text);
  return <button className="bg-pink-900 p-20">{props.text ?? "Esqueceu o text"}</button>;
}

export function App() {
  return (
    <div className="flex gap-10">
      <Widget></Widget>
    </div>
  );
}
