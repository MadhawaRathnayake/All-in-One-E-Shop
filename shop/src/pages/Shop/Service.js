import { post, get } from "../../utils/apiHelper";

export const saveProduct = async (productData) => {
    try {
        const response = await post('Product/SaveProduct', productData);
        return response;
    } catch (error) {
        console.error('Error saving product:', error);
        throw error;
    }
};

export const getAllProducts = async () => {
    try {
        const response = await get('Product/GetAllProducts');
        return response;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};