import { Card, CardContent, CardFooter, CardHeader } from "../../../my-lib/blocks/card"
import { PopUp, PopUpContent, PopUpEclipse } from "../../../my-lib/blocks/pop-up"
import { BtnLink } from "../../../my-lib/components/buttons"
import { Image } from "../../../my-lib/components/image"
import { H3, P } from "../../../my-lib/components/typography"
import { Box, Col, Container, Row } from "../../../my-lib/layout"

const Blocks = () => {
  return (
    <Container mt="50px">
      <PopUp open eclipseOpacity="0.4" p="20px">
        <Card shadow >
          <CardHeader mb='15px' height="250px">
            <Image src="https://loremflickr.com/940/760" />
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
      </PopUp>



      {/* <PopUpContent open={true} bg="white" mw="500px" w="100%" p="15px">
        <Card shadow >
          <CardHeader mb='15px' height="250px">
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
      </PopUpContent> */}


    </Container>
  )
}


export default Blocks