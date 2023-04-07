import './App.css';
import Length from './components/Length';
import SessionTimer from './components/SessionTimer'
import PlayControl from './components/PlayControl'

function App() {
  return (
    <div className="container">
      <p className='main-title'>25 + 5 Clock</p>
      <Length />
      <SessionTimer />
      <PlayControl />
    </div>
  );
}

export default App;
