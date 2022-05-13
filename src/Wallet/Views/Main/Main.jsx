import { useState, useEffect } from 'react'
import { loadAccount } from '../../utils/LoadAccount'
import AccountData from './AccountData'
import SendTransaction from '../Main/SendTransaction'
import BalanceChecker from './BalanceChecker'
import { Box, Stack, Text, Divider } from '@chakra-ui/core'
import { Button } from '@mui/material'
import '../App.css'

const Main = ({ publicKey, secret, resetAccount }) => {
    //Estado de la aplicacion con cuenta
    const [account, setAccount] = useState(undefined)

    //Funcion para actualizar la wallet
    const updateAccount = () => {
        const getData = async () => {
            const account = await loadAccount(publicKey);
            setAccount(account)
        }

        getData()
    }

    //Use Effect se ejecuta solo cuando abre la vista principal
    //Por lo que se usara para cargar la cuenta al inicio
    useEffect(updateAccount, [publicKey])

    return (
        // <Box
        //     display="flex"
        //     justifyContent="center"
        //     width="100%"
        //     maxWidth="48rem"
        //     borderWidth="1px"
        //     p={6}
        // >
        
        <Stack width="100%" maxWidth="48rem" justifyContent="center">
            <AccountData account={account} publicKey={publicKey}/>
            <SendTransaction secret={secret} updateAccount={updateAccount}/>
            {/* <BalanceChecker/> */}
            <Button onClick={resetAccount} variant="outlined" color="error" style={{ marginTop:'1rem'}}>
                Cerrar Cuenta
            </Button>
        </Stack>

        // </Box>
    )
}

export default Main