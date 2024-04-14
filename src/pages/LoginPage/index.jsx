import { Link, useNavigate } from 'react-router-dom';
import { SCREEN_URL } from '../../constants/screenUrls';
import { Box, Button, Input, InputLabel, Stack, TextField, Typography } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loginUser } from '../../api/userAPI';

const schema = yup.object({
  username: yup.string().required('Trường này không được để trống.'),
  password: yup
    .string()
    .required('Trường này không được để trống.')
    .min(5, 'Mật khẩu phải tối thiểu 8 ký tự.')
});

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all'
  });

  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { isLoading, message } = useSelector((state) => state.users);

  const handleLogin = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token && !isLoading) navigator(SCREEN_URL.HOME);
  }, [isLoading]);

  return (
    <>
      <Stack sx={{ position: 'relative' }}>
        <img
          src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705727250/homeImage01_yenbiy.png"
          alt=""
          style={{ width: '100%', height: 'auto' }}
        />
      </Stack>
      {/* Browse The Range */}
      <Stack
        justifyContent={'space-between'}
        component="form"
        onSubmit={handleSubmit(handleLogin)}
        sx={{
          position: 'absolute',
          top: '40%',
          right: 400,
          padding: 4,

          width: 500,
          backgroundColor: '#FFF3E3'
        }}>
        {/* Nội dung Stack 2 */}

        <Typography py={'10px'} variant="h1" fontSize={'30px'} color={'#b8822f'}>
          LOGIN
        </Typography>
        <Stack spacing={4}>
          {message && <Typography>{message}</Typography>}
          <TextField
            variant="standard"
            placeholder="username"
            error={!!errors.username}
            helperText={errors.username?.message || ''}
            {...register('username')}
          />
          <TextField
            variant="standard"
            placeholder="Password"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message || ''}
            {...register('password')}
          />
        </Stack>
        <Box mt={4}>
          <Button type="submit" variant="contained">
            {isLoading ? 'Loading...' : 'Đăng Nhập'}
          </Button>
          <Stack>
            <Typography mt={2}>
              {' '}
              Nếu chưa có tài khoản ? <Link to={SCREEN_URL.REGISTER}>Đăng Ký</Link>
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default LoginPage;
