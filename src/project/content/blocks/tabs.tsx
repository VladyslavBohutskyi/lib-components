import { Tab, Tabs, TabsContent, TabsWrapper } from '../../../my-lib/blocks/tabs'
import { useState } from 'react'


const BlocksTabs = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const dataTabs = [
    {
      tab: 'tab 0',
      content: 'Lorem ipsum 0000 consectetur adipisicing elit Nobis, sint harum aliquam incidunt maxime quam! Ut at quis ipsa voluptates.'
    },
    {
      tab: 'tab 1',
      content: 'Lorem ipsum 1111 consectetur adipisicing elit Nobis, sint harum aliquam incidunt maxime quam! Ut at quis ipsa voluptates.'
    },
    {
      tab: 'tab 2',
      content: 'Lorem ipsum 2222 consectetur adipisicing elit Nobis, sint harum aliquam incidunt maxime quam! Ut at quis ipsa voluptates.'
    },
    {
      tab: 'tab 3',
      content: 'Lorem ipsum 3333 consectetur adipisicing elit Nobis, sint harum aliquam incidunt maxime quam! Ut at quis ipsa voluptates.'
    },
  ]

  return (
    <TabsWrapper maxW='600px' m='auto' bg='white' mt='30px'>
      <Tabs sx='text-transform: uppercase;' >
        {
          dataTabs.map((e, index) => (
            tabIndex === index
              ?
              <Tab key={index} onClick={() => setTabIndex(index)}
                  tabs='classic' active='true'>
                {e.tab}
              </Tab>
              :
              <Tab tabs='classic' key={index} onClick={() => setTabIndex(index)}
              >
                {e.tab}
              </Tab>
          ))
        }
      </Tabs>
      {
        dataTabs.map((e, index) => (
          tabIndex === index
            ?
            <TabsContent p='20px' key={index}>
              {e.content}
            </TabsContent>
            :
            false
        ))
      }
    </TabsWrapper>
  )
}


export default BlocksTabs