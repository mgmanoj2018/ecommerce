import React from 'react'
import './RelatedProducts.css'
import data from '../Assets/data'
import Item from '../Item/Item'
function RelatedProducts() {
  return (
         <div className='relatedproducts'>
            <h1>Related Products</h1>
            <hr/>
            <div className='relatedproducts-item'>
                {data.map((item,i)=>{
                    return <Item key={i} id={item.id} image={item.image} name={item.name} old_price={item.old_price} new_price={item.new_price}/>
                })}
            </div>
         </div>
        )
}

export default RelatedProducts