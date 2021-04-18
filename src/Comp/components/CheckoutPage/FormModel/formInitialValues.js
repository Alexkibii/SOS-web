import registerFormModel from './registerFormModel';
const {
  formField: {
    members: [{
      telephoneNumber,
      role,
      formalFullName,
      familiarShortName,
      emails,
      dateOfBirth,
      sex,
      otherSexText,
      alternativeIdentifiers }],
  }
} = registerFormModel;



export default {

    [telephoneNumber.name]:'',
    [role.name]:'',
    [formalFullName.name]:'',
    [familiarShortName.name]:'',
    [emails.name]:'',
    [dateOfBirth.name]:'',
    [sex.name]:'',
    [otherSexText.name]:'',
    [alternativeIdentifiers.name]:'',
    
};
