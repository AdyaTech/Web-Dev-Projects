import React from 'react'
import {assets} from '../assets/assets'
// import {CgShoppingCart} from 'react-icons/cg'
import headerImg from '../oldimages/header.png'
import featured1 from '../oldimages/Featured1.png';
import featured2 from '../oldimages/Featured2.png';
import featured3 from '../oldimages/Featured3.png';
import featured4 from '../oldimages/Featured4.png';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <header className='header'>
        <div className='header-left-side'>
            <div className='header-content'>
                <span>Sale 70%</span>
                <h1>A Classy Take on Streetwear</h1>
                <p>Anyone can beat you but no one can beat your outfit as long as you wear Classy Clothes.</p>
                <Link href='/products'>
                     <button className='btn' type='button'><img src={assets.cart_icon} className='w-5 min-w-5 bg-white' alt=""/><Link to='/collection'>Start Shopping</Link></button>
                </Link>
            </div>

            <div className='header-featured'>
                <img src={featured1} width={100} height={35} alt='img' />
                <img src={featured2} width={100} height={35} alt='img' />
                <img src={featured3} width={100} height={35} alt='img' />
                <img src={featured4} width={100} height={35} alt='img' />
            </div>
        </div>

        <div className='header-right-side'>
            <div className='header-circle'>
                <img className='header-img' src={headerImg} width={650} height={650} alt='header image' />
            </div>
        </div>
    </header>
  )
}
export default Hero
