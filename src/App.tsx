import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import './App.css'
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/details' element={<div />} />
            <Route path='*' element={<div />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
