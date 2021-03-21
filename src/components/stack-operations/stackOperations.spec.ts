import chai from 'chai';
import testHelper from '../../tests/testHelper';
import STATUS_CODES from 'http-status-codes';

const API_BASE_URL: string = '/stack-operations/api/v1/operation';

// Test cases for Stack Operations
describe('Test cases for Stack-Operations', () => {
  const expect = chai.expect;

  // Send Invalid HTTP Method
  it('Send Invalid HTTP Method, It will throw 404 Not found Error', async () => {
    const res = await testHelper.chaiGetRequest(API_BASE_URL);
    expect(res).to.have.status(STATUS_CODES.NOT_FOUND);
  });

  // send empty request body, it will return 422 UNPROCESSABLE_ENTITY
  testHelper.checkEmptyBody(API_BASE_URL, 'POST', {});

  // send invalid input key, it will return 422 UNPROCESSABLE_ENTITY
  it('send invalid input key, it will return 422 UNPROCESSABLE_ENTITY', async () => {
    const res = await testHelper.chaiPostRequest(API_BASE_URL, { 'stack-queue': '1 2 3 4' });
    testHelper.checkValidOutput(res);
    expect(res.body.message).to.have.string('Input key is required');
  });

  // send empty value in input key, it will return 422 UNPROCESSABLE_ENTITY
  it('send empty value in input key, it will return 422 UNPROCESSABLE_ENTITY', async () => {
    const res = await testHelper.chaiPostRequest(API_BASE_URL, { input: '' });
    testHelper.checkValidOutput(res);
    expect(res.body.message).to.have.string('Input key is required');
  });

  // send unexpected value in input, it will return 422 UNPROCESSABLE_ENTITY (Input must contains 0 to 9, +, -, DUP, POP, SUB and white space)
  it('send unexpected value in input, it will return 422 UNPROCESSABLE_ENTITY', async () => {
    const res = await testHelper.chaiPostRequest(API_BASE_URL, { input: '12 45 HI 89 HELLO' });
    testHelper.checkValidOutput(res);
    expect(res.body.message).to.have.string(
      'Input should contain 0-9 Digits, White Space and Operators (DUP, POP, +, -) only'
    );
  });

  // send valid input, it will return 200 OK
  it('send valid input, it will return 200 OK', async () => {
    const res = await testHelper.chaiPostRequest(API_BASE_URL, { input: '13 7 20 DUP - +' });
    testHelper.checkValidOutput(res);
    expect(res.body.payload).to.have.property('output');
    expect(res.body.payload.output).to.be.equals(7);
  });

  // send valid input, it will return 200 OK
  it('send valid input, it will return 200 OK', async () => {
    const res = await testHelper.chaiPostRequest(API_BASE_URL, { input: '13 20 7 12 - +' });
    testHelper.checkValidOutput(res);
    expect(res.body.payload).to.have.property('output');
    expect(res.body.payload.output).to.be.equals(25);
  });

  // send invalid input string, it will return 200 OK
  it('send invalid input, it will return 200 OK', async () => {
    const res = await testHelper.chaiPostRequest(API_BASE_URL, { input: '13 20 12 7 - +' });
    testHelper.checkValidOutput(res);
    expect(res.body.payload).to.have.property('output');
    expect(res.body.payload.output).to.be.equals(-1);
  });

  // send invalid input string, it will return 200 OK
  it('send invalid input, it will return 200 OK', async () => {
    const res = await testHelper.chaiPostRequest(API_BASE_URL, { input: '12 POP DUP' });
    testHelper.checkValidOutput(res);
    expect(res.body.payload).to.have.property('output');
    expect(res.body.payload.output).to.be.equals(-1);
  });

  // send invalid input string, it will return 200 OK
  it('send invalid input, it will return 200 OK', async () => {
    const res = await testHelper.chaiPostRequest(API_BASE_URL, { input: '12 +' });
    testHelper.checkValidOutput(res);
    expect(res.body.payload).to.have.property('output');
    expect(res.body.payload.output).to.be.equals(-1);
  });

  // send invalid input string, it will return 200 OK (Empty Array)
  it('send invalid input, it will return 200 OK (Empty Array', async () => {
    const res = await testHelper.chaiPostRequest(API_BASE_URL, { input: '12 POP' });
    testHelper.checkValidOutput(res);
    expect(res.body.payload).to.have.property('output');
    expect(res.body.payload.output).to.be.an('array');
  });
});
