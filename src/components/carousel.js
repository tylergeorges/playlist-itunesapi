import { useState, useEffect } from "react"
import axios from "axios"

const Carousel = (props) =>{
    let [carousel, setCarousel] = useState(0)

    const handleCarousel = (e) =>{
        e.preventDefault()

        if(e.target.value === 'next' && carousel < props.playlists.length-1){

            setCarousel(carousel + 1)
        } else if(e.target.value === 'back' && carousel >= 0){
            setCarousel(carousel -1)
            // document.getElementById('art').classList.toggle('hide')
            if(carousel === 0){
                setCarousel(props.playlists.length-1)
                // document.getElementById('art').classList.toggle('hide')
            }
        } else{
            setCarousel(0)
        }
    }

    let url = props.playlists[carousel].artworkUrl100.toString();
    
    let showImg = url.replace(/100x100bb.jpg/, '512x512bb.jpg');
    console.log(props)
    return( 
        <div>
                <button onClick={handleCarousel} value='back'>-</button>
                {/* {<img src={showImg} className="carouselArt" id="art"/> } */}
                {props.playlists.map(songs =>{
                    return(
                        <div>
                            <img className="carouselArt" src={songs.artworkUrl100}/>
                        </div>
                    )
                })}
               
               <button onClick={handleCarousel} value="next">+</button>
                <p> {props.playlists[carousel].trackName}</p>
        </div>
    )
    }
    
export default Carousel