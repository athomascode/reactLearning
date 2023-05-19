import { addNmbers } from "./main"
function Navbar() {
  const sum = addNmbers(2,3);
  return (
    <div>
      <h1>Navbar goes here</h1>
      <h2>{`sum: ${sum}`}</h2>
    </div>
  )
}

export default Navbar