// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Button, Typography } from '@mui/material';
// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// _mock_
import {
  _ecommerceNewProducts,
  _ecommerceSalesOverview,
  _ecommerceBestSalesman,
  _ecommerceLatestProducts,
} from '../../_mock';
// components
import Page from '../../components/Page';
// sections
import {
  EcommerceNewProducts,
  EcommerceYearlySales,
  EcommerceBestSalesman,
  EcommerceSaleByGender,
  EcommerceWidgetSummary,
  EcommerceSalesOverview,
  EcommerceLatestProducts,
  EcommerceCurrentBalance,
} from '../../sections/@dashboard/general/e-commerce';
import { AppWelcome } from '../../sections/@dashboard/general/app';
// assets
import { MotivationIllustration } from '../../assets';

// ----------------------------------------------------------------------

export default function GeneralEcommerce() {
  const { user } = useAuth();

  const theme = useTheme();

  const { themeStretch } = useSettings();

  return (
    <Page title="General: E-commerce">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Typography>This is main dashboard</Typography>
        </Grid>
      </Container>
    </Page>
  );
}
