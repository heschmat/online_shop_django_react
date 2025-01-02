import Card from "../components/Card"
import { products } from "../products"

const HomePage = () => {
  return (
    <div>
        {products.map(product => {
            <Card product={product} key={product._id}/>
        })}
    </div>
  )
}

export default HomePage
