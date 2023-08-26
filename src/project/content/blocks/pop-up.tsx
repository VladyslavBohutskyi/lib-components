import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../../../my-lib/blocks/card'
import { PopUp } from '../../../my-lib/blocks/pop-up'
import { BtnLink, Button } from '../../../my-lib/components/buttons'
import { Image } from '../../../my-lib/components/image'
import { H3, P, H1 } from '../../../my-lib/components/typography'
import { Container } from '../../../my-lib/layout'

const BlocksPopUp = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const [openAllow, setOpenAllow] = useState(false)

  return (
    <Container mt='50px'>
      <Button onClick={() => setOpenPopup(!openPopup)} mb='20px'>open popup</Button>
      <Button onClick={() => setOpenAllow(!openAllow)} mb='20px'>open allow</Button>
      <PopUp open={openPopup} eclipseOpacity='0.4' p='20px' openPopupFunction={setOpenPopup}>
        <Card shadow='variant-1' minH='250px'>
          <CardHeader mb='15px' h='250px'>
            <Image src='https://loremflickr.com/940/760' />
          </CardHeader>
          <CardContent pl='15px' pr='15px'>
            <H3 mb='15px'>Card Title</H3>
            <P lh='1.4em'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Modi magnam aspernatur dignissimos expedita repellat quidem!
            </P>
          </CardContent>
          <CardFooter p='15px' display='flex' justifycontent='flex-start'>
            <BtnLink textTransform='uppercase' mr='20px' hover={'reverseBorder'} textDecoration='none'>
              Read More
            </BtnLink>
            <BtnLink textTransform='uppercase' hover={'reverseBorder'}>
              Subscribe
            </BtnLink>
          </CardFooter>
        </Card>
      </PopUp>

      <PopUp open={openAllow} openPopupFunction={setOpenAllow}>
        <Card p='20px'>
          <CardHeader mb='25px' sx='border-bottom: 1px solid black' p='20px'>
            <H1>Lorem, ipsum.</H1>
          </CardHeader>
          <CardContent >
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nobis doloremque labore debitis et aut quisquam hic assumenda optio in impedit.
            </P>
          </CardContent>
          <CardFooter display='flex' p='20px'>
            <Button bg='orange'>
              Yes
            </Button>
            <Button >
              No
            </Button>
          </CardFooter>
        </Card>
      </PopUp>

    </Container>
  )
}


export default BlocksPopUp