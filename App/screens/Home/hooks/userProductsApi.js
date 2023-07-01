import getProducts from "../../../services/products/getProducts";

export const userProductsApi = ({ onSuccess, onFail, setLoad, sellerId }) => {
  const requestProducts = async () => {
    try {
      var params = {
        limit: 10,
        sort: "descending",
      };

      setLoad(true);
      if (sellerId) {
        params = { ...params, sellerId: sellerId };
      }
      const { data } = await getProducts({ params: params });

      onSuccess(data.data);
    } catch (error) {
      console.log("data erro", error);
    } finally {
      setLoad(false);
    }
  };

  return {
    requestProducts,
  };
};
