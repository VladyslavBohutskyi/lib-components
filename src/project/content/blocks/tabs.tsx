import * as T from '../../../my-lib/blocks/tabs'
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
    <T.TabsWrapper maxW='600px' m='auto' bg='white' mt='30px'>
      <T.Tabs sx='text-transform: uppercase;' >
        {
          dataTabs.map((e, index) => (
            tabIndex === index
              ?
              <T.Tab key={index} onClick={() => setTabIndex(index)}
                  tabs='classic' active='true'>
                {e.tab}
              </T.Tab>
              :
              <T.Tab tabs='classic' key={index} onClick={() => setTabIndex(index)}
              >
                {e.tab}
              </T.Tab>
          ))
        }
      </T.Tabs>
      {
        dataTabs.map((e, index) => (
          tabIndex === index
            ?
            <T.TabsContent p='20px' key={index}>
              {e.content}
            </T.TabsContent>
            :
            false
        ))
      }
    </T.TabsWrapper>
  )
}


export default BlocksTabs