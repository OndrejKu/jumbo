"use strict";
const JumboMainAbl = require("../../abl/jumbo-main-abl.js");

class JumboMainController {
  init(ucEnv) {
    return JumboMainAbl.init(ucEnv.getUri(), ucEnv.getDtoIn(), ucEnv.getSession());
  }

  load(ucEnv) {
    return JumboMainAbl.load(ucEnv.getUri(), ucEnv.getSession());
  }

  loadBasicData(ucEnv) {
    return JumboMainAbl.loadBasicData(ucEnv.getUri(), ucEnv.getSession());
  }
}

module.exports = new JumboMainController();
