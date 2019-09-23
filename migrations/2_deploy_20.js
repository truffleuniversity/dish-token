const DISHToken = artifacts.require("DISHToken");

module.exports = function(deployer) {
  deployer.deploy(DISHToken);
};