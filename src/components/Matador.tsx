import { useEffect } from "react"

export const Matador = ({applause, setMatarodPosition, matadorPosition}) =>{



    useEffect(() => {

        const handleBullRun = (e)=>{
       
            if(matadorPosition === e.detail.position){
                console.log('i am matador')
                let newPosition = e.detail.position + 1
                if(newPosition > 8){
                    newPosition = 0
                } 
                setMatarodPosition(newPosition)
            }
        }

        document.addEventListener('bullRun', handleBullRun)

        return () => {
            document.removeEventListener('bullRun', handleBullRun)
        }
    }, [])
    

    
    return <div>i am matador</div>
}