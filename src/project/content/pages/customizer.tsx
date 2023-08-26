import { useEffect, useState } from 'react'
import { BtnModern, BtnLink, Button } from '../../../my-lib/components/buttons'
import { CustomCheckbox, Input } from '../../../my-lib/components/form'
import { Theme } from '../../store/theme'
import { Box, Col, Container, Paper, Row, Section } from '../../../my-lib/layout'
import { H6, H1, H3, P } from '../../../my-lib/components/typography'
import { observer } from 'mobx-react'
import debounce from 'lodash/debounce';
import { ThemeProvider } from 'styled-components'
import { Separate } from '../../../my-lib/components/separate'
import { Card, CardContent, CardFooter, CardHeader } from '../../../my-lib/blocks/card';
import { Avatar, Image } from '../../../my-lib/components/image';




const Customizer = observer(() => {

  const [customTheme, setCustomTheme] = useState(Theme.currentTheme)

  const debounceSetCustomTheme = debounce(setCustomTheme, 10)

  useEffect(() => {
    setCustomTheme(Theme.currentTheme)
  }, [Theme.currentTheme])

  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Section m='-20px' p='20px'>
          <Row mb='20px'>
            <Col size={2} >
              <H6 fs='18px' mt='15px'>Primary</H6>
              <Box mt='5px' display='flex' alignitems='center' h='45px' shadow='variant-6'>
                <Box sx='overflow: hidden; flex: 0 0 auto;' w='45px' h='100%' shadow='variant-6'>
                  <Input type='color' value={customTheme.primary} sx='cursor:pointer;' p='0' border='none' m='-5px' mb='-5px' h='55px' w='55px'
                    onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, primary: e.target.value })} />
                </Box>
                <Box bg={customTheme.primary} display='flex' alignitems='center' w='100%' h='100%' ml='2px'>
                  <H6 ml='12px' color={customTheme.fontPrimary}>{customTheme.primary}</H6>
                </Box>
              </Box>
              <H6 fs='18px' mt='15px'>Font Primary</H6>
              <Box mt='5px' display='flex' alignitems='center' h='45px' shadow='variant-6'>
                <Box sx='overflow: hidden; flex: 0 0 auto;' w='45px' h='100%' shadow='variant-6'>
                  <Input type='color' value={customTheme.fontPrimary} sx='cursor:pointer' p='0' border='none' m='-5px' mb='-5px' h='55px' w='55px'
                    onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, fontPrimary: e.target.value })} />
                </Box>
                <Box bg={customTheme.fontPrimary} display='flex' alignitems='center' w='100%' h='100%' ml='2px'>
                  <H6 ml='12px' color={customTheme.primary}>{customTheme.fontPrimary}</H6>
                </Box>
              </Box>
            </Col>
            <Col size={2} >
              <H6 fs='18px' mt='15px'>Secondary</H6>
              <Box mt='5px' display='flex' alignitems='center' h='45px' shadow='variant-6'>
                <Box sx='overflow: hidden; flex: 0 0 auto;' w='45px' h='100%' shadow='variant-6'>
                  <Input type='color' value={customTheme.secondary} sx='cursor:pointer' p='0' border='none' m='-5px' mb='-5px' h='55px' w='55px'
                    onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, secondary: e.target.value })} />
                </Box>
                <Box bg={customTheme.secondary} display='flex' alignitems='center' w='100%' h='100%' ml='2px'>
                  <H6 ml='12px' color={customTheme.fontSecondary}>{customTheme.secondary}</H6>
                </Box>
              </Box>
              <H6 fs='18px' mt='15px'>Font Secondary</H6>
              <Box mt='5px' display='flex' alignitems='center' h='45px' shadow='variant-6'>
                <Box sx='overflow: hidden; flex: 0 0 auto;' w='45px' h='100%' shadow='variant-6'>
                  <Input type='color' value={customTheme.fontSecondary} sx='cursor:pointer' p='0' border='none' m='-5px' mb='-5px' h='55px' w='55px'
                    onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, fontSecondary: e.target.value })} />
                </Box>
                <Box bg={customTheme.fontSecondary} display='flex' alignitems='center' w='100%' h='100%' ml='2px'>
                  <H6 ml='12px' color={customTheme.secondary}>{customTheme.fontSecondary}</H6>
                </Box>
              </Box>
            </Col>
            <Col size={2} >
              <H6 fs='18px' mt='15px'>Paper Bg</H6>
              <Box mt='5px' display='flex' alignitems='center' h='45px' shadow='variant-6'>
                <Box sx='overflow: hidden; flex: 0 0 auto;' w='45px' h='100%' shadow='variant-6'>
                  <Input type='color' value={customTheme.paperbg} sx='cursor:pointer' p='0' border='none' m='-5px' mb='-5px' h='55px' w='55px'
                    onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, paperbg: e.target.value })} />
                </Box>
                <Box bg={customTheme.paperbg} display='flex' alignitems='center' w='100%' h='100%' ml='2px'>
                  <H6 ml='12px' color={customTheme.paperColor}>{customTheme.paperbg}</H6>
                </Box>
              </Box>
              <H6 fs='18px' mt='15px'>Paper Color</H6>
              <Box mt='5px' display='flex' alignitems='center' h='45px' shadow='variant-6'>
                <Box sx='overflow: hidden; flex: 0 0 auto;' w='45px' h='100%' shadow='variant-6'>
                  <Input type='color' value={customTheme.paperColor} sx='cursor:pointer' p='0' border='none' m='-5px' mb='-5px' h='55px' w='55px'
                    onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, paperColor: e.target.value })} />
                </Box>
                <Box bg={customTheme.paperColor} display='flex' alignitems='center' w='100%' h='100%' ml='2px'>
                  <H6 ml='12px' color={customTheme.paperbg}>{customTheme.paperColor}</H6>
                </Box>
              </Box>
            </Col>
            <Col size={2} >
              <H6 fs='18px' mt='15px'>Main Bg</H6>
              <Box mt='5px' display='flex' alignitems='center' h='45px' shadow='variant-6'>
                <Box sx='overflow: hidden; flex: 0 0 auto;' w='45px' h='100%' shadow='variant-6'>
                  <Input type='color' value={customTheme.mainbg} sx='cursor:pointer' p='0' border='none' m='-5px' mb='-5px' h='55px' w='55px'
                    onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, mainbg: e.target.value })} />
                </Box>
                <Box bg={customTheme.mainbg} display='flex' alignitems='center' w='100%' h='100%' ml='2px'>
                  <H6 ml='12px' color={customTheme.mainColor}>{customTheme.mainbg}</H6>
                </Box>
              </Box>
              <H6 fs='18px' mt='15px'>Main Color</H6>
              <Box mt='5px' display='flex' alignitems='center' h='45px' shadow='variant-6'>
                <Box sx='overflow: hidden; flex: 0 0 auto;' w='45px' h='100%' shadow='variant-6'>
                  <Input type='color' value={customTheme.mainColor} sx='cursor:pointer' p='0' border='none' m='-5px' mb='-5px' h='55px' w='55px'
                    onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, mainColor: e.target.value })} />
                </Box>
                <Box bg={customTheme.mainColor} display='flex' alignitems='center' w='100%' h='100%' ml='2px'>
                  <H6 ml='12px' color={customTheme.mainbg}>{customTheme.mainColor}</H6>
                </Box>
              </Box>
            </Col>
            <Col size={2} >
              <H6 fs='18px' mt='15px'>bg Accent</H6>
              <Box mt='5px' display='flex' alignitems='center' h='45px' shadow='variant-6'>
                <Box sx='overflow: hidden; flex: 0 0 auto;' w='45px' h='100%' shadow='variant-6'>
                  <Input type='color' value={customTheme.bgAccent} sx='cursor:pointer' p='0' border='none' m='-5px' mb='-5px' h='55px' w='55px'
                    onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, bgAccent: e.target.value })} />
                </Box>
                <Box bg={customTheme.bgAccent} display='flex' alignitems='center' w='100%' h='100%' ml='2px'>
                  <H6 ml='12px' color={customTheme.fontColorBg}>{customTheme.bgAccent}</H6>
                </Box>
              </Box>
              <H6 fs='18px' mt='15px'>Font ColorBg</H6>
              <Box mt='5px' display='flex' alignitems='center' h='45px' shadow='variant-6'>
                <Box sx='overflow: hidden; flex: 0 0 auto;' w='45px' h='100%' shadow='variant-6'>
                  <Input type='color' value={customTheme.fontColorBg} sx='cursor:pointer' p='0' border='none' m='-5px' mb='-5px' h='55px' w='55px'
                    onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, fontColorBg: e.target.value })} />
                </Box>
                <Box bg={customTheme.fontColorBg} display='flex' alignitems='center' w='100%' h='100%' ml='2px'>
                  <H6 ml='12px' color={customTheme.bgAccent}>{customTheme.fontColorBg}</H6>
                </Box>
              </Box>
            </Col>
            <Col size={2} >
              <H6 fs='18px' mt='15px'>bg Primary</H6>
              <Box mt='5px' display='flex' alignitems='center' h='45px' shadow='variant-6'>
                <Box sx='overflow: hidden; flex: 0 0 auto;' w='45px' h='100%' shadow='variant-6'>
                  <Input type='color' value={customTheme.bgPrimary} sx='cursor:pointer' p='0' border='none' m='-5px' mb='-5px' h='55px' w='55px'
                    onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, bgPrimary: e.target.value })} />
                </Box>
                <Box bg={customTheme.bgPrimary} display='flex' alignitems='center' w='100%' h='100%' ml='2px'>
                  <H6 ml='12px' color={customTheme.fontColorBg}>{customTheme.bgPrimary}</H6>
                </Box>
              </Box>
              <H6 fs='18px' mt='15px'>bg Secondary</H6>
              <Box mt='5px' display='flex' alignitems='center' h='45px' shadow='variant-6'>
                <Box sx='overflow: hidden; flex: 0 0 auto;' w='45px' h='100%' shadow='variant-6'>
                  <Input type='color' value={customTheme.bgSecondary} sx='cursor:pointer' p='0' border='none' m='-5px' mb='-5px' h='55px' w='55px'
                    onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, bgSecondary: e.target.value })} />
                </Box>
                <Box bg={customTheme.bgSecondary} display='flex' alignitems='center' w='100%' h='100%' ml='2px'>
                  <H6 ml='12px' color={customTheme.fontColorBg}>{customTheme.bgSecondary}</H6>
                </Box>
              </Box>
            </Col>
            <Col size={2}>

            </Col>
          </Row>

          <Button mb='20px' onClick={() => Theme.setCustomTheme(customTheme)}>Apply settings</Button>

          <Separate mt='25px' mb='25px' />
          <Row>
            <Col size={10} spacing='2px'>
              <Row>
                <BtnModern hover='victoria left' w='calc(20% - 9px);'>Lorem ipsum</BtnModern>
                <BtnModern hover='victoria right' w='calc(20% - 9px);'>Lorem ipsum</BtnModern>
                <BtnModern hover='victoria vertical' w='calc(20% - 9px);'>Lorem ipsum</BtnModern>
                <BtnModern hover='victoria horizontal' w='calc(20% - 9px);'>Lorem ipsum</BtnModern>
                <BtnModern hover='victoria horizontal' w='calc(20% - 9px);'>Lorem ipsum</BtnModern>
              </Row>
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
              <Row mt='20px'>
                <Col size={4}>
                  <Paper h='200px'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Consequuntur quo laudantium enim corporis cumque et nesciunt? Repudiandae asperiores dolor sunt.
                  </Paper>
                </Col>
                <Col size={4}>
                  <Paper h='200px'>
                    <Avatar mb='15px'>AA</Avatar>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, nostrum?
                  </Paper>
                </Col>
                <Col size={4}>
                  <Paper h='200px'>
                    <Avatar mb='15px'>AA</Avatar>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, nostrum?

                    <BtnModern hover='victoria horizontal' w='200px' display='flex' mt='20px'>Lorem ipsum</BtnModern>
                  </Paper>
                </Col>
              </Row>
            </Col>
            <Col size={2}>
              <H6 fs='18px' mt='15px' >
                primary: '{customTheme.primary}',</H6>
              <H6 fs='18px' mt='15px'>
                fontPrimary: '{customTheme.fontPrimary}',</H6>
              <H6 fs='18px' mt='15px'>
                secondary: '{customTheme.secondary}',</H6>
              <H6 fs='18px' mt='15px'>
                fontSecondary: '{customTheme.fontSecondary}',</H6>
              <H6 fs='18px' mt='15px'>
                mainbg: '{customTheme.mainbg}',</H6>
              <H6 fs='18px' mt='15px'>
                bgPrimary: '{customTheme.bgPrimary}',</H6>
              <H6 fs='18px' mt='15px'>
                bgSecondary: '{customTheme.bgSecondary}',</H6>
              <H6 fs='18px' mt='15px'>
                bgAccent: '{customTheme.bgAccent}',</H6>
            </Col>
          </Row>
        </Section>
      </ThemeProvider>
    </>
  )
})
export default Customizer