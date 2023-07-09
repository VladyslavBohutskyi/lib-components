import { Menu, MenuItem } from "../../my-lib/blocks/menu"
import { Avatar } from "../../my-lib/components/image"
import { H5 } from "../../my-lib/components/typography"
import { Col, Container, Row } from "../../my-lib/layout"
import { LFooter } from "../../my-lib/sections/footer"



const Footer = () => {
  return (
    <LFooter bg={'#F6EFE8'} pt={'30px'} pb={'30px'}>
      <Container>
        <Row>

          <Col size={3}>
            <Avatar size={'70px'} shadow>UI</Avatar>
          </Col>

          <Col size={3}>
            <Menu display={'block'}>
              <H5 mb={'20px'}>Components</H5>
              <MenuItem mt={'10px'} ls={'1px'}>Buttons</MenuItem>
              <MenuItem mt={'10px'} ls={'1px'}>Images</MenuItem>
              <MenuItem mt={'10px'} ls={'1px'}>Typography</MenuItem>
              <MenuItem mt={'10px'} ls={'1px'}>Inputs</MenuItem>
            </Menu>
          </Col>

          <Col size={3}>
            <Menu display={'block'}>
              <H5 mb={'20px'}>Blocks</H5>
              <MenuItem mt={'10px'} ls={'1px'}>Menu</MenuItem>
              <MenuItem mt={'10px'} ls={'1px'}>Pop Up</MenuItem>
              <MenuItem mt={'10px'} ls={'1px'}>FAQ</MenuItem>
              <MenuItem mt={'10px'} ls={'1px'}>Card</MenuItem>
            </Menu>
          </Col>

          <Col size={3}>
            <Menu display={'block'}>
              <H5 mb={'20px'}>Sections</H5>
              <MenuItem mt={'10px'} ls={'1px'}>Header</MenuItem>
              <MenuItem mt={'10px'} ls={'1px'}>Footer</MenuItem>
              <MenuItem mt={'10px'} ls={'1px'}>Sliders</MenuItem>
              <MenuItem mt={'10px'} ls={'1px'}>Banner</MenuItem>
            </Menu>
          </Col>

        </Row>
      </Container>
    </LFooter>
  )
}


export default Footer