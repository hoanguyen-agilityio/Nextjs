import dynamic from 'next/dynamic';

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
    href: 'dashboard',
  },
  {
    icon: <Inbox width="30px" height="30px" />,
    label: 'Inbox',
    className: 'text-grayBlue-400',
    href: 'inbox',
  },
  {
    icon: <Wallet width="30px" height="30px" />,
    label: 'Wallet',
    className: 'text-grayBlue-400',
    href: 'wallet',
  },
  {
    icon: <NewsFeed width="30px" height="30px" />,
    label: 'NewsFeed',
    className: 'text-grayBlue-400',
    href: 'newsFeed',
  },
  {
    icon: <Analytics width="30px" height="30px" />,
    label: 'Analytics',
    className: 'text-grayBlue-400',
    href: 'analytics',
  },
  {
    icon: <Market width="30px" height="30px" />,
    label: 'Market',
    className: 'text-grayBlue-400',
    href: 'market',
  },
  {
    icon: <Archive width="30px" height="30px" />,
    label: 'Archive',
    className: 'text-grayBlue-400',
    href: 'archive',
  },
  {
    icon: <Profile width="30px" height="30px" />,
    label: 'Profile',
    className: 'text-grayBlue-400 mt-[100px]',
    href: 'profile',
  },
  {
    icon: <Settings width="30px" height="30px" />,
    label: 'Settings',
    className: 'text-grayBlue-400',
    href: 'settings',
  },
];
