import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main } from './layouts/Main';
import { TaskPage, FrontPage } from '../src/pages';

// import { Photo } from './pages/Photo';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/TaskPage" element={<TaskPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
