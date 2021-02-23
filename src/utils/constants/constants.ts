// Reg ex list
// export const VALID_OPERATOR = {

//   DATE_FORMAT: /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/,
//   DATE_TIME_FORMAT: /^\d\d\d\d-(0?[1-9]|1[0-2])-(0?[1-9]|[12][0-9]|3[01]) (00|0[1-9]|1[0-9]|2[0-3]):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9])$/,
//   PASSWORD_REGEXP: /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\da-zA-Z])(.{8,}))$/,
//   ALPHA_NUMERIC_REGEXP: /^[A-Za-z0-9 ]*$/,
//   ALPHABETS_REGEXP: /^[A-Za-z ]*$/,
//   EMAIL_ADDRESS_REGEXP: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
//   // URL: /^(http:\/\/www\.) ? [a-z0-9] + ([\-\.]{1}[a-z0-9]+) *\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
// };

export const VALID_OPERATOR = 'DUP|POP|+|\\-';

export const INPUT_REGEX = `^(?:[0-9 s W(${VALID_OPERATOR})W])*$`;
