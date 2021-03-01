// Operator array
export const VALID_OPERATOR: string[] = ['DUP', 'POP', '+', '-'];

// Regex for validating input string
export const INPUT_REGEX: string = `^(?:[0-9 s W(DUP|POP|+|\\-)W])*$`;

export const STACK_VALIDATIONS = {
  ADD: 2, // Minimum 2 element must be there in stack
  SUB: 2, // Minimum 2 element must be there in stack
  DUP: 1, // Minimum 1 element must be there in stack
  POP: 1 //  Minimum 1 element must be there in stack
};
