import { Button } from "../../../my-lib/components/buttons"
import { Form, Input, Textarea } from "../../../my-lib/components/form"
import { List, ListItem } from "../../../my-lib/components/list"
import { Box, Container } from "../../../my-lib/layout"

const ComponentsForm = () => {
  return (
    <Container mt="35px">
      <Form maxW='600px' m='auto' shadow="true" minH="200px" br="6px" p="30px">
        <Box display='flex'>
          <Input type="text" placeholder="Fill name" w="49%" />
          <Input type="text" placeholder="Fill lust name" w="49%" />
        </Box>
        <Input type="email" placeholder="Fill email" />
        <Textarea placeholder="Massege" h="150px" />
        <Button type="submit" p="10px 35px" mt="20px" hover='reverseBorder'>Send</Button>
        <select id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </Form>

      <List customstyle={'"*"'} styletype='lower-greek'>
        Title list
        <ListItem>Lorem, ipsum.</ListItem>
        <ListItem>Lorem, ipsum.</ListItem>
        <ListItem>Lorem, ipsum dolor.</ListItem>
        <ListItem>Lorem ipsum dolor sit.</ListItem>
      </List>
    </Container>
  )
}


export default ComponentsForm