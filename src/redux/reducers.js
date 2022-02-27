import { ADD_TODO } from "./actions"

// state
// ['코딩', '점심 먹기'];

// 초기값을 설정해주는 부분 2
const initialsState = [];

export function todoApp(previousState = initialsState, action){
    // 초기값을 설정해주는 부분1
    // if(previousState === undefined){
    //     return [];
    // }

    if(action.type === ADD_TODO){
        return [...previousState, action.todo];
    }

    return previousState;
}
