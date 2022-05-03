// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Label from '../../../components/Label';
import Iconify from '../../../components/Iconify';
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  user: getIcon('ic_user'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Main',
    items: [
      { title: 'Client List', path: PATH_DASHBOARD.general.app, icon: ICONS.user },
      { title: 'Main Dashboard', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.dashboard },
    ],
  },
];

export default navConfig;
