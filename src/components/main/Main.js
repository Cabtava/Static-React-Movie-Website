import axios from 'axios'
import React, { useState, useEffect } from 'react'
import requests from '../../Request'
import DateData from './DateData'
import DateCard from './DateCard'
import { AiFillAudio } from 'react-icons/ai'
import { RiVoiceprintFill } from 'react-icons/ri'
import { GoPrimitiveDot } from 'react-icons/go'
import { BsFillPlayFill, BsThreeDots } from 'react-icons/bs'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'

import './MainStyles.css'

function Main() {
    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]
    /* Data import */
    const dataComp = DateData.map((data) => {
        return (
            
            <DateCard 
            key={data.id}
            day={data.day}
            month={data.month}
            row={data.row}
            />
        )
    })
    const dataRandom = dataComp[Math.floor(Math.random() * dataComp.length)]
    /* slider const start */
    const slides = [1,2,3,4,5,6,7,8,9]

    const slideLeft = () => {
        var slider = document.querySelector('.slider')
        slider.scrollLeft = slider.scrollLeft - 100;
        console.log('left')
    }

    const slideRight = () => {
        var slider = document.querySelector('.slider')
        slider.scrollLeft = slider.scrollLeft + 100;
        console.log('right')
    }

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) =>{
            setMovies(response.data.results)
        })
    }, [])
    console.log(movie)

  return (
    <main>
        <div className='image-container'> 
            <div className='overlay'></div>
            <img className='main-image' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        </div> 

        <div className='main_information-div'>
            <div className="poster_image-div">
                <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="/" />
            </div> 

            <div className='main_information-div-two'>
                <p className='date'>{movie?.release_date}</p>
                <h1 className='title'>{movie?.original_title}</h1>
                
                <div className='genre'>
                    <span>{movie?.original_language.toUpperCase()}</span>
                    <span className='dot'>&#183;</span>
                    <span> Popularity: {movie?.popularity.toFixed()}K</span>
                </div>
    
                <div className='overview_div'>
                    <p>{movie?.overview}</p>
                </div>

                <div className="imb_div">

                    <div className='imb_div-min'>
                        <AiFillAudio />
                        {movie?.vote_count}
                    </div>

                    <div className="imb_div-subtitle">
                        <RiVoiceprintFill />
                        <p>Subtitles</p>
                    </div>

                    <div className="imb_div-imb">
                        <GoPrimitiveDot className='dot-red ' />
                        <p>imb:</p>
                        {movie?.vote_average}
                    </div>
                </div>

                
                <div className="button_div">
                        <button className='button-one'>
                            <BsFillPlayFill className='button_icon-one'/>
                            Watch trailer
                        </button>

                        <button className='button-two'>
                            <BsThreeDots className='button_icon-two'/>
                            Read more
                        </button>
                    </div>

            </div>
        </div>

        <div className="date_section-container">
            
            <div className='date-div'>
                <p className='date-paragraph-title'>Choose Date:</p>
                <div className="first_date-container">
                    <MdChevronLeft className="slider-icon left" onClick={slideLeft}/>
                        <div className="slider">
                        
                                    <div className='slider-card'>
                                         <div className='div-slider-div'>
                                                <div>
                                                    <p>JUN 1st</p>
                                                </div>
                                                <div>
                                                    <p>MON</p>
                                                </div>
                                         </div>
                                         <div className='div-slider-div'>
                                                <div>
                                                    <p>JUN 2nd</p>
                                                </div>
                                                <div>
                                                    <p>TUE</p>
                                                </div>
                                         </div>
                                         <div className='div-slider-div'>
                                                <div>
                                                    <p>JUN 3d</p>
                                                </div>
                                                <div>
                                                    <p>WED</p>
                                                </div>
                                         </div>
                                         <div className='div-slider-div'>
                                                <div>
                                                    <p>JUN 4th</p>
                                                </div>
                                                <div>
                                                    <p>THU</p>
                                                </div>
                                         </div>
                                         <div className='div-slider-div'>
                                                <div>
                                                    <p>JUN 5th</p>
                                                </div>
                                                <div>
                                                    <p>FRI</p>
                                                </div>
                                         </div>
                                         <div className='div-slider-div'>
                                                <div>
                                                    <p>JUN 2nd</p>
                                                </div>
                                                <div>
                                                    <p>MON</p>
                                                </div>
                                         </div>

                                    </div>  
                        </div>
                    <MdChevronRight className="slider-icon right" onClick={slideRight}/>
                 </div>
            </div>

            <div className='date-div'>
                <p className='date-paragraph-title'>Available Times:</p>
                <div className="first_date-container">
                        <MdChevronLeft className="slider-icon left" onClick={slideLeft}/>
                            <div className="slider">
                            <div className='slider-card'>
                                         <div className='div-slider-div'>
                                            
                                                <div>
                                                    <p>JUN 1st</p>
                                                </div>
                                                <div>
                                                    <p>MON</p>
                                                </div>
                                         </div>
                                         <div className='div-slider-div'>
                                                <div>
                                                    <p>JUN 2nd</p>
                                                </div>
                                                <div>
                                                    <p>TUE</p>
                                                </div>
                                         </div>
                                         <div className='div-slider-div'>
                                                <div>
                                                    <p>JUN 3d</p>
                                                </div>
                                                <div>
                                                    <p>WED</p>
                                                </div>
                                         </div>
                                         <div className='div-slider-div'>
                                                <div>
                                                    <p>JUN 4th</p>
                                                </div>
                                                <div>
                                                    <p>THU</p>
                                                </div>
                                         </div>
                                         <div className='div-slider-div'>
                                                <div>
                                                    <p>JUN 5th</p>
                                                </div>
                                                <div>
                                                    <p>FRI</p>
                                                </div>
                                         </div>
                                         <div className='div-slider-div'>
                                                <div>
                                                    <p>JUN 2nd</p>
                                                </div>
                                                <div>
                                                    <p>MON</p>
                                                </div>
                                         </div>

                                    </div>  
                            </div>
                        <MdChevronRight className="slider-icon right" onClick={slideRight}/>
                </div>
            </div>

            <button className='button-one b'>Buy Ticket</button>

        </div>

    </main>
  )
}

export default Main