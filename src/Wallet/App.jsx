import { ThemeProvider, CSSReset, Box} from "@chakra-ui/core"
import Wallet from './Views/Wallet/Wallet'

const App = () => {

  return (

    <ThemeProvider>
      <div className="wallet">
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
