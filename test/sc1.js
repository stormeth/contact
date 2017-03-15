var Contact = artifacts.require("./Contact.sol");

contract('Sc1', function(accounts) {

    it("t1", function() {
        var meta;

        return Contact.new("bill",51).then(function(instance) {
            meta = instance;

            return meta.age.call();
        }).then(function(age) {
            myage = age.toNumber();
            console.log('age', myage);
        });
    });
});
