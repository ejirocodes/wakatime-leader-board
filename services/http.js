export default class HttpService {
  /**
   * @constructor
   */
  constructor(api) {
    this.http = api
  }

  getLeaders() {
    return this.http(`https://wakatime-wrapper.herokuapp.com/leaders`)
  }
}
