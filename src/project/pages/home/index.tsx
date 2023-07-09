import { H1 } from "../../../my-lib/components/typography"
import { Col, Container, Row, Section } from "../../../my-lib/layout"


const Home = () => {
  return (
    <>

      <Section>
        <Container bg="red">
          <Row bg="orange">
            <Col size={6} spacing="25px" p="50px" pb="10px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, neque.
            </Col>
            <Col size={3} spacing="25px" p="50px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, neque.
            </Col>
            <Col size={3} spacing="25px" p="50px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, neque.
            </Col>
          </Row>
        </Container>
      </Section>
      <Section bg="blue">
        <Container bg="yellow">
          <H1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quam fugit exercitationem?</H1>
        </Container>
      </Section>
    </>
  )
}


export default Home