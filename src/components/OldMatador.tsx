import { Component, ReactNode } from "react";

const audio = 
            [
                new Audio('src/assets/suonds/mixkit-football-team-applause-509.wav'),
                new Audio('src/assets/suonds/mixkit-cartoon-monkey-applause-103.wav'),
                new Audio('src/assets/suonds/mixkit-football-team-applause-509.wav'),
                new Audio('src/assets/suonds/mixkit-one-man-clapping-482.wav'),
            ]

class OldMatadot extends Component{

    state={
        loggedRef: false,
        previousApplaus: this.props.applause,
    }


    handleBullRun = (e)=>{
       
        if(this.props.matadorPosition === e.detail.position){
            let newPosition = e.detail.position + 1
            if(newPosition > 8){
                newPosition = 0
            } 
            this.props.setMatarodPosition(newPosition)
            if(!this.state.loggedRef){
                console.log(`from ${e.detail.position} to ${newPosition}`);
                this.state.loggedRef = true;
            }else{
                this.state.loggedRef = false
            }
        }
    }

    componentDidMount(){
        document.addEventListener("bullRun", this.handleBullRun);
    }
    componentWillUnmount(): void {
        document.removeEventListener("bullRun", this.handleBullRun);
    }

    render() {
        const { applause} = this.props;
        if (this.state.previousApplaus !== 3 && this.state.previousApplaus === applause) {
            audio[applause].play();
            this.state.previousApplaus = applause;
          } else if (this.state.previousApplaus === 3 && this.state.previousApplaus === applause) {
            audio[applause].play();
            this.state.previousApplaus = applause;
          }

        return <div>
            <img 
                src={`src/assets/images/image.png`} 
                alt="matador" 
                style={{ width: 200, height: 200 }} 
            />
        </div>
    }
}

export default OldMatadot;