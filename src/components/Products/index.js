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
} from "./ProductsElements"
//Image plugin
import { getImage } from "gatsby-plugin-image"

const Products = ({ heading, products }) => {
  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>
        {products.map(product => {
          const productImage = getImage(
            product.ACF_Products.productPhoto.localFile.childImageSharp
          )
          return (
            <ProductCard key={product.id}>
              <ProductImg image={productImage} />

              <ProductInfo>
                <ProductTitle>{product.ACF_Products.productName}</ProductTitle>
                <ProductDesc>
                  {product.ACF_Products.productIngredients}
                </ProductDesc>
                <ProductPrice>
                  {product.ACF_Products.productName.price}
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
