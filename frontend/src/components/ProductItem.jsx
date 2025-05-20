import {useContext} from 'react'
import { ShopContext } from '../context/ShopContextConfig'
import {Link} from 'react-router-dom'
const ProductItem = ({id,images,name,price}) => {
    const {currency} = useContext(ShopContext)
  return (
    <div>
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img  className=' hover:scale-110 transition ease-in-out'src={images && images.length > 0 ? images[0] : "/placeholder.jpg"}  alt=''/>
      
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price} </p>
        </Link>
    </div>
  )
}

export default ProductItem