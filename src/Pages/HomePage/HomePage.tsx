
import { useEffect } from "react"
import Product from "../../components/Product/Product"
// import { useGetProductsQuery } from "../../services/products"
import { useAppDispatch } from "../../store"
import { getProductsAsync } from "./ProductsSlice"
import { useAppSelector } from "../../store"




const HomePage = () => {
    const data = useAppSelector(state => state.allProducts)
    console.log(data)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProductsAsync("products"))
    }, [dispatch])

    // const { data, isLoading, isError } = useGetProductsQuery("products")

    if (!data) {
        return <p>somethimg went wrong</p>
    }

    return (
        <section className="home_page">
            {data?.items?.map((item, key) => (
                <Product {...item} key={key} />
            ))}
        </section>
    )
}

export default HomePage