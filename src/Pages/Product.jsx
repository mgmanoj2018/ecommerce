import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext'
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProducDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
function Product() {
  console.log(ShopContext)
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product  = all_product.find((e)=> e.id === Number(productId))
 
  return (
    <div className=''>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product