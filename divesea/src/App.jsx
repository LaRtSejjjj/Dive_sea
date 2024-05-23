import { Routes, Route } from 'react-router-dom';

import Authorization from './pages/authorization';
import Registration from './pages/registration';
import Footer from './layout/footer/footer';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
