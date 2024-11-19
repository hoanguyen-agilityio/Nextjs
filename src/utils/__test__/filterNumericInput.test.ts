import { filterNumericInput } from '@/utils';

describe('filterNumericInput', () => {
  let mockInputElement: HTMLInputElement;

  beforeEach(() => {
    // Mock an input element
    mockInputElement = document.createElement('input');
  });

  test('should allow only numeric characters, a single period, and a single comma', () => {
    mockInputElement.value = '123.45,67';
    const event = {
      currentTarget: mockInputElement,
    } as React.FormEvent<HTMLInputElement>;

    filterNumericInput(event);

    expect(mockInputElement.value).toBe('123.45,67');
  });

  test('should remove invalid characters', () => {
    mockInputElement.value = '123a.45b,67!';
    const event = {
      currentTarget: mockInputElement,
    } as React.FormEvent<HTMLInputElement>;

    filterNumericInput(event);

    expect(mockInputElement.value).toBe('123.45,67');
  });

  test('should handle empty input gracefully', () => {
    mockInputElement.value = '';
    const event = {
      currentTarget: mockInputElement,
    } as React.FormEvent<HTMLInputElement>;

    filterNumericInput(event);

    expect(mockInputElement.value).toBe('');
  });

  test('should handle input with only invalid characters', () => {
    mockInputElement.value = 'abc!@#';
    const event = {
      currentTarget: mockInputElement,
    } as React.FormEvent<HTMLInputElement>;

    filterNumericInput(event);

    expect(mockInputElement.value).toBe('');
  });

  test('should allow valid input according to REGEX.NUMERIC_INPUT', () => {
    const validInputs = ['123', '123.45', '123,456', '123.45,67'];
    validInputs.forEach((input) => {
      mockInputElement.value = input;
      const event = {
        currentTarget: mockInputElement,
      } as React.FormEvent<HTMLInputElement>;

      filterNumericInput(event);

      expect(mockInputElement.value).toBe(input);
    });
  });
});
