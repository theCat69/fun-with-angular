import { Pipe, PipeTransform } from '@angular/core';
import { AppValidationErrors, isAppValidationError } from '../../models/app-validation-errors';

@Pipe({
  name: 'validationErrorParser',
})
export class ValidationErrorParserPipe implements PipeTransform {
  transform(value: AppValidationErrors | null): string | null {
    if (value) {
      const keys = Object.keys(value);
      const first = value[keys[0]];
      if (isAppValidationError(first)) {
        return first.messageTranslateKey;
      }
      return first;
    }
    return null;
  }
}
