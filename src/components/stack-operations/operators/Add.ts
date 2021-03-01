import { Stack } from '../stack';
import { STACK_VALIDATIONS } from '../../../utils/constants';

class Add {
  /**
   * Validate stack length
   * @return true/false in Boolean value.
   */
  public validateInput() {
    const stack = Stack.getStack();

    if (stack.length < STACK_VALIDATIONS.ADD) {
      return false;
    }
    return true;
  }

  /**
   * Remove first two elements from stack, Add then and Push it to stack
   * @return true in Boolean value.
   */
  public addElement() {
    // remove first element from stack
    const firstElement: any = Stack.pop();

    // remove second element from stack
    const secondElement: any = Stack.pop();

    // Add first and second element
    const sum = firstElement + secondElement;

    // add sum of first and second element into stack
    Stack.push(sum);

    return true;
  }
}

export default new Add();
