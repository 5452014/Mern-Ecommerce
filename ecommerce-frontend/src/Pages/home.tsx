import {Link} from "react-router-dom"
import ProductCard from "../Components/product-card";

const Home = () => {
  const addToCartHandler=()=>{

  }
  return (
    <div className="home">
      <section></section> 
 <h1> Latest Product
<Link to="/search" className="findmore">  
More
</Link>
     </h1>
     <main>
      <ProductCard 
      productId="andnj" 
      name="Macbook"
       photo="https://m.media-amazon.com/images/I/71an9eiBxpL._AC_CR0%2C0%2C0%2C0_SX960_SY720_.jpg"
        price={123}
        stock={4}
         handler={addToCartHandler}/>
     </main>
    
    </div>

  )
}

export default Home;
