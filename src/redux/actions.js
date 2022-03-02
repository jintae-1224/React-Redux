export const ADD_TODO = 'ADD_TODO';    // 액션의 타입은 대부분 대문자의 언더바
export const COMPLETE_TODO = 'COMPLETE_TODO';

// {type: ADD_TODO, text: '할일'}
export function addTodo(text){
    return{
        type : ADD_TODO,
        text,
    };
}

// {type: COMPLETE_TODO, index: 3}
export function completeTodo(index){
    return{
        type: COMPLETE_TODO,
        index
    }
}

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

export function showAll(){
    return{
        type: SHOW_ALL
    }
}

export function showComplete(){
    return{
        type: SHOW_COMPLETE
    }
}