import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>"Discover a seamless online shopping experience at [Your Website Name]! From the latest fashion trends and tech gadgets to everyday essentials, we offer a curated selection of high-quality products to suit every need. Enjoy competitive pricing, fast shipping, and exceptional customer support. Shop with confidence and convenience—all in one place!"</p>
                <p>Enjoy competitive pricing, fast shipping, and exceptional customer support. Shop with confidence and convenience—all in one place!"</p>
            </div>
        </div>
    )
}

export default DescriptionBox
