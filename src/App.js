import './App.scss';


function Message(props) {
  return <p className="message">message - {props.text}</p>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text={"myApp"} />
      </header>
    </div>
  );
}

export default App;
