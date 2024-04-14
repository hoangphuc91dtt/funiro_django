import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {
  Box,
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import { SCREEN_URL } from '../../constants/screenUrls';
import { useSelector } from 'react-redux';
import Banner from '../../layouts/Banner';
import FutureComponent from '../../components/FutureComponent';

const ProductPage = () => {
  const { cartCompare } = useSelector((state) => state.cart);

  const cartCompareFilter = cartCompare.filter((item) => Object.keys(item).length > 0);

  return (
    <Stack padding={'20px'} gap={0}>
      <Stack direction={'row'} p={'50px'} ml={'20px'} gap={8}>
        <Stack gap={3} width={'25%'}>
          <Typography
            sx={{
              padding: '20px',
              fontFamily: 'Poppins',
              fontSize: '28px',
              fontWeight: 500,
              lineHeight: '35px',
              letterSpacing: '0em',
              textAlign: 'left'
            }}>
            Go to Product page for more Products
          </Typography>
          <Button
            sx={{
              px: '20px',
              justifyContent: 'start',
              color: '#727272',
              textDecoration: 'underline',
              textAlign: 'left'
            }}>
            View more
          </Button>
        </Stack>
        {cartCompareFilter?.map(({ id, thumbnail, title, price }) => (
          <Stack key={id} gap={3} width={'20%'}>
            <Stack
              sx={{
                height: '200px',
                bgcolor: '#F9F1E7',
                borderRadius: '10px',
                objectFit: 'cover'
              }}>
              <img
                src={thumbnail}
                alt="Error"
                height={'100%'}
                style={{
                  borderRadius: '5px',
                  objectFit: 'cover'
                }}
              />
            </Stack>

            <Typography
              sx={{
                margin: '10px 0px',
                fontFamily: 'Poppins',
                fontSize: '24px',
                fontWeight: '500',
                lineHeight: '30px',
                letterSpacing: '0em',
                textAlign: 'left'
              }}>
              {title}
            </Typography>
            <Typography
              sx={{
                fontFamily: 'Poppins',
                margin: '10px 0px',
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '27px',
                letterSpacing: '0em',
                textAlign: 'left'
              }}>
              Rs. {price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}
            </Typography>
            <Stack direction="row" marginLeft={0} sx={{ alignItems: 'start' }}>
              <Typography
                sx={{
                  margin: '0px',
                  color: '#000',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '18px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal'
                }}>
                4.7
              </Typography>
              <Stack direction="row" sx={{ color: '', marginRight: '10px' }}>
                {/* stars */}
              </Stack>
              <Typography
                sx={{
                  margin: '0px',
                  paddingLeft: '10px',
                  // MarginRight: '10px',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  letterSpacing: '0em',
                  borderLeft: '1px solid black',
                  color: '#9F9F9F',
                  fontSize: '13px',
                  fontStyle: 'normal',
                  lineHeight: 'normal'
                }}>
                204 Review
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Stack>

      <Stack direction={'row'} p={'50px'} ml={'20px'} gap={8}>
        <Stack gap={3} width={'25%'}>
          <Typography variant="h3">amount </Typography>
          <Typography variant="body1">Sales Package</Typography>
          <Typography variant="body1">Model Number</Typography>
          <Typography variant="body1">Secondary Material</Typography>
          <Typography variant="body1">Configuration</Typography>
          <Typography variant="body1">Upholstery Material</Typography>
          <Typography variant="body1">Upholstery Color</Typography>
        </Stack>
        {cartCompareFilter.map(({ id, amount }) => (
          <Stack key={id} gap={3} width={'20%'}>
            <Typography variant="h3"></Typography>
            <Typography variant="body1">{amount.SalesPackage}</Typography>
            <Typography variant="body1">{amount.ModelNumber}</Typography>
            <Typography variant="body1">{amount.SecondaryMaterial}</Typography>
            <Typography variant="body1">{amount.Configuration}</Typography>
            <Typography variant="body1">{amount.UpholsteryMaterial}</Typography>
            <Typography variant="body1">{amount.UpholsteryColor}</Typography>
            <Box>
              <Button variant="contained">Add to cart</Button>
            </Box>
          </Stack>
        ))}
      </Stack>
      <FutureComponent />
    </Stack>
  );
};
export default ProductPage;
