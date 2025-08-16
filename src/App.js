import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import SaaS from './pages/SaaS';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/saas" element={<SaaS />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
