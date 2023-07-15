import { Card, CardContent, CardFooter, CardHeader } from "../../../my-lib/blocks/card"
import { BtnLink } from "../../../my-lib/components/buttons"
import { Image } from "../../../my-lib/components/image"
import { H3, P } from "../../../my-lib/components/typography"
import { Box, Col, Container, Row } from "../../../my-lib/layout"

const Blocks = () => {
  return (
    <Container mt="50px">
      <Row>
        <Col size={4} mb="25px">
          <Card shadow >
            <CardHeader height="250px">
              <Image src="https://loremflickr.com/240/360" />
            </CardHeader>
            <CardContent pl="15px" pr="15px">
              <H3 mb="15px">Card Title</H3>
              <P lh="1.4em">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Modi magnam aspernatur dignissimos expedita repellat quidem!
              </P>
            </CardContent>
            <CardFooter p="15px" display="flex" justifyContent='flex-start'>
              <BtnLink textTransform="uppercase" mr="20px" hover={'reverseBorder'}>
                Read More
              </BtnLink>
              <BtnLink textTransform="uppercase" hover={'reverseBorder'}>
                Subscribe
              </BtnLink>
            </CardFooter>
          </Card>
        </Col>
        <Col size={4} mb="25px">
          <Card shadow pb="20px">
            <CardHeader height="250px">
              <Image src="https://loremflickr.com/440/360" />
            </CardHeader>
            <CardContent pl="15px" pr="15px">
              <H3 mb="15px">Card Title</H3>
              <P lh="1.4em">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusamus doloribus molestiae sapiente ut magnam quisquam necessitatibus,
                provident nesciunt commodi aperiam eos, vel nostrum! Iure placeat reprehenderit quae magnam, esse,
                molestias velit blanditiis odit,
                distinctio corporis ullam nulla ipsa eum quasi.
              </P>
            </CardContent>
            <CardFooter p="15px" display="flex" justifyContent='flex-start'>
              <BtnLink textTransform="uppercase" mr="20px" hover={'reverseBorder'}>
                Read More
              </BtnLink>
              <BtnLink textTransform="uppercase" hover={'reverseBorder'}>
                Subscribe
              </BtnLink>
            </CardFooter>
          </Card>
        </Col>
        <Col size={4} mb="25px">
          <Card shadow pb="20px">
            <CardHeader height="250px">
              <Image src="https://loremflickr.com/540/360" />
            </CardHeader>
            <CardContent pl="15px" pr="15px">
              <H3 mb="15px">Card Title</H3>
              <P lh="1.4em">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Modi magnam aspernatur dignissimos expedita repellat quidem!
              </P>
            </CardContent>
            <CardFooter p="15px" display="flex" justifyContent='flex-start'>
              <BtnLink textTransform="uppercase" mr="20px" hover={'reverseBorder'}>
                Read More
              </BtnLink>
              <BtnLink textTransform="uppercase" hover={'reverseBorder'}>
                Subscribe
              </BtnLink>
            </CardFooter>
          </Card>
        </Col>
        <Col size={12} mb="25px">
          <Card shadow flexDirection="row">
            <CardHeader height="350px">
              <Image src="https://loremflickr.com/640/380" />
            </CardHeader>
            <Box display="flex" justifyContent={'space-between'}>
              <CardContent pl="15px" pr="15px">

                <H3 mb="15px">Card Title</H3>
                <P lh="1.4em">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Modi magnam aspernatur dignissimos expedita repellat quidem!
                </P>

              </CardContent>
              <CardFooter p="15px" display="flex" justifyContent='flex-start'>
                <BtnLink textTransform="uppercase" mr="20px" hover={'reverseBorder'}>
                  Read More
                </BtnLink>
                <BtnLink textTransform="uppercase" hover={'reverseBorder'}>
                  Subscribe
                </BtnLink>
              </CardFooter>
            </Box>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}


export default Blocks