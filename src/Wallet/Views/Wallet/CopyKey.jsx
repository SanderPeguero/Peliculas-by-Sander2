import { activeTestAccount } from '../../utils/CreatePair'
import {
    Stack,
    Alert,
    AlertIcon,
    Text,
    Box,
    Button,
    useClipboard,
    Input,
    InputGroup,
    InputRightElement,
    useToast
} from '@chakra-ui/core'

const CopyKey = ({ publicKey, secret, setKeyCopied, resetAccount })  => {
    //Este elemento sirve para crear notificaciones
    //Checar los docs en https://chackra-ui.com/toast
    const toast = useToast()

    //Esta funcion nos ayudara a copiar usando el portapapeles
    //Checar los docs en https://chackra-ui.com/useClipboard
    const { onCopy, hasCopied } = useClipboard(secret)

    //Funcion para pasar el estado a copiado y avanzar a la vista principal
    const handleCopied = async () => {
        
        localStorage.setItem("keyCopied", true)
        
        //Activamos la cuenta para que pueda funcionar, y tomamos el hash
        const { hash } = await activeTestAccount(publicKey)

        //Notificamos al usuario
        toast({
            title: "Cuenta Creada y Fondeada",
            description: `Hash de la transacción: ${hash}`,
            status: "success",
            duration: 9000,
            isClosable: true
        })

        //Avanzamos de vista para
        setKeyCopied(true)
    }

    return (
        <Box borderWidth="1px" p={6}>
            <Stack width="100%" maxWidth="48rem" justifyContent="center">
                
                <Alert status="error">
                    <AlertIcon/>
                    <Text>
                        Antes de continuar, guarda tu Secret en un lugar privado, de lo
                        contrario, no podras volver a tu cuenta
                    </Text>
                </Alert>

                <InputGroup>
                    <Input readonly pr="4.5rem" value={secret}/>
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={onCopy}>
                            {hasCopied ? "Copiado" : "Copiar"}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Box display="flex" justifyContent="space-between">
                    <Button onClick={resetAccount}>Regresar</Button>
                    <Button onClick={handleCopied} variantColor="blue">Copiado</Button>
                </Box>

            </Stack>
        </Box>
    )
}

export default CopyKey