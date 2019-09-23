const DISHNFT = artifacts.require("DISHNFT");

module.exports = function(deployer) {
  deployer.deploy(DISHNFT);
};