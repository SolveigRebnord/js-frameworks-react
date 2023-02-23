
import './App.css';
import Headings from './components/Headings';
import Paragraphs from './components/Paragraphs';

function App() {
  return (
    <div className="App">
      <Headings 
        name="Solveig" age="(26)" color="pink" fontSize="50" />
      <Headings/>
      <Headings 
        name="Johnnyyyy" fontSize="20"/>
      <Paragraphs para="first lorem"/>
      <Paragraphs para="second lorem"/>
      <Paragraphs/>
    </div>
  );
}

export default App;
