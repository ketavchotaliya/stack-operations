import { STACK_VALIDATIONS } from '../../../utils/constants';
import { Stack } from '../stack';

class Subtract {
  /**
   * Validate stack length.
   * Validate first element is greater than second element of stack.
   * @return true/false in Boolean value.
   */
  public validateInput() {
    const stack = Stack.getStack();
    const stackLength = stack.length;

    // Check at least 2 elements must be available in stack
    if (stackLength < STACK_VALIDATIONS.SUB) {
      return false;
    }

    const firstElement = stack[stackLength - 1];
    const secondElement = stack[stackLength - 2];

    // Check first element should not less than second element
    if (firstElement < secondElement) {
      return false;
    }
    return true;
  }

  /**
   * Remove first two elements from stack, Subtract first element from second element and Push it to stack
   * @return true in Boolean value.
   */
  public addElement() {
    // remove first element from stack
    const firstElement: any = Stack.pop();

    // remove second element from stack
    const secondElement: any = Stack.pop();

    // Subtract first and second element
    const subtract = firstElement - secondElement;

    // add subtract of first and second element into stack
    Stack.push(subtract);

    return true;
  }
}

export default new Subtract();
