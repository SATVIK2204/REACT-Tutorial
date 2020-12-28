import logo from './logo.svg';
import './App.css';
// import Greet from './components/greeting'
// import Welcome from './components/welcome.js'
// import Hello from './components/3_with_jsx.js'
// import Hello from './components/3_without_jsx'
// import GreetCustom from './components/4_props'
import Welcomeprop from './components/4_props_class_component'
function App() {
  return (
    <div className="App">
      {/* <GreetCustom name="Mr. Stark" heroname="Iron Man">
        <p>Genius | Billionare| Playboy | Philanthrophist</p>
      </GreetCustom>
      <GreetCustom name="Steve Rogers" heroname="Captain America">
        <button>I can do this all day?</button>
      </GreetCustom>
      <GreetCustom name="Thor Odinson" heroname="Thod-God of Thunder"/> */}
      <Welcomeprop name="Mr. Stark" heroname="Iron Man">
        <p>Genius | Billionare| Playboy | Philanthrophist</p>
      </Welcomeprop>
      <Welcomeprop name="Steve Rogers" heroname="Captain America">
        <button>I can do this all day?</button>
      </Welcomeprop>
      <Welcomeprop name="Thor Odinson" heroname="Thod-God of Thunder"/>
    </div>
  );
}

export default App;
