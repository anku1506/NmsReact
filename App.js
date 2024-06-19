import React from "react";
import ReactDOM from "react-dom/client";


//functional component-
const Title = () => {
  return <h1>NMSTY React- In title functional component</h1>
}


const HeadingComponent = () => {
  return (
    <div id="container">
//Below three produces same result to call title component
      <Title />
      {Title()}
      <Title></Title>
      
      <h1 className="heading"> from functional component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
