import { useState } from 'react'
import CopyKey from './CopyKey'
import Start from '../Start'
import Main from '../Main/Main'

const Wallet = () => {

    //Valores de las llaves
    const [secret, setSecret] = useState(localStorage.secret)
    const [publicKey, setPublicKey] = useState(localStorage.publicKey)

    //Bandera para checar si ya copiaron la llave privada
    const [isKeyCopied, setKeyCopied] = useState(localStorage.keyCopied)

    //Funcion para salir de la cuenta del
    const resetAccount = () => {
        //Al salir de la cuenta, removemos todos los datos de sesion
        localStorage.removeItem("keyCopied")
        localStorage.removeItem("publicKey")
        localStorage.removeItem("secret")

        //Con esto mandamos al usuario a la vista de inicio
        setKeyCopied(undefined)
        setSecret(undefined)
        setPublicKey(undefined)
    }

    //Al recien iniciar la aplicacion, es necesario pedisle que cree una cuenta
    if(!secret || !publicKey) {
        //En la vista de inicio, vamos a necesitar acceso a los setters
        //para avanzar a las siguientes vistas
        return(
            <Start
                setSecret={setSecret}
                setPublicKey={setPublicKey}
                setKeyCopied={setKeyCopied}
            />
        )
        //Una vez creada hay qaue pedirle que guarde su llave privada para que pueda entrar en el futuro
    }else if(!isKeyCopied){
        //En la vista de copy necesitamos el Secret para mostrarlo al usuario,
        //ademas, utilizaremos la llave publica para fondear la cuenta.
        //El setter sera para avanzar a la siguiente vista
        //y el reset para regresar al inicio

        return(
            <CopyKey
                secret={secret}
                publicKey={publicKey}
                setKeyCopied={setKeyCopied}
                resetAccount={resetAccount}
            />
        )

    }

    //Si ya tiene sus llaves, y ya copio el secret, iniciamos el wallet
    return (
        <Main 
            secret={secret}
            publicKey={publicKey}
            resetAccount={resetAccount}
        />
    )
}

export default Wallet