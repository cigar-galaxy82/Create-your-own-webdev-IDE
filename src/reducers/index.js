
import { outputSrcReducer } from "./outputModalReducer";

import { combineReducers } from "redux";

const allReducers = combineReducers({
    srcDocs: outputSrcReducer,
})

export default allReducers;
