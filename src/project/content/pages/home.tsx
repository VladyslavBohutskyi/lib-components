import { ThemeProvider } from 'styled-components'
import { defaultTheme, homeTheme } from '../../../my-lib/theme/default-theme'
import { Avatar } from '../../../my-lib/components/image'
import { Row } from '../../../my-lib/layout'
import * as T from '../../../my-lib/components/typography'


const Home = () => {
  return (
    <>
      <T.Text as='h1' fw='900'>
        Home page
      </T.Text>
      <T.Text as='span' color='red'>
        Home page
      </T.Text>
    </>
  )
}
export default Home