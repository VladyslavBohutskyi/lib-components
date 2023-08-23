import { useEffect, useState } from 'react'
import { BtnModern, Button } from '../../../my-lib/components/buttons'
import { Input } from '../../../my-lib/components/form'
import { Theme } from '../../store/theme'
import { Box, Col, Container, Row } from '../../../my-lib/layout'
import { H6 } from '../../../my-lib/components/typography'
import { observer } from 'mobx-react'
import debounce from 'lodash/debounce';
import { Separate } from '../../../my-lib/components/separate'
import { ThemeProvider } from 'styled-components'

const Customizer = observer(() => {

  const [customTheme, setCustomTheme] = useState(Theme.currentTheme)

  const debounceSetCustomTheme = debounce(setCustomTheme, 50)

  useEffect(() => {
    setCustomTheme(Theme.currentTheme)
  }, [Theme.currentTheme])


  return (
    <>
      <Row>
        <Col size={2} >
          <H6 fs='18px' mt='10px'>Primary</H6>
          <Box mt='5px' display='flex' alignitems='center'>
            <Input type='color' value={customTheme.primary} sx='cursor:pointer' p='0' border='none' mb='0' h='50px' w='54px'
              onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, primary: e.target.value })} />
            <Box bg={customTheme.primary} display='flex' alignitems='center' w='100%' h='42px'>
              <H6 ml='12px' color={customTheme.fontPrimary}>{customTheme.primary}</H6>
            </Box>
          </Box>
          <H6 fs='18px' mt='10px'>Font Primary</H6>
          <Box mt='5px' display='flex' alignitems='center'>
            <Input type='color' value={customTheme.fontPrimary} sx='cursor:pointer' p='0' border='none' mb='0' h='50px' w='54px'
              onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, fontPrimary: e.target.value })} />
            <Box bg={customTheme.fontPrimary} display='flex' alignitems='center' w='100%' h='42px'>
              <H6 ml='12px' color={customTheme.primary}>{customTheme.fontPrimary}</H6>
            </Box>
          </Box>
        </Col>
        <Col size={2} >
          <H6 fs='18px' mt='10px'>Secondary</H6>
          <Box mt='5px' display='flex' alignitems='center'>
            <Input type='color' value={customTheme.secondary} sx='cursor:pointer' p='0' border='none' mb='0' h='50px' w='54px'
              onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, secondary: e.target.value })} />
            <Box bg={customTheme.secondary} display='flex' alignitems='center' w='100%' h='42px'>
              <H6 ml='12px' color={customTheme.fontSecondary}>{customTheme.secondary}</H6>
            </Box>
          </Box>
          <H6 fs='18px' mt='10px'>Font Secondary</H6>
          <Box mt='5px' display='flex' alignitems='center'>
            <Input type='color' value={customTheme.fontSecondary} sx='cursor:pointer' p='0' border='none' mb='0' h='50px' w='54px'
              onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, fontSecondary: e.target.value })} />
            <Box bg={customTheme.fontSecondary} display='flex' alignitems='center' w='100%' h='42px'>
              <H6 ml='12px' color={customTheme.secondary}>{customTheme.fontSecondary}</H6>
            </Box>
          </Box>
        </Col>
        <Col size={2} >
          <H6 fs='18px' mt='10px'>Paper</H6>
          <Box mt='5px' display='flex' alignitems='center'>
            <Input type='color' value={customTheme.paper} sx='cursor:pointer' p='0' border='none' mb='0' h='50px' w='54px'
              onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, paper: e.target.value })} />
            <Box bg={customTheme.paper} display='flex' alignitems='center' w='100%' h='42px'>
              <H6 ml='12px' color={customTheme.fontColor}>{customTheme.paper}</H6>
            </Box>
          </Box>
          <H6 fs='18px' mt='10px'>Font Color</H6>
          <Box mt='5px' display='flex' alignitems='center'>
            <Input type='color' value={customTheme.fontColor} sx='cursor:pointer' p='0' border='none' mb='0' h='50px' w='54px'
              onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, fontColor: e.target.value })} />
            <Box bg={customTheme.fontColor} display='flex' alignitems='center' w='100%' h='42px'>
              <H6 ml='12px' color={customTheme.paper}>{customTheme.fontColor}</H6>
            </Box>
          </Box>
        </Col>
        <Col size={2} >
          <H6 fs='18px' mt='10px'>bg Accent</H6>
          <Box mt='5px' display='flex' alignitems='center'>
            <Input type='color' value={customTheme.bgAccent} sx='cursor:pointer' p='0' border='none' mb='0' h='50px' w='54px'
              onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, bgAccent: e.target.value })} />
            <Box bg={customTheme.bgAccent} display='flex' alignitems='center' w='100%' h='42px'>
              <H6 ml='12px' color={customTheme.fontColorBg}>{customTheme.bgAccent}</H6>
            </Box>
          </Box>
          <H6 fs='18px' mt='10px'>Font ColorBg</H6>
          <Box mt='5px' display='flex' alignitems='center'>
            <Input type='color' value={customTheme.fontColorBg} sx='cursor:pointer' p='0' border='none' mb='0' h='50px' w='54px'
              onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, fontColorBg: e.target.value })} />
            <Box bg={customTheme.fontColorBg} display='flex' alignitems='center' w='100%' h='42px'>
              <H6 ml='12px' color={customTheme.bgAccent}>{customTheme.fontColorBg}</H6>
            </Box>
          </Box>
        </Col>
        <Col size={2} >
          <H6 fs='18px' mt='10px'>bg Primary</H6>
          <Box mt='5px' display='flex' alignitems='center'>
            <Input type='color' value={customTheme.bgPrimary} sx='cursor:pointer' p='0' border='none' mb='0' h='50px' w='54px'
              onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, bgPrimary: e.target.value })} />
            <Box bg={customTheme.bgPrimary} display='flex' alignitems='center' w='100%' h='42px'>
              <H6 ml='12px' color={customTheme.fontColorBg}>{customTheme.bgPrimary}</H6>
            </Box>
          </Box>
          <H6 fs='18px' mt='10px'>bg Secondary</H6>
          <Box mt='5px' display='flex' alignitems='center'>
            <Input type='color' value={customTheme.bgSecondary} sx='cursor:pointer' p='0' border='none' mb='0' h='50px' w='54px'
              onChange={(e: any) => debounceSetCustomTheme({ ...customTheme, bgSecondary: e.target.value })} />
            <Box bg={customTheme.bgSecondary} display='flex' alignitems='center' w='100%' h='42px'>
              <H6 ml='12px' color={customTheme.fontColorBg}>{customTheme.bgSecondary}</H6>
            </Box>
          </Box>
        </Col>
        <Col size={2}>
          <Button mb='20px' onClick={() => Theme.setCustomTheme(customTheme)}>Apply settings</Button>
        </Col>
      </Row>
      <Separate mt='20px' />
      <Row>
        <Col size={10}>
          <ThemeProvider theme={customTheme}>
            <Box>
            <BtnModern hover='victoria left'>btn modern</BtnModern>   
            <BtnModern hover='victoria right'>btn modern</BtnModern>
            <BtnModern hover='victoria horizontal'>btn modern</BtnModern>
            <BtnModern hover='victoria vertical'>btn modern</BtnModern>
            </Box>
          </ThemeProvider>
        </Col>
        <Col size={2}>
          <H6 fs='18px' mt='10px'>
            primary: '{customTheme.primary}',
          </H6>
          <H6 fs='18px' mt='10px'>
            fontPrimary: '{customTheme.fontPrimary}',
          </H6>
          <H6 fs='18px' mt='10px'>
            secondary: '{customTheme.secondary}',
          </H6>
          <H6 fs='18px' mt='10px'>
            fontSecondary: '{customTheme.fontSecondary}',
          </H6>
          <H6 fs='18px' mt='10px'>
            fontColorBg: '{customTheme.fontColorBg}',
          </H6>
          <H6 fs='18px' mt='10px'>
            bgPrimary: '{customTheme.bgPrimary}',
          </H6>
          <H6 fs='18px' mt='10px'>
            bgSecondary: '{customTheme.bgSecondary}',
          </H6>
          <H6 fs='18px' mt='10px'>
            bgAccent: '{customTheme.bgAccent}',
          </H6>
        </Col>
      </Row>
    </>
  )
})
export default Customizer