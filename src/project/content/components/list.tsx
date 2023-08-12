import styled from 'styled-components';
import { List, ListItem } from '../../../my-lib/components/list';




const ComponentList = () => {
  return (
    <List fs='20px' mt='30xp' p='20px' shadow='variant-1' >
      <ListItem beforeStyle='circle'>Lorem, ipsum.</ListItem>
      <ListItem beforeStyle='square'>Lorem, ipsum.</ListItem>
      <ListItem beforeStyle='horizontal'>Lorem, ipsum.</ListItem>
      <ListItem beforeStyle='vertical' beforeLeft='-5px'>Lorem, ipsum.</ListItem>
    </List>
  )
}

export default ComponentList




// import { useState } from 'react'
// import { List2, ListItem2 } from '../../../my-lib/components/list2'


// const ComponentsList = () => {
//   const [activeLi, setActiveLi] = useState(0)
//   const list = [
//     {
//       text: 'BMW 5 series',
//       icon: '$$'
//     },
//     {
//       text: 'Mercedes C class',
//       icon: '&&'
//     },
//     {
//       text: 'Audi A series',
//       icon: '%^'
//     },
//     {
//       text: 'Volvo S series',
//       icon: '*()'
//     },
//   ]
//   return (
//     <>
//       <List >
//         {
//           list.map((e, i) => (
//             activeLi == i
//             ?
//             <ListItem p='5px' m='0px' before={e.icon}
//             key={i} onClick={() => setActiveLi(i)} sx='cursor: pointer;' active='right'>{e.text}</ListItem>
//             :
//             <ListItem p='10px' m='0px' before={e.icon}
//             key={i} onClick={() => setActiveLi(i)} sx='cursor: pointer;'>{e.text}</ListItem>
//           ))
//         }
//       </List>


//       <List sx='font-size: 40px;'>
//         <ListItem active='right' p='5px' activeColor='red' >Lorem, ipsum.</ListItem>
//         <ListItem p='10px'>Lorem, ipsum dolor.</ListItem>
//         <ListItem p='8px' >Lorem, ipsum. bla</ListItem>
//         <ListItem p='8px'>White black yellow</ListItem>
//       </List>

//       <List customstyle='$'>
//         Title list
//         <ListItem active='left'>Lorem, ipsum.</ListItem>
//         <ListItem>Lorem, ipsum.</ListItem>
//         <ListItem>Lorem, ipsum dolor.</ListItem>
//         <ListItem>Lorem ipsum dolor sit.</ListItem>
//       </List>
//     </>
//   )
// }


// export default ComponentsList