export const required = value => (value ? undefined : "!Required");

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength5 = minLength(5);

export const email = value =>
  value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? undefined
    : "Invalid email address";

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const maxLength20 = maxLength(20);

export const numeric = value =>
  value && /[^0-9]/i.test(value) ? "Only numeric characters" : undefined;

export const phoneNumber = value =>
  value && !/^([0-9]{9})$/i.test(value)
    ? "Invalid phone number, must be 9 digits"
    : undefined;

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? "Only alphanumeric characters"
    : undefined;

export const documentNumber = value =>
  value && !/^[a-zA-ZА-Яа-я]{2}[0-9]{6}$/i.test(value)
    ? "Only documentNumber"
    : undefined;
