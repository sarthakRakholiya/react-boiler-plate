/****
 * You can put only message which you show in toast or inside validation
 * @toastErrorMessage - in this object you can put only error message of toast
 * @toastSuccessMessage - in this object you can put only success message of toast
 * @validationMessages - in this object you can put only validaton message of form
 */

import { t } from 'i18next';

export const toastErrorMessage = {
  INTERNAL_SERVER_ERROR: t('errorMessage.internalServerError'),
};

export const toastSuccessMessage = {
  LOGIN_SUCCESS: t('successMessage.loginSuccess'),
  LOGOUT_SUCCESS: t('successMessage.logoutSuccess'),
  CHANGE_PASSWORD_SUCCESS: t('successMessage.changePasswordSuccess'),
  EDIT_USER_SUCCESS: t('successMessage.editUserSuccess'),
  ADD_USER_SUCCESS: t('successMessage.addUserSuccess'),
  DELETE_USER_SUCCESS: t('successMessage.deleteUserSuccess'),
};

export const validationMessages = {
  emailRequired: t('validationMesssage.emailRequired'),
  emailValid: t('validationMesssage.emailValid'),
  passwordRequired: t('validationMesssage.passwordRequired'),
  passwordMaxCharacter: t('validationMesssage.passwordMaxCharacter'),
  passwordMinCharacter: t('validationMesssage.passwordMinCharacter'),
  passwordValid: t('validationMesssage.passwordValid'),
  currentPasswordRequired: t('validationMesssage.currentPasswordRequired'),
  confirmPasswordRequired: t('validationMesssage.confirmPasswordRequired'),
  confirmPasswordValid: t('validationMesssage.confirmPasswordValid'),
  userNameRequired: t('validationMesssage.userDesigRequired'),
  userDesigRequired: t('validationMesssage.userDesigRequired'),
  userPerUserRequired: t('validationMesssage.userPerUserRequired'),
};

export {};
