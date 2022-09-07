import React, { Children } from "react";
import { render } from "react-dom";
import First from "./First";

// // render(<Application />, document.getElementById("root"));

// const App = () => {
//   return <h1>er</h1>;
// };

// render(<App />, document.getElementById("root"));

//ui html css js

function App() {
  return (
    <>
      <First size={34} border={452} college={"Some"} />
    </>
  );
}

// const props = {
//   size: 34,
//   border: 452,
// };

// const h12 = React.createElement('h1', {id:'hi'}, 'Hi There')
// React.createElement(type,props,children)

render(<App />, document.getElementById("root"));
