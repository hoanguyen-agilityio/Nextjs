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
    href: INBOX_PAGE,
  },
  {
    icon: <Wallet width="30px" height="30px" />,
    label: 'Wallet',
    href: WALLET_PAGE,
  },
  {
    icon: <NewsFeed width="30px" height="30px" />,
    label: 'NewsFeed',
    href: NEWS_FEED_PAGE,
  },
  {
    icon: <Analytics width="30px" height="30px" />,
    label: 'Analytics',
    href: ANALYTICS_PAGE,
  },
  {
    icon: <Market width="30px" height="30px" />,
    label: 'Market',
    href: MARKET_PAGE,
  },
  {
    icon: <Archive width="30px" height="30px" />,
    label: 'Archive',
    href: ARCHIVE_PAGE,
  },
  {
    icon: <Profile width="30px" height="30px" />,
    label: 'Profile',
    className: 'mt-[100px]',
    href: PROFILE_PAGE,
  },
  {
    icon: <Settings width="30px" height="30px" />,
    label: 'Settings',
    href: SETTINGS_PAGE,
  },
];
