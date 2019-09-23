const DISH777 = artifacts.require('DISH777');

require('../node_modules/openzeppelin-test-helpers/configure')({ web3 });

const { singletons } = require('../node_modules/openzeppelin-test-helpers');


module.exports = async function(deployer, network, accounts) {
  const erc1820 = await singletons.ERC1820Registry(accounts[0]);

  await deployer.deploy(DISH777);
};