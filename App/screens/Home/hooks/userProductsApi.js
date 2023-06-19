import getProducts from "../../../services/products/getProducts"

export const userProductsApi = ({onSuccess, onFail, setLoad}) => {

    const requestProducts = async () => {
        try {
            setLoad(true)
            const {data} = await getProducts({params: 'limit=10&sort=descending'})
            console.log('dataaaaaaaa', data.value.data)
            onSuccess(data.value.data)
            
        } catch (error) {
            console.log('data erro', error)
        }finally {
            setLoad(false)
        }

    }

    return {
        requestProducts
    }
}