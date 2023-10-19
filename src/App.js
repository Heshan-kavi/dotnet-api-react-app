import './App.css';
import {Button, LoginButton, SignupButton} from './Shared/Components/Buttons';

function App() {
  return (
    <div className="App">
      <h1>
        testing buttons
      </h1>
      <h2>
        Usual buttons
      </h2>
      <Button>Primary Button</Button>
      <h2>
        Login button
      </h2>
      <LoginButton >Login Button</LoginButton>
      <h2>
        Signup button
      </h2>
      <SignupButton >Signup Button</SignupButton>
      <h1>
        Signup button
      </h1>
    </div>
  );
}

export default App;
