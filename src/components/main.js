
function Main() {
  return (
    <h1>Main goes here</h1>
  )
}

function SubMain() {
  return (
    <h2>testing sub main</h2>
  )
}


const SubSubMain = () => (
  // return(
    <h1>hello</h1>
  // )
)


function addNmbers (a, b) {
  return a + b;
}


export {Main, SubMain, addNmbers, SubSubMain};