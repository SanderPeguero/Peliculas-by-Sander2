import { ThemeProvider, CSSReset, Box} from "@chakra-ui/core"
import Wallet from './Views/Wallet/Wallet'

const App = () => {

  return (

    <ThemeProvider>
      <div style={{
        backgroundColor: '#181818',
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.25s',
        color: 'white',
        // -webkit-transition: all 0.15s;
        padding: '0'
      }}>
        <CSSReset/>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          // padding={30}
          >

          <Wallet/>

        </Box>
      </div>
    </ThemeProvider>

  )
}

export default App
