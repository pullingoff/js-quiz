import {combineReducers} from "redux";
import result from "./result"

// root reducer라고 보면 됨
const rootReducer = combineReducers({
    // 서브 리듀서들
    result
});

export default rootReducer;

// 얘를 이제 App에서 씀
export type RootState = ReturnType<typeof rootReducer>;