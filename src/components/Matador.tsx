import { useEffect, useRef } from "react"

export const Matador = ({applause, setMatarodPosition, matadorPosition}) =>{

    const loggedRef = useRef(false)


    useEffect(() => {

        const handleBullRun = (e)=>{
       
            if(matadorPosition === e.detail.position){
                let newPosition = e.detail.position + 1
                if(newPosition > 8){
                    newPosition = 0
                } 
                setMatarodPosition(newPosition)
                if(!loggedRef.current){
                    console.log(`from ${e.detail.position} to ${newPosition}`);
                    loggedRef.current = true;
                }else{
                    loggedRef.current = false
                }
            }
        }

        document.addEventListener('bullRun', handleBullRun)

        return () => {
            document.removeEventListener('bullRun', handleBullRun)
        }
    }, [])
    

    
    return <div>i am matador</div>
}