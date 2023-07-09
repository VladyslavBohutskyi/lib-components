import { Routes, Route } from 'react-router-dom';
import Home from './project/pages/home';
import Blocks from './project/pages/blocks';
import Components from './project/pages/components';
import Header from './project/header';
import Footer from './project/footer';
import { Container, Section } from './my-lib/layout';
import Sections from './project/pages/sections';

function App() {
  return (
    <div className="App">
      <Header />
      <Section flex='1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/components' element={<Components />} />
          <Route path='/blocks' element={<Blocks />} />
          <Route path='/sections' element={<Sections />} />
        </Routes>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
