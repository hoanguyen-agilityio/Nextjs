import dynamic from 'next/dynamic';
import {
  ANALYTICS_PAGE,
  ARCHIVE_PAGE,
  DASHBOARD_PAGE,
  INBOX_PAGE,
  MARKET_PAGE,
  NEWS_FEED_PAGE,
  PROFILE_PAGE,
  SETTINGS_PAGE,
  WALLET_PAGE,
} from './Router';

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
    className: 'text-blue-400 bg-translucent-400',
    href: DASHBOARD_PAGE,
  },
  {
    icon: <Inbox width="30px" height="30px" />,
    label: 'Inbox',
    className: 'text-grayBlue-400',
    href: INBOX_PAGE,
  },
  {
    icon: <Wallet width="30px" height="30px" />,
    label: 'Wallet',
    className: 'text-grayBlue-400',
    href: WALLET_PAGE,
  },
  {
    icon: <NewsFeed width="30px" height="30px" />,
    label: 'NewsFeed',
    className: 'text-grayBlue-400',
    href: NEWS_FEED_PAGE,
  },
  {
    icon: <Analytics width="30px" height="30px" />,
    label: 'Analytics',
    className: 'text-grayBlue-400',
    href: ANALYTICS_PAGE,
  },
  {
    icon: <Market width="30px" height="30px" />,
    label: 'Market',
    className: 'text-grayBlue-400',
    href: MARKET_PAGE,
  },
  {
    icon: <Archive width="30px" height="30px" />,
    label: 'Archive',
    className: 'text-grayBlue-400',
    href: ARCHIVE_PAGE,
  },
  {
    icon: <Profile width="30px" height="30px" />,
    label: 'Profile',
    className: 'text-grayBlue-400 mt-[100px]',
    href: PROFILE_PAGE,
  },
  {
    icon: <Settings width="30px" height="30px" />,
    label: 'Settings',
    className: 'text-grayBlue-400',
    href: SETTINGS_PAGE,
  },
];
