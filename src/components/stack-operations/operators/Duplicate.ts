import { Stack } from '../stack';

class Duplicate {
  /**
   * Validate stack length
   * @return true/false in Boolean value.
   */
  public validateInput() {
    const stack = Stack.getStack();

    if (!stack.length) {
      return false;
    }
    return true;
  }

  /**
   * Get top element of stack and Push it again.
   * @return true in Boolean value.
   */
  public stackOperation() {
    const stack = Stack.getStack();

    const lastElement = stack[stack.length - 1];

    Stack.push(lastElement);

    return true;
  }
}

export default new Duplicate();
