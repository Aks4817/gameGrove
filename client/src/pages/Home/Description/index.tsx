import rawg from 'assets/images/RAWG.png'
import { ReactComponent as Github } from 'assets/images/github.svg'
import {
  StyledDescription,
  Pitch,
  Links,
  Page,
  Link,
  RAWGLogo,
  EnjoyBlock,
  Header,
} from 'pages/Home/Description/styles'

const Description = () => (
  <StyledDescription>
    <Pitch>
      <Header>Game Harbor</Header>
      <Page>
        You can browse any games here and all of the prices are generated to imitate a real game shop.
      </Page>
      <EnjoyBlock>
        <p>Enjoy</p> <p></p>
      </EnjoyBlock>
    </Pitch>
    <Links>
      <Link href="https://rawg.io/apidocs" target="_blank">
        <RAWGLogo src={rawg} alt="RAWG logo" />
        RAWG API
      </Link>
    </Links>
  </StyledDescription>
)

export default Description
