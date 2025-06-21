import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import Feed from './components/Feed';
import InPost from './components/InPost';

function App() {
  return (
    <Router>
      <div style={{          //-- 퍼지지 않도록, 비율 고정
        maxWidth: '600px',  
        margin: '0 auto',  
        minHeight: '100vh',  
        borderLeft: '1px solid #ddd', 
        borderRight: '1px solid #ddd',
        backgroundColor: 'white'       
      }}>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/posts/:id" element={<InPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
