import Phone from '../Phone';
import './styles.scss';
import hand from '../../assets/hand3.png';


function App() {
  return (
    <div className="app">
      <Phone />
      <img src={hand} className="app_hand" />
    </div>
  );
}

// == Export
export default App;
