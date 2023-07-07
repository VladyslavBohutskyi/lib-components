import { Menu, MenuItem } from "../../my-lib/blocks/menu"
import { Avatar } from "../../my-lib/components/image"
import { Box, Col, Container, Row } from "../../my-lib/layout"
import { LFooter } from "../../my-lib/sections/footer"



const Footer = () => {
  return (
    <LFooter bg={'#F6EFE8'} pt={'40px'} pb={'40px'}>
      <Container>
        <Row>

          <Col size={3}>
            <Avatar size={'70px'} shadow>UI</Avatar>
          </Col>

          <Col size={3}>
            <Menu display={'block'}>
              <h5>Components</h5>
              <MenuItem mt={'10px'} textTransform={'uppercase'}>Buttons</MenuItem>
              <MenuItem mt={'10px'} textTransform={'uppercase'}>Images</MenuItem>
              <MenuItem mt={'10px'} textTransform={'uppercase'}>Typography</MenuItem>
              <MenuItem mt={'10px'} textTransform={'uppercase'}>Inputs</MenuItem>
            </Menu>
          </Col>

          <Col size={3}>
            <Menu display={'block'}>
              <h5>Blocks</h5>
              <MenuItem mt={'10px'} textTransform={'uppercase'}>Menu</MenuItem>
              <MenuItem mt={'10px'} textTransform={'uppercase'}>Pop Up</MenuItem>
              <MenuItem mt={'10px'} textTransform={'uppercase'}>FAQ</MenuItem>
              <MenuItem mt={'10px'} textTransform={'uppercase'}>Card</MenuItem>
            </Menu>
          </Col>

          <Col size={3}>
            <Menu display={'block'}>
              <h5>Sections</h5>
              <MenuItem mt={'10px'} textTransform={'uppercase'}>Header</MenuItem>
              <MenuItem mt={'10px'} textTransform={'uppercase'}>Footer</MenuItem>
              <MenuItem mt={'10px'} textTransform={'uppercase'}>Sliders</MenuItem>
              <MenuItem mt={'10px'} textTransform={'uppercase'}>Banner</MenuItem>
            </Menu>
          </Col>

        </Row>
      </Container>
    </LFooter>
  )
}


export default Footer