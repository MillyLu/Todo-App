import {ToDoInput} from './components/input/input';
import DisplayTodos from './components/visible/display'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App</h1>
      </header>
      <ToDoInput />
      <DisplayTodos />
    </div>
  );
}

export default App;
