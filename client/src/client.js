import ReactDOM from "react-dom";
import EditorInterface from "./EditorInterface";

import './index.css';

ReactDOM.render(<EditorInterface />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}