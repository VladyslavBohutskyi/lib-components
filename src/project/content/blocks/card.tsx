import { Card } from "../../../my-lib/blocks/card"
import { P } from "../../../my-lib/components/typography"
import { Col, Row } from "../../../my-lib/layout"

const BlocksCard = () => {
  return (
    <>
      <Row sx='text-align: center; vertical-align: middle;'>
        <Col size={4} mb='20px'>
          <Card shadow='variant-1' h='300px'>
            <P m='auto'>Variant 1</P>
          </Card>
        </Col>
        <Col size={4} mb='20px'>
          <Card shadow='variant-2' h='300px'>
            <P m='auto'>Variant 2</P>
          </Card>
        </Col>
        <Col size={4} mb='20px'>
          <Card shadow='variant-3' h='300px'>
            <P m='auto'>Variant 3</P>
          </Card>
        </Col>
        <Col size={4} mb='20px'>
          <Card shadow='variant-4' h='300px'>
            <P m='auto'>Variant 4</P>
          </Card>
        </Col>
        <Col size={4} mb='20px'>
          <Card shadow='variant-5' h='300px'>
            <P m='auto'>Variant 5</P>
          </Card>
        </Col>
        <Col size={4} mb='20px'>
          <Card shadow='variant-6' h='300px'>
            <P m='auto'>Variant 6</P>
          </Card>
        </Col>

      </Row>

    </>
  )
}


export default BlocksCard