import getProducts from "../../../services/products/getProducts"

export const userProductsApi = ({onSuccess, onFail, setLoad}) => {

    const requestProducts = async () => {
        try {
            setLoad(true)
            const {data} = await getProducts
        } catch (error) {
            
        }
    }
}