import { useState } from 'react'


function Hero ({welcomeMessage}){
console.log(welcomeMessage)
    return (
        <div>
            {/* Remember that the welcome message is being passed in as an object through the component Hero, so we have to specificy what attribute we are trying to access even though it looks a little silly*/}
            <p>{welcomeMessage}</p>
        </div>
    )
}

export default Hero;