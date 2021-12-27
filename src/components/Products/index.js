import React from "react"
//Styles
import {
  ProductsContainer,
  ProductWrapper,
  ProductsHeading,
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductsElements.styles"
//Image plugin
import { getImage } from "gatsby-plugin-image"

const Products = ({ heading, products, isBurger, full }) => {
  const threeProducts = full ? products.slice(0) : products.slice(0, 3)

  return (
    <ProductsContainer full={full} isBurger={isBurger}>
      {heading && <ProductsHeading>{heading}</ProductsHeading>}
      <ProductWrapper>
        {threeProducts.map(product => {
          const productImage = getImage(
            product.ACF_Products.productPhoto.localFile.childImageSharp
          )
          return (
            <ProductCard key={product.id}>
              <ProductImg image={productImage} />

              <ProductInfo>
                <ProductTitle>{product.ACF_Products.productName}</ProductTitle>
                <ProductDesc isBurger={isBurger}>
                  {product.ACF_Products.productIngredients}
                </ProductDesc>
                <ProductPrice>
                  ${product.ACF_Products.productPrice}
                </ProductPrice>
                <ProductButton>Add to cart</ProductButton>
              </ProductInfo>
            </ProductCard>
          )
        })}
      </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products
