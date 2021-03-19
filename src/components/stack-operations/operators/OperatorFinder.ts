import { Add, Dup, Pop, Sub } from './';

class OperatorFinder {
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
