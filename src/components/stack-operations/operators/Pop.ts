import { Stack } from '../stack';

class Pop {
  /**
   * Validate stack length.
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
   * Remove top element of stack.
   * @return true in Boolean value.
   */
  public removeElement() {
    Stack.pop();
    return true;
  }
}

export default new Pop();
