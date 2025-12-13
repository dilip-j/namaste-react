//   <div id="parant">
//     <div id ="child">
//         <h1></h1>

//     </div>
//   </div>

const parant = React.createElement("div", { id: "parant" }, React.createElement("div", { id: "child" }, React.createElement("hi", {}, " I'am h1 tag")))

//   const heading = React.createElement("h1",{id: "heading", xyz: "abc"},"Hello world from react !!!!")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parant);