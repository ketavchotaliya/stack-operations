class Stack {
  stack: number[];

  /**
   * A Constructor function invokes when object is initialized.
   * @param array stack numeric array.
   */
  constructor(stack: number[]) {
    this.stack = stack;
  }

  /**
   * Remove top element of stack.
   * @returns top element of stack
   */
  public pop() {
    return this.stack.pop();
  }

  /**
   * Add element in top of the stack.
   * @param number element numeric value.
   * @return total count of stack in numeric value
   */
  public push(element: number) {
    return this.stack.push(element);
  }

  /**
   * Returns a stack.
   * @returns stack
   */
  public getStack() {
    return this.stack;
  }

  /**
   * It will clear the stack data and return blank stack.
   * @returns blank stack
   */
  public clearStack() {
    return (this.stack = []);
  }
}

export default new Stack([]);
