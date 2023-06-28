import { Routes, Route } from 'react-router-dom';
import Home from './project/pages/home';
import Sections from './project/pages/sections';
import Blocks from './project/pages/blocks';
import Components from './project/pages/components';
import Header from './project/header';
import Footer from './project/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/components' element={<Components />} />
        <Route path='/blocks' element={<Blocks />} />
        <Route path='/sections' element={<Sections />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
