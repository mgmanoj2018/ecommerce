import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
function ProductDisplay(props) {
    const {product} = props
    const {addTocart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className='productdispaly-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt={product.image} />
                <img src={product.image} alt={product.image} />
                <img src={product.image} alt={product.image} />
                <img src={product.image} alt={product.image} />
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt={product.image} />
            </div>
        </div>
      <div className='productdispaly-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-star'>
                <img src={star_icon} alt={star_icon} />
                <img src={star_icon} alt={star_icon} />
                <img src={star_icon} alt={star_icon} />
                <img src={star_icon} alt={star_icon} />
                <img src={star_dull_icon} alt={star_dull_icon} />
                <p>122</p>
            </div>
     
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>${product.old_price}</div>
                <div className='productdisplay-right-price-new'>${product.new_price}</div>
            </div>
                <div className='productdisplay-right-decription'>
                    A lightweight, usaully knitted, pullover shirt, close-fitting and with
                    a round neckline and short sleeves, worn as an undershirt or outers garment.
                </div>
           
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XX</div>
                </div>       
                <button onClick={()=>addTocart(product.id)}>ADD TO CART</button>
                <p className='productdisplay-right-category'>Category<span>Women, T-Shirt, Crop Top</span></p>
                <p className='productdisplay-right-category'>Teg<span>Modern,Letest</span></p>
            </div>
      </div>
    </div>
  )
}

export default ProductDisplay