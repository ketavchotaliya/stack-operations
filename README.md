# stack-operations

You will be given a string of integers along with the operations to be performed on those
numbers. You need to push numbers directly into the stack.

The operations which need to be performed are,

    ● "DUP": Duplicates the element at stack top.
(There should be at least one element present in the stack to perform this operation.)

    ● "POP": Removes an element from the stack top.
(There should be at least one element present in the stack to perform this operation.)

    ● "+": Remove the top two elements from the stack. Add them and push the result into the stack.
(There should be at least two elements present in the stack to perform this operation.)

    ● "-": Remove the top two elements from the stack. Subtract them and push the result into the stack.
(There should be at least two elements present in the stack to perform this operation &
The top element should be greater than the element below it.)

You need to build a processor for this type of string. And once you are done processing
you should return the stack top. If there is anything wrong, then you should return -1.

# Example 1:

Input : "13 7 20 DUP - +"

Output: 7

# Example 2:

Input : "13 20 12 7 - +"

Output : -1

# Example 3:
Input : "13 20 7 12 - +"

Output: 25

# Example 4:
Input : "12 POP DUP"

Output : -1

# Example 5:
Input : "12 +"

Output : -1


# Dependency:

    This application is built on Node.JS (express.js framework) as well as we used some additional packages for security purpose and unit testing purpose.

    i. express - Node.JS Framework

    ii. express-validator - Request validator

    iii. helmet - Helmet helps you secure your Express apps by setting various HTTP headers.

    iv. underscore - Underscore.js is a utility-belt library for JavaScript

    v. chai - devDependency - Chai.js is a javascript test framework

    vi. chai-http - devDependency - chai-http is used for create http request for unit test

    vii. express-swagger-generator - devDependency - It is used for generating a API documentation

    viii. mochawesome - devDependency - Mochawesome is a custom reporter for use with the Javascript testing framework.

    ix. standard - devDependency - Standard is a JavaScript style guide.
    
# Usage:

    To get the chess pieces movement follow the below steps.

    i. Install the dependencies using npm install command

    ii. Run the Server using 'npm start' command. It will listen on http://localhost:8080

    ii. Hit HTTP Request to URL http://localhost:8080/api/v1/stack-operations/ with POST method with given input parameters

    iii. send request with json body E.g. { "input" : "13 20 7 12 - + 28 POP 35" }

    iv. it will give an appropriate output E.g. { "output: "35"} 
    
    In this way you can get the possible moves of each pieces.

Thanks.

Ketav Chotaliya
