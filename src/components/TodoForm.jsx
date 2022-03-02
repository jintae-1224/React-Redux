import { useRef } from "react";
import useReduxDispatch from "../hooks/useReduxDispatch";
import { addTodo } from "../redux/actions";

export default function TodoForm(){
    const inputRef = useRef();
    const dispatch = useReduxDispatch();

    function click(){
        dispatch(addTodo(inputRef.current.value));
    }

    return(
        <div>
            <input ref={inputRef} /><button onClick={click}>추가</button>
        </div>
    )
}