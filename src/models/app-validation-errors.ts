import { ValidationErrors } from '@angular/forms';

export type AppValidationError = Record<
  string,
  {
    messageTranslateKey: string;
  }
>;

export type AppErrKey = keyof ValidationErrors;

export type AppValidationErrors = ValidationErrors & AppValidationError;

export const isAppValidationError = (obj: any) => { // eslint-disable-line
  return obj && typeof obj === 'object' && obj.hasOwnProperty('messageTranslateKey'); // eslint-disable-line
};
