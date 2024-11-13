const REGEX = {
  NUMBER: /^[\d,]+$/,
  PERCENT: /^[0-9.]+%?$/,
  USERNAME: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]*$/,
  PASSWORD:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/,
};

export { REGEX };
