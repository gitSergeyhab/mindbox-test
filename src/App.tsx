import { TodoCreator } from "./components/TodoCreator/TodoCreator";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoControls } from "./components/TodoControls/TodoControls";

import "./App.css";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">todos</h1>

      <div className="app__wrapper">
        <TodoCreator />
        <TodoList />
        <TodoControls />
      </div>
    </div>
  );
}

export default App;
