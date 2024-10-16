const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const PRODUCT_URL = process.env.NEXT_PUBLIC_DATA_PRODUCT;
const ROUTERS = {
  HOME: '/',
  DASHBOARD: 'dashboard',
  INBOX: 'inbox',
  WALLET: 'wallet',
  NEWS_FEED: 'newsFeed',
  ANALYTICS: 'analytics',
  MARKET: 'market',
  ARCHIVE: 'archive',
  PROFILE: 'profile',
  SETTINGS: 'settings',
};

export { ROUTERS, BASE_URL, PRODUCT_URL };
