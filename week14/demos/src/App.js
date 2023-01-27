import "./App.scss";

import Class from "./components/class-v-function/Class";
import ComponentState from "./components/ComponentState/ComponentState";
import FunctionalComponent from "./components/class-v-function/FunctionalComponent";
import UserCardList from "./components/UserCardList/UserCardList";
import { users } from "./data/users";

function App() {
  return (
    <div className="App">
      <UserCardList user={users} />
    </div>
  );
}

export default App;
