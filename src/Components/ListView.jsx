import { useProductContext } from "../context/productContext";
import styled from "styled-components";
import Product from "./Product";
import FormatPrice from "../Helpers/FormatPrice";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";

const ListView = ({products}) => {
  const { isLoading, featureProducts } = useProductContext();
  console.log("File : FeatureProduct.js,", featureProducts)

  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (
    <Wrapper className="section">
      <div className="container grid">
        {   products.map((curElem)=>{
            const{id, name, image, price, description} = curElem;
            return (
                <div className="card grid grid-two-column">
                    <figure>
                        <img src={image} alt={name} />
                    </figure>
                   
                        <div className="card-data">
                            <h3>{name}</h3>
                            <p><FormatPrice price={price}/></p>
                            <p>{description.slice(0,90)}...</p>
                            <NavLink to={`/singleproduct/${id}`} className="btn-main">
                                <Button className="btn">Read more</Button>
                            </NavLink>
                        </div>

                </div>
            )
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .container {
    max-width: 120rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }

    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }


  .card {
    background-color: #fff;
    border-radius: 1rem;
  }
    .card-data {
      padding: 0 2rem;
    }

    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }

    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }

    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;      
      align-items: center;
      color: rgb(98 84 243);

      &:hover {
        background-color: rgb(98 84 243);
        color: white;
        
        &:hover a {
            color: white;
        }
    }
        a {
            color: rgb(98 84 243);
            font-size: 1.4rem;
        }
    
  

`;

export default ListView;