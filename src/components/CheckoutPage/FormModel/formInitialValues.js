import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
      telephoneNumber,
      role,
      formalFullName,
      familiarShortName,
      emails,
      dateOfBirth,
      sex,
      otherSexText,
      alternativeIdentifiers
  }
} = checkoutFormModel;

export default {
  [telephoneNumber.name]: '',
  [role.name]: '',
  [formalFullName.name]: '',
  [familiarShortName.name]: '',
  [emails.name]: '',
  [dateOfBirth.name]: '',
  [sex.name]: false,
  [otherSexText.name]: '',
  [alternativeIdentifiers.name]: ''

};
