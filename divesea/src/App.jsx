import { Routes, Route } from 'react-router-dom';

import Authorization from './pages/authorization';
import Registration from './pages/registration';
import Footer from './layout/footer/footer';
import Header from './layout/header/header';
import Main from './pages/main';
import Form from './pages/form';
import Place from './pages/place';
import Account from './pages/account';
import Event from './pages/event';
import Ad from './layout/ad/ad';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/form" element={<Form />} />
        <Route path="/place" element={<Place />} />
        <Route path="/account" element={<Account />} />
        <Route path="/event" element={<Event />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
      <Ad/>
      <Footer />
    </div>
  );
};

export default App;
