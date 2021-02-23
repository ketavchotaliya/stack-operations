class Stack {
  stack: number[];
  constructor(stack: number[]) {
    this.stack = stack;
  }

  // This function perform POP operations
  public pop() {
    this.stack.pop();

    return this.stack;
  }

  // this function perform PUSH operations
  public push(element: number) {
    this.stack.push(element);

    return this.stack;
  }
}

export default new Stack([]);
