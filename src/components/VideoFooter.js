import React from 'react'
import './VideoFooter.css' 
import MusicNoteIcon from '@material-ui/icons/MusicNote'; 
import Marquee from "react-fast-marquee";

const VideoFooter = () => {
    return (
        <div className="videoFooter"> 
            <div className="videoFooter__text"> 
                <h3> @Kemsguy7</h3> 
                <p> Home PC Setup </p>
                <div className="videoFooter__ticker"> 
                    <MusicNoteIcon className="videoFooter__icon" />
                    <p> Music: Chill Vibes </p>
                    <Marquee>
                        <p>I am a Windows PC</p>
                    </Marquee>
                   
                </div>
            </div>
            <img className="videoFooter__record" src="https://static.
thenounproject.com/png/934821-200.png" alt="video footer" />
        </div>
    )
}

export default VideoFooter