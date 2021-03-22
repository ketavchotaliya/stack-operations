import { Add, Dup, Pop, Sub } from './';

class OperatorFinder {
  /**
   * Find appropriate operator from input string
   * @param string operator name in string.
   * @return Operator class object
   */
  public static getOperator(operator: string) {
    switch (operator.toUpperCase()) {
      case 'DUP':
        return Dup;
      case 'POP':
        return Pop;
      case '+':
        return Add;
      case '-':
        return Sub;
    }
  }
}

export default OperatorFinder;
