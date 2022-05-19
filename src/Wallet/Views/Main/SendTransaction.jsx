import { useState } from 'react'
import { sendTransaction } from '../../utils/SendTransaction'
import {
    Text,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    InputGroup,
    Input,
    InputLeftAddon,
    Divider,
    useToast,
} from '@chakra-ui/core'
import React from 'react'
import { Button, Alert, AlertTitle } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

import { SnackbarProvider, useSnackbar } from 'notistack'

function MyApp() {
}

const SendTransaction = ({ secret, updateAccount }) => {

    const { enqueueSnackbar } = useSnackbar()
    
    // const handleClick = () => {
    //   enqueueSnackbar('I love snacks.')
    // }
    
    const handleClickVariant = (prop) => {
      // variant could be success, error, warning, info, or default
      enqueueSnackbar(prop, 'success')
    }
    
    // return (
    //   <React.Fragment>
    //     {/* <Button onClick={handleClick}>Show snackbar</Button> */}
    //     <Button onClick={handleClickVariant('success')}>Show success snackbar</Button>
    //   </React.Fragment>
    // )
    // }
    
    // Este elemento sirve para crear notificaciones
    // Checar los docs en https://chakra-ui.com/toast
    // const toast = useToast();

    //Direccion de destino y cantidades
    const [destination, setDestination] = useState('')
    const [amount, setAmount] = useState()

    // const toast = () => { 
    //     return(
    //         <Alert severity="success">
    //             <AlertTitle>Success</AlertTitle>
    //             This is a success alert — <strong>check it out!</strong>
    //         </Alert>
    //     )
    // }

    //Funcion para enviar XLM a un destinatario
    const sendXLM = async () => {
        
        // toast() 
        //validamos los inputs
        if(destination.length === 56 && amount > 0) {
            try{
                //Ejecutamos la transaccion
                const result = await sendTransaction(
                    secret,
                    destination,
                    amount.toString()
                )
                
                handleClickVariant(`Se han enviado ${amount} XCN`)
                // toast({
                //     title: `Se han enviado ${amount} XCN`,
                //     description: `Hash de la transaccion: ${result.hash}`,
                //     status: "success",
                //     duration: 900000,
                //     isClosable: false
                // })

                // toast()

                
                //Actualizamos la cuenta para que se refleje nuestro balance
                updateAccount()

            }catch(err){
                //Si hay un error, lo mostramos
                toast({
                    title: "Ha ocurrido un error",
                    description: err.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true
                })

            }
        }else{
            //Si la cuenta es invalida o se intenta enviar menos de 0, hay que notificar
            toast({
                title:"Datos Invalidos",
                description: "Asegurate de colocar una direccion correcta y enviar una cantidad valida",
                status: "error",
                duration: 9000,
                isClosable: true
            })
        }
    }

    return (
        <>

            {/* <SnackbarProvider maxSnack={3}>
                <MyApp />
            </SnackbarProvider> */}

            <React.Fragment>
                {/* <Button onClick={handleClick}>Show snackbar</Button> */}
                {/* <Button onClick={handleClickVariant()}>Show success snackbar</Button> */}

            <div style={{
                marginTop:'1rem',
                display:'flex',
                flexDirection:'column',
                rowGap:'21px',
                alignItems:'flex-start',
                backgroundColor:'#252329',
                padding:'43px 40px',
                borderRadius:'8px'
            }}>

                <h2 style={{
                    color:'white',
                    fontFamily:'sans-serif',
                    fontSize:'1.5rem'
                }}>
                    Enviar
                </h2>

                <NumberInput
                    step="1"
                    mt={2}
                    value={amount}
                    onChange={value => setAmount(value)}
                    >
                    {/* <InputLeftAddon>XLM</InputLeftAddon> */}
                    <p style={{ marginRight:'1rem', alignSelf:'end'}}>XCN</p>
                    {/* <NumberInputField roundLeft="0"/> */}
                    {/* <input style={{color:'black',backgroundColor:'none'}} value={amount} onChange={value => setAmount(value)} /> */}
                    {/* <Input style={{color:'black', height:'auto'}} onChange={value => setAmount(value)} /> */}
                    {/* <Input></Input> */}
                    <NumberInputField style={{ color:'white', height:'auto', backgroundColor:'unset'}}/>
                    <NumberInputStepper>
                        <NumberIncrementStepper style={{color:'black', border:'black', backgroundColor:'#9b9b9e'}}/>
                        <NumberDecrementStepper style={{color:'black', border:'black', backgroundColor:'#9b9b9e'}}/>
                    </NumberInputStepper>
                </NumberInput>

                <input value={destination} placeholder="Destino" onChange={({ target: { value } }) => setDestination(value)} style={{
                    borderBottom:'ridge',
                    outline:'none',
                    backgroundColor:'unset',
                    height: 'auto',
                    width:'31vw',
                    color:'white',
                    marginRight: '10px'
                }}/>   

                <Button variant="contained" endIcon={<SendIcon />} style={({ backgroundColor: '#5f5f5f'})} onClick={sendXLM}>
                    Send
                </Button>

            </div>
            
            </React.Fragment>
            
        </>
    )
}

export default SendTransaction