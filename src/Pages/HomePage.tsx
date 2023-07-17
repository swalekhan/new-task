
import Product from "../components/Product/Product"
import { useGetProductsQuery } from "../services/products"



const HomePage = () => {

    const { data, isLoading, isError } = useGetProductsQuery("products")
    console.log(data)

    if (isLoading) {
        return <p>loading...</p>
    }

    if (isError) {
        return <p>somethimg went wrong</p>
    }

    return (
        <section className="home_page">
            {data?.map((item, key) => (
                <Product {...item} key={key} />
            ))}
        </section>
    )
}

export default HomePage