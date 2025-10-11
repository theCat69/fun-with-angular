import { ValidationErrorParserPipe } from './validation-error-parser-pipe';

describe('ValidationErrorParserPipe', () => {
  it('create an instance', () => {
    const pipe = new ValidationErrorParserPipe();
    expect(pipe).toBeTruthy();
  });
});
