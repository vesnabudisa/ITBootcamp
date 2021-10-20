import axios from 'axios'

export const getAllProducts = () => axios.get(' http://localhost:3005/products')
export const addProduct = (newProduct) => axios.post('http://localhost:3005/products',newProduct)