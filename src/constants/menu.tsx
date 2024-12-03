import dynamic from 'next/dynamic';
import { ROUTERS } from './router';

const Dashboard = dynamic(() => import('@/icons/Dashboard'));
const Inbox = dynamic(() => import('@/icons/Inbox'));
const Wallet = dynamic(() => import('@/icons/Wallet'));
const NewsFeed = dynamic(() => import('@/icons/NewsFeed'));
const Analytics = dynamic(() => import('@/icons/Analytics'));
const Market = dynamic(() => import('@/icons/Market'));
const Archive = dynamic(() => import('@/icons/Archive'));
const Profile = dynamic(() => import('@/icons/Profile'));
const Settings = dynamic(() => import('@/icons/Settings'));

export const MENU = [
  {
    icon: <Dashboard width="30px" height="30px" />,
    label: 'Dashboard',
    href: ROUTERS.HOME,
  },
  {
    icon: <Inbox width="30px" height="30px" />,
    label: 'Inbox',
    href: ROUTERS.INBOX,
  },
  {
    icon: <Wallet width="30px" height="30px" />,
    label: 'Wallet',
    href: ROUTERS.WALLET,
  },
  {
    icon: <NewsFeed width="30px" height="30px" />,
    label: 'NewsFeed',
    href: ROUTERS.NEWS_FEED,
  },
  {
    icon: <Analytics width="30px" height="30px" />,
    label: 'Analytics',
    href: ROUTERS.ANALYTICS,
  },
  {
    icon: <Market width="30px" height="30px" />,
    label: 'Market',
    href: ROUTERS.MARKET,
  },
  {
    icon: <Archive width="30px" height="30px" />,
    label: 'Archive',
    href: ROUTERS.ARCHIVE,
  },
  {
    icon: <Profile width="30px" height="30px" />,
    label: 'Profile',
    className: 'mt-[100px]',
    href: ROUTERS.PROFILE,
  },
  {
    icon: <Settings width="30px" height="30px" />,
    label: 'Settings',
    href: ROUTERS.SETTINGS,
  },
];

export const MENU_NO_AUTH = [
  {
    label: 'Overview',
    href: ROUTERS.EMPTY,
  },
  {
    label: 'Projects',
    href: ROUTERS.EMPTY,
  },
  {
    label: 'Tasks',
    href: ROUTERS.EMPTY,
  },
  {
    label: 'Reports',
    href: ROUTERS.EMPTY,
  },
  {
    label: 'Statements',
    href: ROUTERS.EMPTY,
  },
];
