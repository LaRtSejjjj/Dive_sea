import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

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
import Bank from './pages/bank';
import Notifications from './layout/notifications';

const App = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="App">
      <Header setIsOpen={setIsOpen} />
      <div
        className={'notifications__bg ' + (isOpen ? 'show' : 'hidden')}
        onClick={() => setIsOpen(false)}></div>

      <Notifications isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/form" element={<Form />} />
        <Route path="/place" element={<Place />} />
        <Route path="/account" element={<Account />} />
        <Route path="/event" element={<Event />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/authorization" element={<Authorization />} />
      </Routes>
      <Ad />
      <Footer />
    </div>
  );
};

export default App;
