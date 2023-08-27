import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '../../../my-lib/blocks/card'
import { BtnLink, BtnModern } from '../../../my-lib/components/buttons'
import { Image } from '../../../my-lib/components/image'
import { H3, P } from '../../../my-lib/components/typography'
import { Box, Col, Row } from '../../../my-lib/layout'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const BlocksCard = () => {

  const data = [
    {
      img: 'https://loremflickr.com/640/350',
      title: 'Kuza',
    },
    {
      img: 'https://loremflickr.com/640/340',
      title: 'Petro',
    },
    {
      img: 'https://loremflickr.com/640/345',
      title: 'Vlad',
    },
    {
      img: 'https://loremflickr.com/640/355',
      title: 'Ilya',
    },
    {
      img: 'https://loremflickr.com/640/360',
      title: 'Slava',
    },
    {
      img: 'https://loremflickr.com/640/344',
      title: 'Kravets',
    }
  ]

  const [favorits, setFavorits] = useState([''])
  const [showFavorits, setShowFavorits] = useState(false)


  function addFavorits(name: string) {
    const tempFav = [...favorits, name]
    setFavorits(tempFav)
  }
  function removeFavorits(name: string) {
    const tempFav = [...favorits].filter((e) => e !== name)

    setFavorits(tempFav)
  }
  return (
    <>
      <BtnModern h='40px' hover='victoria left' onClick={() => setShowFavorits(!showFavorits)}>
        {
          showFavorits ?
            'All'
            : 'Favorits'
        }

      </BtnModern>
      <Row mt="20px" justifycontent='space-between'>
        {
          data.map((e) => (
            showFavorits
              ?
              favorits.includes(e.title)
                ?
                <Col size={4}>
                  <Card pb='20px' shadow={'variant-6'}>
                    <CardHeader h='230px'>
                      <Image src={e.img} />
                    </CardHeader>
                    <CardContent pl='15px' pr='15px'>
                      <H3 mb='10px'>{e.title}</H3>
                      <P lh='1.4em'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis repellat assumenda culpa mollitia similique. Quod quam dolore ratione. Facere pariatur, dolore ipsam hic maxime mollitia id ut deserunt ducimus animi!
                      </P>
                    </CardContent>
                    <CardFooter p='15px' display='flex' justifycontent='space-between'>
                      <Box display='flex'>
                        <BtnLink mr={'10px'} hover={'reverseBorder'}>
                          Read More
                        </BtnLink>
                        <BtnLink hover={'reverseBorder'}>
                          Buy
                        </BtnLink>
                      </Box>
                      {
                        favorits.includes(e.title) ?
                          <AiFillHeart size={'30px'} onClick={() => removeFavorits(e.title)} />
                          : <AiOutlineHeart size={'30px'} onClick={() => addFavorits(e.title)} />
                      }
                    </CardFooter>
                  </Card>
                </Col>
                :
                false
              :
              <Col size={4}>
                <Card pb='20px' shadow={'variant-6'}>
                  <CardHeader h='230px'>
                    <Image src={e.img} />
                  </CardHeader>
                  <CardContent pl='15px' pr='15px'>
                    <H3 mb='10px'>{e.title}</H3>
                    <P lh='1.4em'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis repellat assumenda culpa mollitia similique. Quod quam dolore ratione. Facere pariatur, dolore ipsam hic maxime mollitia id ut deserunt ducimus animi!
                    </P>
                  </CardContent>
                  <CardFooter p='15px' display='flex' justifycontent='space-between'>
                    <Box display='flex'>
                      <BtnLink mr={'10px'} hover={'reverseBorder'}>
                        Read More
                      </BtnLink>
                      <BtnLink hover={'reverseBorder'}>
                        Buy
                      </BtnLink>
                    </Box>
                    {
                      favorits.includes(e.title) ?
                        <AiFillHeart size={'30px'} onClick={() => removeFavorits(e.title)} />
                        : <AiOutlineHeart size={'30px'} onClick={() => addFavorits(e.title)} />
                    }
                  </CardFooter>
                </Card>
              </Col>
          ))
        }
      </Row>
    </>
  )
}
export default BlocksCard