import React, { useState } from 'react' 
import './VideoSidebar.css' 
import FavoriteIcon from '@material-ui/icons/Favorite'; 
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message'; 
import ShareIcon from '@material-ui/icons/Share'; 

const VideoSidebar = () => { 
    const [liked, setLiked] = useState(false) 
    return (
        <div className="videoSidebar">  
            <div className="videoSidebar__button" > 
                { liked ? <FavoriteIcon fontSize="large" onClick={e => setLiked(false)}  /> : <FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)} /> }
                    <p> {liked ? 101 : 100 } </p>
            </div>
            <div className="videoSidebar_button">  
                <MessageIcon fontSize ="large" />
                <p> 345</p>
            </div>
            <div className="videoSidebar__button"> 
                <ShareIcon fontSize="large" /> 
                <p> 109 </p>
            </div>
        </div>
    )
}
export default VideoSidebar;