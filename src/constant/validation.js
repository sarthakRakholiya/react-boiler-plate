/****
 * You can put only validation schema of different for and 
 * after export from here you can use this in Formik valdation schema
 */

import * as Yup from 'yup';
import { PASSWORD_MAX_CHARACTER, PASSWORD_MIN_CHARACTER } from './constant';
import { PASSWORD_REGEX } from './regex';
import { validationMessages } from './message';

// ***** start - login form validation schema for formik *****
export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .required(validationMessages.emailRequired)
    .email(validationMessages.emailValid),

  password: Yup.string()
    .trim()
    .required(validationMessages.passwordRequired)
    .min(PASSWORD_MIN_CHARACTER, validationMessages.passwordMinCharacter)
    .max(PASSWORD_MAX_CHARACTER, validationMessages.passwordMaxCharacter)
    .matches(PASSWORD_REGEX, validationMessages.passwordValid),
});
// ***** end - login form validation schema for formik *****

// ***** start - change password form validation schema for formik *****
export const changePasswordValidationSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .trim()
    .required(validationMessages.currentPasswordRequired),
  newPassword: Yup.string()
    .trim()
    .required(validationMessages.passwordRequired)
    .min(PASSWORD_MIN_CHARACTER, validationMessages.passwordMinCharacter)
    .max(PASSWORD_MAX_CHARACTER, validationMessages.passwordMaxCharacter)
    .matches(PASSWORD_REGEX, validationMessages.passwordValid),
  confirmPassword: Yup.string()
    .trim()
    .required(validationMessages.confirmPasswordRequired)
    .oneOf([Yup.ref('newPassword')], validationMessages.confirmPasswordValid),
});
// ***** end - change password form validation schema for formik *****

// ***** start - user edit form validation schema for formik *****
export const userValidation = Yup.object().shape({
  userName: Yup.string().trim().required(validationMessages.userNameRequired),
  userDesignation: Yup.string()
    .trim()
    .required(validationMessages.userDesigRequired),

  perDayUse: Yup.string()
    .trim()
    .required(validationMessages.userPerUserRequired),
});
// ***** end - user edit form validation schema for formik *****