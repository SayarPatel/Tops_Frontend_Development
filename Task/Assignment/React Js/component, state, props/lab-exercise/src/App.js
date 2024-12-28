import logo from './logo.svg';
import './App.css';
import Introduction from './LabExercise/Introduction';
import Jsx from './LabExercise/Jsx';
import Greetings from './LabExercise/Greetings';
import WelcoeMessage from './LabExercise/WelcoeMessage';
import UserCard from './LabExercise/UserCard';
import Counter from './LabExercise/Counter';

function App() {
  const name="SAYAR PATEL"
  const age=25
  const location="VALSAD"
  return (
    <div className="App">
      <Introduction/>
      <Jsx/>
      <Greetings  myname={name}/>
      <WelcoeMessage/>
      <UserCard myname={name} myage={age} mylocation={location}/>
      <Counter/>
    </div>
  );
}

export default App;
