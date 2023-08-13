import { Button } from '../../../my-lib/components/buttons';
import { Form, Input, Textarea } from '../../../my-lib/components/form';
import { Separate } from '../../../my-lib/components/separate';
import { H6, P } from '../../../my-lib/components/typography';
import { Box, Col, Container, Row } from '../../../my-lib/layout';


const ComponentsForm = () => {
  return (
    <>
    <Box sx='width:1px' bg='black'></Box>
      <Row>
        <Col size={6} spacing='15px'>
          <Box mb='25px'>
            <H6 mb='10px'>Input Default</H6>
            <Input type="text" placeholder="Fill name" />
          </Box>
          <Box mb='25px'>
            <H6 mb='10px'>Input Examples</H6>
            <Input type="text" placeholder="Fill name" />
            <Box bg="#FBDDFF" p="14px 20px" color="#655DBB" mb='10px' >
              <P ls="0.4px" lh='1.6' fw="500">bg="#02AAD6" hoverbg="#3DD4C3" textTransform="uppercase" ls="1px" minW="200px" shadow='variant-2' shadowcolor="#02AAD6"</P>
            </Box>
            <Separate />
            <Input type="text" placeholder="Fill name" />
            <Box bg="#FBDDFF" p="14px 20px" color="#655DBB" mb='10px' >
              <P ls="0.4px" lh='1.6' fw="500">bg="#02AAD6" hoverbg="#3DD4C3" textTransform="uppercase" ls="1px" minW="200px" shadow='variant-2' shadowcolor="#02AAD6"</P>
            </Box>
            <Separate />
            <Input type="text" placeholder="Fill name" />
            <Box bg="#FBDDFF" p="14px 20px" color="#655DBB" mb='10px' >
              <P ls="0.4px" lh='1.6' fw="500">bg="#02AAD6" hoverbg="#3DD4C3" textTransform="uppercase" ls="1px" minW="200px" shadow='variant-2' shadowcolor="#02AAD6"</P>
            </Box>
            <Separate />
            <Input type="text" placeholder="Fill name" />
            <Box bg="#FBDDFF" p="14px 20px" color="#655DBB" mb='10px' >
              <P ls="0.4px" lh='1.6' fw="500">bg="#02AAD6" hoverbg="#3DD4C3" textTransform="uppercase" ls="1px" minW="200px" shadow='variant-2' shadowcolor="#02AAD6"</P>
            </Box>
          </Box>
        </Col>
        <Box sx='width:1px' bg='black'></Box>
        <Col size={6} spacing='15px'>
          <Box mb='25px'>
            <H6 mb='10px'>Textarea Default</H6>
            <Textarea placeholder="Massege" />
          </Box>
          <Box mb='25px'>
            <H6 mb='10px'>Input Examples</H6>
            <Textarea placeholder="Massege" />
            <Box bg="#FBDDFF" p="14px 20px" color="#655DBB" mb='10px' >
              <P ls="0.4px" lh='1.6' fw="500">bg="#02AAD6" hoverbg="#3DD4C3" textTransform="uppercase" ls="1px" minW="200px" shadow='variant-2' shadowcolor="#02AAD6"</P>
            </Box>
            <Separate />
            <Textarea placeholder="Massege" />
            <Box bg="#FBDDFF" p="14px 20px" color="#655DBB" mb='10px' >
              <P ls="0.4px" lh='1.6' fw="500">bg="#02AAD6" hoverbg="#3DD4C3" textTransform="uppercase" ls="1px" minW="200px" shadow='variant-2' shadowcolor="#02AAD6"</P>
            </Box>
          </Box>
        </Col>
      </Row>


      <Container mt='435px' mb='35px'>
        <Form maxW='600px' m='auto' shadow='variant-6' br='6px' p='30px'>
          <Box display='flex' justifycontent='space-between'>
            <Input type="text" w={'49%'} placeholder="Fill name" />
            <Input type="text" w={'49%'} placeholder="Fill lust name" />
          </Box>
          <Input type="email" placeholder="Fill email" />
          <Textarea placeholder="Massege" h='150px' />
          <Button type='submit' p='10px 70px' mt='20px' hover={'reverseBorder'}>Send</Button>
        </Form>
      </Container>
    </>
  )
}
export default ComponentsForm