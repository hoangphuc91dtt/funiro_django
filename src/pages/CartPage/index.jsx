import { Delete } from '@mui/icons-material';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { findAllCart, findDeleteCartById } from '../../api/cartApi';
import FutureComponent from '../../components/FutureComponent';
import { SCREEN_URL } from '../../constants/screenUrls';
const CartPage = () => {
  const dispatch = useDispatch();
  const { cart: cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(findAllCart());
  }, [dispatch]);

  const handleRemoveItem = (id) => {
    dispatch(findDeleteCartById(id));
  };

  // Cập nhật tính toán tổng cộng để sử dụng giá đã giảm
  const total = cartItems
    .reduce((total, { price, discount }) => {
      const discountedPrice = (price * (1 - discount / 100)).toFixed(2);
      return total + parseFloat(discountedPrice);
    }, 0)
    .toFixed(2); // Làm tròn tổng cộng

  return (
    <>
      <Stack padding={'72px 100px'} bgcolor={'#FFF;'}>
        <Stack direction="row" justifyContent={'space-between'} gap={5}>
          <Stack width={'70%'}>
            <Stack
              bgcolor={'#F9F1E7'}
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              padding={'15px 70px'}>
              <Typography>Product</Typography>
              <Typography>Price</Typography>
              <Typography>Quantity</Typography>
              <Typography>Subtotal</Typography>
            </Stack>
            {cartItems.map(({ id, name, discount, thumbnail, price }) => {
              const discountedPrice = (price * (1 - discount / 100)).toFixed(2);
              return (
                <Stack key={id} direction="row" alignItems="center" marginTop="30px">
                  <img
                    src={thumbnail}
                    alt={name}
                    style={{
                      borderRadius: '5px',
                      width: '111px',
                      height: '90px',
                      objectFit: 'cover'
                    }}
                  />
                  <Stack
                    width={'80%'}
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center">
                    <Typography>{name}</Typography>
                    <Typography>Rs. {discountedPrice}</Typography>
                    <Typography>1</Typography>
                    <Typography>Rs. {discountedPrice}</Typography>
                  </Stack>
                  <IconButton onClick={() => handleRemoveItem(id)}>
                    <Delete style={{ color: '#B88E2F' }} />
                  </IconButton>
                </Stack>
              );
            })}
          </Stack>

          <Stack
            padding={'15px'}
            spacing={5}
            width={'30%'}
            bgcolor={'#F9F1E7'}
            alignItems={'center'}>
            <Typography sx={{ fontSize: '32px', fontWeight: 600 }}>Cart Totals</Typography>

            <Stack direction={'column'} spacing={5}>
              <Stack direction={'row'} spacing={6}>
                <Typography>Subtotal</Typography>
                <Typography>Rs.{total}</Typography>
              </Stack>

              <Stack spacing={5} direction={'row'}>
                <Typography>Total</Typography>
                <Typography
                  sx={{ fontSize: '20px', fontWeight: 500, color: 'var(--Primary, #B88E2F)' }}>
                  Rs.{total}
                </Typography>
              </Stack>
            </Stack>

            <Button
              component={Link}
              to={SCREEN_URL.CHECKOUT}
              sx={{
                border: '1px solid',
                borderRadius: '7px',
                padding: '14px 58px'
              }}>
              Check out
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <FutureComponent />
    </>
  );
};

export default CartPage;
