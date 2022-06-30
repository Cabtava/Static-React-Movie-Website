import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MdOutlineKeyboardArrowDown, MdSearch } from 'react-icons/md'
import './RowStyles.css'

function Row({fetchURL}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        }).catch((error) => {
            console.log(error)
        })
    }, [fetchURL])
 
    console.log(movies)
  return (
    <section>
            <div className='container-row'>
                    {/* HERE ADD TOP NAVIGATION */}
                        <div className='category-div'>
                        
                           <div className="category-div-top">
                                <div className='div-div-div'> 
                                    <div className="category-div-div">
                                        <p>All formats</p>
                                        <MdOutlineKeyboardArrowDown />
                                    </div>

                                    <div className="category-div-div">
                                        <p>By date</p>
                                        <MdOutlineKeyboardArrowDown />
                                    </div>

                                    <div className="category-div-div">
                                        <p>By category</p>
                                        <MdOutlineKeyboardArrowDown />
                                    </div>

                                    <div className="category-div-div">
                                        <p>Coming soon</p>
                                    </div>
                                </div>

                                <div className='search-bar'>
                                    <input type="text" placeholder='Search by name...'/>
                                    <MdSearch className='search-icon'/>
                                </div>

                            </div> 

                            <div className="category-div-bottom">
                                <div className='white'>
                                    <div className="red"></div>
                                </div>
                            </div>

                        </div>

                    <div>
                        <div className='row_poster-container'>
                            {movies.map((item) => {
                                return (
                                    <div className="poster_image-div">
                                        <img src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} alt="/" />
                                        <p className='title-poster'>{item?.original_title}</p>
                                        <div className="bottom-div-cont">
                                        <div className='flex-div'>
                                            <p>11:30</p>
                                            <div className="circle">3D</div>
                                        </div>
                                        <p>01:30</p>
                                        <p>21:30</p>
                                        </div>
                                     </div> 
                                )
                            })}
                        </div>

                        <div className="category-div-bottom bot">
                                <div className='white'></div>
                                <button className='button-one but'>
                                        Show more
                                </button>
                        </div>
                    </div>
        
            </div>
    </section>
  )
}

export default Row