import { Text, InputGroup, InputRightElement, InputLeftAddon, InputRightAddon, useClipboard } from '@chakra-ui/react'
import {Button, Input } from '@mui/material'
import {useState} from 'react'

const AccountData = ({ publicKey, account }) => {
    //Esta funcion nos ayudara a copiar usando el portapapeles
    //Checar los docs en https://chakra-ui.com/useClipboard
    const { onCopy, hasCopied } = useClipboard(publicKey)

    return (
        <>
        <div style={{display:'flex',flexDirection:'column',rowGap:'21px',alignItems:'flex-start',backgroundColor:'#252329', padding:'43px 40px', borderRadius:'8px', marginTop:'3rem'}}>

            <h2 style={{color:'white',fontFamily:'sans-serif',fontSize:'1.5rem'}}>
                Llave Publica
            </h2>
        
            <div style={{ justifyContent: 'space-between'}}>
                <Input readOnly  style={({ width:'31vw', color:'white', marginRight: '10px'})} value={publicKey}/>   
                {/* <p style={{marginTop:'6px', marginRight:'10px'}}>{publicKey}</p>  */}
                <Button h="1.75rem" size="sm" onClick={onCopy}>
                    {hasCopied ? "Copiado" : "Copiar"}
                </Button>
            </div>

            <h2 style={{color:'white',fontFamily:'sans-serif',fontSize:'1.5rem', marginTop: '3rem'}}>
                Balance
            </h2>

            {account?.balances.map(({ balance, asset_type}, index ) => (

                <p style={{fontSize:'2rem'}}>
                    {balance} XLM
                </p>    

            ))}

        </div>
        </>
    )


//     const [roomid,setRoomid]=useState("")
//     // function handleRoomID(){
//     //     props.roomfunc(roomid)
//     // }
//     function handleGenerate(){
//         const random=new Date().getHours().toString()+new Date().getMinutes().toString()+new Date().getSeconds().toString()+props.name.slice(0,Math.floor(Math.random()*4))+props.photo.slice(9,18).toString()
//         setRoomid(random)
//     }
//   return (
//     <div style={{display:'flex',flexDirection:'column',rowGap:'21px',alignItems:'center',backgroundColor:'#252329', padding:'43px 56px', borderRadius:'8px',width:'422px'}}>
        
//         <div className="usernameandall">
//         {/* <Avatar sx={{width:'115px',height:'115px'}} alt={props.name} src={props.photo} /> */}
//         <h2 style={{margin:'auto',marginTop:'20px',color:'white',fontFamily:'sans-serif',marginBottom:'10px',fontWeight:'400'}}>Cuenta</h2>
//         </div>

//         <Input colorSecondary="black" placeholder="Enter a room Id" sx={{width:'280px',color:'white'}} value={roomid}
//           onChange={(e)=>{setRoomid(e.target.value)}} />
//         <Button sx={{fontWeight:'bold'}} onClick={()=>{handleGenerate()}}>Generate one</Button>
//         {
//             roomid?(<Button onClick={()=>{handleRoomID()}} sx={{width:"179px",margin:'auto',fontWeight:'bold'}} variant="outlined">Join Room </Button>):(<Button disabled sx={{width:"179px",margin:'auto',fontWeight:'bold'}} variant="outlined">Join Room </Button>)
//         }
       
//     </div>
//   )

}

export default AccountData