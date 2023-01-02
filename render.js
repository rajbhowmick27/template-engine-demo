
import * as React from "react";
import {renderToString} from 'react-dom/server';
// import { renderToPipeableStream } from "react-dom/server";

// import App from './client/src/App';

import EditorInterface from './client/src/EditorInterface';



module.exports = function render() {
    console.log(renderToString(<EditorInterface />))
    // This is how you would wire it up previously:
    return renderToString(<EditorInterface />);
    
}