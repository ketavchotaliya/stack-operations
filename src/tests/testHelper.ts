import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import STATUS_CODES from 'http-status-codes';

class testHelper {
  expect: any;

  /**
   * testHelper construction
   */
  /**
   * A Constructor function invokes when object is initialized.
   * It will initialize the invoke chai using chai-http method.
   * It will assign expect method of chai
   */

  constructor() {
    chai.use(chaiHttp);
    this.expect = chai.expect;
  }

  /**
   * Function for sending GET request using chai-http
   * @param url
   * @param params
   * @returns HTTP Response
   */
  public chaiGetRequest(url: string, params: any = {}) {
    return chai
      .request(app)
      .get(url)
      .query(params)
      .then((res) => {
        return res;
      });
  }

  /**
   * Function for sending POST request using chai-http
   * @param url
   * @param params
   * @returns HTTP Response
   */
  public chaiPostRequest(url: string, params: any) {
    return chai
      .request(app)
      .post(url)
      .send(params)
      .then((res) => {
        return res;
      });
  }

  /**
   * Function for sending empty body in HTTP Request
   * @param url
   * @param httpMethod
   * @param params
   */
  public checkEmptyBody(url: string, httpMethod: string, params: any) {
    it('send empty body in request should have status code 422', async () => {
      try {
        let res;
        switch (httpMethod.toLowerCase()) {
          case 'post':
            res = await this.chaiPostRequest(url, params);
            break;
        }

        this.checkValidOutput(res);
        this.expect(res).to.have.status(STATUS_CODES.UNPROCESSABLE_ENTITY);
      } catch (err) {
        this.checkValidOutput(err);
        this.expect(err).to.have.status(STATUS_CODES.UNPROCESSABLE_ENTITY);
      }
    });
  }

  /**
   * Function for validating Response object
   * @param res
   * @returns Expect object of Chai
   */
  public checkValidOutput(res: any) {
    return (
      this.expect(res).to.be.not.null &&
      this.expect(res).to.be.json &&
      this.expect(res.body).to.be.a('object') &&
      this.expect(res.body).to.have.property('message')
    );
  }
}

export default new testHelper();
