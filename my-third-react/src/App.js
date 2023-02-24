
import './App.css';
import CandidateInfo from './components/CandidateInfo';
import TotalVotes from './components/TotalVotes';
import Voting from './components/Voting';

function App() {
  return (
    <div className="App">
      <CandidateInfo
       name="Johnny" 
       age="43" 
       party="Liberal" 
       img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
       
    
      <CandidateInfo 
        name="Jack" 
        age="43" 
        party="Conservative" 
        img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"/>
 
    </div>
  );
}

export default App;

