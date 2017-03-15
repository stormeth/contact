var Contact = artifacts.require("./Contact.sol");

module.exports = function(deployer) {
  deployer.deploy(Contact, "jim", 52);
};
