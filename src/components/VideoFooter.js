import React from 'react'
import './VideoFooter.css' 
import MusicNoteIcon from '@material-ui/icons/MusicNote'; 
import Marquee from "react-fast-marquee";

const VideoFooter = ({channel , description, song}) => {
    return (
        <div className="videoFooter"> 
            <div className="videoFooter__text"> 
                <h3> @{channel}</h3> 
                <p> {description} </p>
                <div className="videoFooter__ticker"> 
                    <MusicNoteIcon className="videoFooter__icon" />
                    <p> Music: Chill Vibes </p>
                    <Marquee>
                        <p> {song} </p>
                    </Marquee>
                   
                </div>
            </div>
            <img className="videoFooter__record" src="https://static.
thenounproject.com/png/934821-200.png" alt="video footer" />
        </div>
    )
}

export default VideoFooter