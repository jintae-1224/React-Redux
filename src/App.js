import logo from './logo.svg';
import './App.css';
import { addTodo } from './redux/actions';
import useReduxDispatch from './hooks/useReduxDispatch';
import useReduxState from './hooks/useReduxState';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

//custom hook
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* json을 문자열로 */}
        <TodoList />
        <TodoForm />
      </header>
    </div>
  );
}

export default App;
