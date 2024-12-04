const getErrorCode = (): number => {
  if (typeof window !== 'undefined') {
    const code = new URLSearchParams(window.location.search).get('errorCode');
    return code ? parseInt(code, 10) : 500;
  }

  return 500;
};

const getErrorMessage = (code: number): string => {
  switch (code) {
    case 404:
      return 'Page not found';
    case 500:
      return 'Internal server error';
    case 403:
      return 'Forbidden';
    case 401:
      return 'Unauthorized';
    case 400:
      return 'Bad request';
    case 300:
      return 'Multiple choices';
    default:
      return 'Oops! Something went wrong.';
  }
};

export { getErrorCode, getErrorMessage };
