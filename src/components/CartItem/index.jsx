import React from 'react'
import styles from "./CartItem.module.css"

const CartItem = ({product, removeItem}) => {
  return (
    <div>
      <p className={styles.prodTitle} >{product.item.title}</p>
      <img className={styles.prodImage} src={product.item.pictureURL} />
      <p className={styles.prodCount} >qty: {product.count}</p>
      <p className={styles.prodPrice} > USD:{product.item.price}</p>

       <button onClick={()=>removeItem(product.item.id)}>-</button>
       <button onClick={()=>addItem(product.item.id)}>+</button>
       <button onClick={()=>clear(product.id)}>CLEAR</button>
    </div>
    )
}
    

export default CartItem