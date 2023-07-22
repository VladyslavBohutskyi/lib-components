import { Tab, Tabs, TabsContent, TabsWrapper } from "../../../my-lib/blocks/tabs"
import { useState } from 'react'
const Sections = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const dataTabs = [
    {
      tab: 0,
      content: 'Lorem ipsum 0000 consectetur adipisicing elit Nobis, sint harum aliquam incidunt maxime quam! Ut at quis ipsa voluptates.'
    },
    {
      tab: 1,
      content: 'Lorem ipsum 1111 consectetur adipisicing elit Nobis, sint harum aliquam incidunt maxime quam! Ut at quis ipsa voluptates.'
    },
    {
      tab: 2,
      content: 'Lorem ipsum 2222 consectetur adipisicing elit Nobis, sint harum aliquam incidunt maxime quam! Ut at quis ipsa voluptates.'
    },
    {
      tab: 3,
      content: 'Lorem ipsum 3333 consectetur adipisicing elit Nobis, sint harum aliquam incidunt maxime quam! Ut at quis ipsa voluptates.'
    },
  ]

  console.log(tabIndex);


  return (
    <TabsWrapper mw="600px" m="auto" bg="grey" p="20px" mt="30px" shadow="true">
      <Tabs p="10px" sx="border-bottom: 2px solid black; text-transform: uppercase" mb="20px">
        {
          dataTabs.map((e, index) => (
            <Tab key={index} p="10px 20px" onClick={() => setTabIndex(index)}>{e.tab}</Tab>
          ))
        }
      </Tabs>
      {
        dataTabs.map((e, index) => (
          tabIndex === index
            ?
            <TabsContent p="20px" >
              {e.content}
            </TabsContent>
            :
            false
        ))
      }
    </TabsWrapper>
  )
}


export default Sections