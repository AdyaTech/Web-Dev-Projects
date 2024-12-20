import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import LatestCollection from '../components/LatestCollection'

const RelatedProducts = (category, subCategory) => {

    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(()=>{
        if(products.length > 0){
            let productsCopy = products.slice();
            productsCopy = productsCopy.filter((item)=>category === item.category);
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setRelated(productsCopy.slice(0,5));
        }
    },[products])
  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
              <div className='product-subtitle'>
                  <span>RELATED PRODUCTS</span>
              </div>
      </div>
      
        <LatestCollection/>
      
    </div>
  )
}

export default RelatedProducts
