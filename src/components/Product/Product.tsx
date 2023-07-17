
import './Product.css'
import { ProducType} from '../../services/products'

const Product:React.FC<ProducType> = ({image,title,description,price,rating}) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description?.substring(0,110)}...</p>
                <div className="card-details">
                    <p className="card-price">Price: ${price}</p>
                    <p className="card-rating">Rating: {rating?.rate}</p>
                </div>
            </div>
        </div>

    )
}

export default Product