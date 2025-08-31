import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Browse from './pages/Browse';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Browse />} />
        <Route path='browse' element={<Browse />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default App;
