import { Routes, Route } from 'react-router-dom';
import Home from './project/content/pages/home';
import Header from './project/header';
import Footer from './project/footer';
import { Box, Col, Container, Row, Section } from './my-lib/layout';
import SidebarLayout from './project/sidebar/sidebar-layout';
import SidebarComponents from './project/sidebar/sidebar-components';
import SidebarBlocks from './project/sidebar/sidebar-blocks';
import SidebarSections from './project/sidebar/sidebar-sections';
import SidebarHome from './project/sidebar/sidebar-home';
import About from './project/content/pages/about';
import Contacts from './project/content/pages/contacts';
import LayoutPage from './project/content/layout';
import LayoutBox from './project/content/layout/box';
import LayoutColumns from './project/content/layout/columns';
import LayoutContainer from './project/content/layout/container';
import LayoutRow from './project/content/layout/row';
import LayoutSections from './project/content/layout/sections';
import ComponentsPage from './project/content/components';
import ComponentsButton from './project/content/components/buttons';
import ComponentsForm from './project/content/components/form';
import ComponentsImage from './project/content/components/image';
import ComponentsList from './project/content/components/list';
import ComponentsTypography from './project/content/components/typography';
import BlocksPage from './project/content/blocks';
import BlocksCard from './project/content/blocks/card';
import BlocksMenu from './project/content/blocks/menu';
import BlocksPopUp from './project/content/blocks/pop-up';
import BlocksTabs from './project/content/blocks/tabs';
import SectionPage from './project/content/sections';
import SectionsHeader from './project/content/sections/header';
import SectionsFooter from './project/content/sections/footer';


function App() {
  return (
    <div className="App">
      <Container fullwidth='true' pl='0' pr='0' bg='#F9F9F9'>
        <Row sx='min-height: 100vh;'>
          <Col size={2} bg='white'>
            <Routes>
              <Route path='/*' element={<SidebarHome />} />
              <Route path='/layout/*' element={<SidebarLayout />} />
              <Route path='/components/*' element={<SidebarComponents />} />
              <Route path='/blocks/*' element={<SidebarBlocks />} />
              <Route path='/sections/*' element={<SidebarSections />} />
            </Routes>
          </Col>
          <Col size={10} display='flex' flexDirection='column' >
            <Header />
            <Section flex='1'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contacts />} />

                <Route path='/layout/*' element={<LayoutPage />} />
                <Route path='/layout/box' element={<LayoutBox />} />
                <Route path='/layout/section' element={<LayoutSections />} />
                <Route path='/layout/container' element={<LayoutContainer />} />
                <Route path='/layout/row' element={<LayoutRow />} />
                <Route path='/layout/columns' element={<LayoutColumns />} />

                <Route path='/components/*' element={<ComponentsPage />} />
                <Route path='/components/buttons' element={<ComponentsButton />} />
                <Route path='/components/form' element={<ComponentsForm />} />
                <Route path='/components/images' element={<ComponentsImage />} />
                <Route path='/components/list' element={<ComponentsList />} />
                <Route path='/components/typography' element={<ComponentsTypography/>} />

                <Route path='/blocks/*' element={<BlocksPage/>} />
                <Route path='/blocks/card' element={<BlocksCard/>} />
                <Route path='/blocks/menu' element={<BlocksMenu/>} />
                <Route path='/blocks/pop-up' element={<BlocksPopUp/>} />
                <Route path='/blocks/tabs' element={<BlocksTabs/>} />                                      
                       
                <Route path='/sections/*' element={<SectionPage/>} />
                <Route path='/sections/header' element={<SectionsHeader/>} />
                <Route path='/sections/footer' element={<SectionsFooter/>} />

              </Routes>
            </Section>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
