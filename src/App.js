import logo from "./logo.svg";
import "./App.css";
import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";

//custom hook
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* json을 문자열로 */}
        <TodoListContainer />
        <TodoFormContainer />
      </header>
    </div>
  );
}

export default App;
