import React from "react";
import styled from "styled-components";
import ProductList from "./Components/ProductList";
import Sort from "./Components/Sort";
import FilterSection from "./Components/FilterSection";
import { useFilterContext } from "./context/filter_context";

const Products = () => {

  const {filter_products} = useFilterContext();
  console.log("File: Product.js ~line9 ~ Products ~ filter_products", filter_products)
  return <Wrapper>
    <div className="container grid grid-filter-columnn">
      {/* first column */}
      <div>
        <FilterSection/>
      </div>

      {/* second column */}
      <section className="product-view--sort">
      {/* first row */}
        <div className="sort-filter">  
          <Sort/>
        </div>
        {/* second row */}
          <div className="main-product">
            <ProductList/>
          </div>
      </section>
    </div>
  </Wrapper>;
};

const Wrapper = styled.section`


  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;
