import "./styles/App.css";
import Card from "./components/card/card";
import SignIn from "./components/signIn";
import { users } from "./constants";
function App() {
  return (
    <div className="root">
      <div className="signInCard">
        <SignIn />
        {users.map((users) => (
          <Card
            key={users.id}
            img={users.picture.large}
            name={users.name.title}
            first={users.name.first}
            last={users.name.last}
            gender={users.gender}
            age={users.dob.age}
            email={users.email}
          />
        ))}
      </div>
      <div className="personlist"></div>
    </div>
  );
}

export default App;
