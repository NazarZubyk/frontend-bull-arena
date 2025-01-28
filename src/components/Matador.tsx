import { useEffect, useRef, useState } from "react"

const audio = 
            [
                new Audio('src/assets/suonds/mixkit-football-team-applause-509.wav'),
                new Audio('src/assets/suonds/mixkit-cartoon-monkey-applause-103.wav'),
                new Audio('src/assets/suonds/mixkit-football-team-applause-509.wav'),
                new Audio('src/assets/suonds/mixkit-one-man-clapping-482.wav'),
            ]
        

export const Matador = ({applause, setMatarodPosition, matadorPosition}) =>{
    const [shouldRerender, setShouldRerender] = useState(false);
    const loggedRef = useRef(false)
    const previousApplaus = useRef(applause)

    useEffect(() => {

        

        if(previousApplaus.current !== 3 && previousApplaus.current === applause){
            
            audio[applause].play();
            previousApplaus.current = applause;
        }else if (previousApplaus.current === 3 && previousApplaus.current === applause){
            
            audio[applause].play();
            setShouldRerender(true);
        }
        
    }, [applause]);

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
    

    
     
    return <div>
        <img 
            src={`src/assets/images/bullfighter-matador-bullfighting-png-1797169806.png`} 
            alt="matador" 
            style={{ width: 200, height: 200 }} 
        />
    </div>
}