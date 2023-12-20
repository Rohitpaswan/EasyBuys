
import './cart.css'
import './emptyCart.css'
const EmptyCart = () => {
  return (
    <div className='emptycart__wrapper'>
      <div className='emptycart__container'>
        <div className="emptycart__header">
        <span> Items(0)</span>
        </div>
        <div className="emptycart__body">
       <div className='emptycart_img-div'>
        <img src="./Image/OIP.jpeg" alt="" className="empty__img" />
        <h3>Missing Cart items?</h3>
        <p>see the items and  add to cart</p>
       </div>
        </div>
      </div>
      
    </div>
  )
}

export default EmptyCart
