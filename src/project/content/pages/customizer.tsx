import { useState, useEffect } from 'react'
import { Button } from '../../../my-lib/components/buttons'
import { Input } from '../../../my-lib/components/form'
import { Theme } from '../../store/theme'
import { Box, Col, Row } from '../../../my-lib/layout'
import { H6 } from '../../../my-lib/components/typography'
import { observer } from 'mobx-react'

const Customizer = observer(() => {
  const [customTheme, setCustomTheme] = useState(Theme.currentTheme)

  useEffect(() => {
    setCustomTheme(Theme.currentTheme)
  }, [Theme.currentTheme])


  return (
    <>
      <Button mb='20px' onClick={() => Theme.setCustomTheme(customTheme)}>
        Apply
      </Button>

      <Row justifycontent='flex-start'>
        <Col size={3} mr='15px'>
          <H6>bg Primary</H6>
          <Box mt='10px' display='flex' alignitems='center'>
            <Input type='color' value={customTheme.bgPrimary} p='0' border='none' mb='0' h='50px' w='50px'
              placeholder='put bgPrimary'
              onChange={(e: any) => setCustomTheme({...customTheme, bgPrimary:e.target.value})} />

            <Box bg={customTheme.bgPrimary} display='flex' alignitems='center' w='100%' h='42px'>
              <H6 ml='20px' color={Theme.currentTheme.fontColorBg}>{customTheme.bgPrimary}</H6>
            </Box>
          </Box>
        </Col>
        <Col size={3} mr='15px'>
          <H6>bg Secondary</H6>
          <Box mt='10px' display='flex' alignitems='center'>
            <Input type='color' value={customTheme.bgSecondary} p='0' border='none' mb='0' h='50px' w='50px' placeholder='put bgPrimary' 
            onChange={(e: any) => setCustomTheme({...customTheme, bgSecondary:e.target.value})} />
            <Box bg={customTheme.bgSecondary} display='flex' alignitems='center' w='100%' h='42px'>
              <H6 ml='20px' color={Theme.currentTheme.fontColorBg}>{customTheme.bgSecondary}</H6>
            </Box>
          </Box>
        </Col>

      </Row>
    </>
  )
})


export default Customizer