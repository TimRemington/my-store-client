import React from 'react'
import styles from './product-card.module.scss'

import Card from '../../Card'

const ProductCard = ({ name, img_url, price, description }) => {
  return(
    <Card>
      <h2>{name}</h2>
      <img className={styles.image} src={img_url} alt="product image"/>
      <h3>Price: ${price / 100}.00</h3>
    </Card>
  )
}

export default ProductCard
