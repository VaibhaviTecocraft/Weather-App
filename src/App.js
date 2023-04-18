import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Index from './Pages/Index';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
