const normalizeUrl = (value: string) => {
  const normalizedUrl = value.replace(/^https?:\/\//, '');

  const urlPattern = /^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+([/?].*)?$/;
  if (!urlPattern.test(normalizedUrl)) {
    return '';
  }

  return normalizedUrl;
};

export { normalizeUrl };
