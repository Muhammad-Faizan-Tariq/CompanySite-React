import React from 'react'
import vg from '../assets/2.webp';
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from 'react-icons/ai'

export const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>CompanySite</h1>
            <p>Your innovation Partner</p>
        </main>
    </div>

    <div className='home2'>
        <img src={vg} alt="illustration" />
        <div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                molestiae nam perspiciatis sunt dolorum, reprehenderit enim
                aperiam natus similique ex magnam delectus? Natus, eius molestiae!
                Aspernatur et laudantium nisi possimus.
            </p>
        </div>
    </div>

    <div className='home3' id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                molestiae nam perspiciatis sunt dolorum, reprehenderit enim
                aperiam natus similique ex magnam delectus? Natus, eius molestiae!
                Aspernatur et laudantium nisi possimus.
            </p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{ animationDelay: "0.3s" }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{ animationDelay: "0.5s" }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{ animationDelay: "0.7s" }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{ animationDelay: "1s" }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>

    </>
  )
}
