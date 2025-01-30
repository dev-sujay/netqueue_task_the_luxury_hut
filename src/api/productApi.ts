import axiosInstance from "./axiosInstance";

export const getProducts = async (filters: Record<string, string | number>) => {
  try {
    const response = await axiosInstance.get("/products", { params: filters });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};