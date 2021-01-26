import React from "react";
import ReactDOM from "react-dom";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <React.Suspense fallback={<p>Loading...</p>}>
    <App />
  </React.Suspense>,
  document.getElementById("root")
);
