import { createAsyncThunk } from '@reduxjs/toolkit'; // Thêm sản phẩm vào giỏ hàng trong local storage
export const addToCart = createAsyncThunk('cart/addToCart', async (productData) => {
  try {
    // Lấy danh sách giỏ hàng từ local storage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Thêm sản phẩm mới vào danh sách giỏ hàng
    cartItems.push(productData);

    // Lưu danh sách giỏ hàng mới vào local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    return cartItems;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
});

// Xóa sản phẩm khỏi giỏ hàng trong local storage dựa trên ID
export const findDeleteCartById = createAsyncThunk('cart/findDeleteCartById', async (cartId) => {
  try {
    // Lấy danh sách giỏ hàng từ local storage
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Lọc ra sản phẩm cần xóa
    const updatedCart = cartItems.filter((item) => item.id !== cartId);

    // Lưu danh sách giỏ hàng mới vào local storage
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    return updatedCart;
  } catch (error) {
    console.error('Error deleting item:', error);
    throw error;
  }
});

// Lấy danh sách các sản phẩm trong giỏ hàng từ local storage
export const findAllCart = createAsyncThunk('cart/findAllCart', async () => {
  try {
    // Lấy danh sách giỏ hàng từ local storage
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    return cartItems;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
});
