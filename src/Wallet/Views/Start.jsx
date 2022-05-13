import { useState } from "react"
import StellarSdk from 'stellar-sdk'
import { Heading, Text, InputGroup, Input, useToast } from '@chakra-ui/core'
import { createTestAccount } from "../utils/CreatePair"
import ChatIcon from '../../Peliculas2/Images/Logo.png';
import { Button } from '@mui/material'

const Start = ({ setPublicKey, setSecret, setKeyCopied }) => {
    const loginstyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '492px',
        margin: 'auto',
        justifyContent: 'center',
        alignItems:'center',
        height: 'fit-content',
        padding:'62px 21px',
        backgroundColor:'#252329',
        borderRadius:'8px',
        textAlign:'center'
    }
    //Este elemento sirve para crear notificaciones
    //Checar los docs en https://chakra-ui.com/toast
    const toast = useToast()

    //Valor del secret a importar
    const [secretToImport, setSecretToImport] = useState('')

    //Funcion para crear una cuenta
    const createAccount = () => {
        
        const keys = createTestAccount()

        //Guardamos las llaves en la sesion
        localStorage.setItem('secret', keys.secret)
        localStorage.setItem('publicKey', keys.publicKey)
        
        //Actualizamos la vista y pasamos a copy
        setPublicKey(keys.publicKey)
        setSecret(keys.secret)

    }

    // Funcion para importar una cuenta desde el secret
    const importAccount = () => {

        //Todas las secret keys tienen una longitud de 56 caracteres
        if(secretToImport.length === 56){
            
            const sourceKeys = StellarSdk.Keypair.fromSecret(secretToImport)
            
            //Al importar una cuenta, hay que guardar todos los flags en localStorage para mantener la sesion
            localStorage.setItem('secret', secretToImport)
            localStorage.setItem('publicKey', sourceKeys.publicKey())
            localStorage.setItem('keyCopied', true)

            //Con esto actualizamos correctamente la vista
            setPublicKey(sourceKeys.publicKey())
            setSecret(secretToImport)
            setKeyCopied(true)

        }else {
            toast({
                title: 'Error',
                description: 'Asegure que su Secret Key es correcta',
                status: 'error',
                duration: 9000,
                isClosable: true

            })
        }
    }


    return (
        <>
        {/* <Heading>Bienvenido a tu Wallet de Stellar</Heading>
        <Text fontSize='xl'>
            Crea tu cuenta de Stellar de forma rapida y sencilla
        </Text>

        <Button onClick={createAccount} size="lg" variantColor='blue' mt='24px'>
            Crear Cuenta
        </Button>
        <Text mt={10}>O importa tu cuenta con tu Secret Key</Text>
        <InputGroup>
            <Input 
                onChange={({ target: {value}}) => setSecretToImport(value)}
                value={secretToImport}
                placeholder='Secret Key'
                roundRight='0'
            />
            
        </InputGroup> */}
        <div className="App">
            <div className='login' style={loginstyle}>
                {/* <ChatIcon color="primary" sx={{ fontSize: 120 }} ></ChatIcon> */}
                <img src={ChatIcon} alt="" style={{ width: '5rem'}} />
                <p style={{margin:'15px 0',fontSize:'22px',fontWeight:'400',color:'white',width:"295px",textAlign:'center'}}>Wallet</p>
                <h2 style={{color:'white',fontWeight:'400', marginBottom:'1rem'}}>Accede a tu cuenta</h2>
                <input  style={({  borderBottom:'ridge', outline:'none', backgroundColor:'unset', height: 'auto', width:'20vw', color:'white', marginRight: '10px'})} value={secretToImport} placeholder="Llave Privada" onChange={({ target: {value}}) => setSecretToImport(value)}/>   

                <Button onClick={importAccount} variant='contained' color='success' style={{marginTop:'1.5rem'}}>
                    Importar
                </Button>

            </div>
        </div>
        </>
        
    )
}

export default Start