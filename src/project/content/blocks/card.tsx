import { Card, CardContent, CardFooter, CardHeader } from "../../../my-lib/blocks/card"
import { BtnLink } from "../../../my-lib/components/buttons"
import { Image } from "../../../my-lib/components/image"
import { H3, P } from "../../../my-lib/components/typography"
import { Col, Row } from "../../../my-lib/layout"

const BlocksCard = () => {
  return (
    <>
      <Row mt='20px'>
        <Col size={4}>
          <Card pb='20px' shadow={'variant-6'}>
            <CardHeader h='230px'>
              <Image src='https://loremflickr.com/640/350' />
            </CardHeader>
            <CardContent pl='15px' pr='15px'>
              <H3 mb='10px'>Card Title</H3>
              <P lh='1.4em'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis repellat assumenda culpa mollitia similique. Quod quam dolore ratione. Facere pariatur, dolore ipsam hic maxime mollitia id ut deserunt ducimus animi!
              </P>
            </CardContent>
            <CardFooter p='15px' display='flex'>
              <BtnLink mr={'10px'} hover={'reverseBorder'}>
                Read More
              </BtnLink>
              <BtnLink hover={'reverseBorder'}>
                Subscribe
              </BtnLink>
            </CardFooter>
          </Card>
        </Col>
        <Col size={4}>
          <Card pb='20px' shadow={'variant-3'}>
            <CardHeader h='230px'>
              <Image src='https://loremflickr.com/640/360' />
            </CardHeader>
            <CardContent pl='15px' pr='15px'>
              <H3 mb='10px'>Card Title</H3>
              <P lh='1.4em'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis repellat assumenda culpa mollitia similique. Quod quam dolore ratione. Facere pariatur, dolore ipsam hic maxime mollitia id ut deserunt ducimus animi!
              </P>
            </CardContent>
            <CardFooter p='15px' display='flex'>
              <BtnLink mr={'10px'} hover={'reverseBorder'}>
                Read More
              </BtnLink>
            </CardFooter>
          </Card>
        </Col>
        <Col size={4}>
          <Card pb='20px' shadow={'variant-1'}>
            <CardHeader h='230px'>
              <Image src='https://loremflickr.com/640/340' />
            </CardHeader>
            <CardContent pl='15px' pr='15px'>
              <H3 mb='10px'>Card Title</H3>
              <P lh='1.4em'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis repellat assumenda culpa mollitia similique. Quod quam dolore ratione. Facere pariatur, dolore ipsam hic maxime mollitia id ut deserunt ducimus animi!
              </P>
            </CardContent>
            <CardFooter p='15px' display='flex'>
              <BtnLink mr={'10px'} hover={'reverseBorder'}>
                Read More
              </BtnLink>
              <BtnLink hover={'reverseBorder'}>
                Subscribe
              </BtnLink>
            </CardFooter>
          </Card>
        </Col>
      </Row>

    </>
  )
}


export default BlocksCard