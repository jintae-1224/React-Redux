export const ADD_TODO = 'ADD_TODO';    // 액션의 타입은 대부분 대문자의 언더바

export function addTodo(todo){
    return{
        type : ADD_TODO,
        todo: todo, //  todo로 이름 같으면 생략 가능
    };
}