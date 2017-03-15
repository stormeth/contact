pragma solidity ^0.4.0;

contract Contact {
    string public firstname;
    uint public age;

    function Contact(string myname, uint myage) {
        firstname = myname;
        age = myage;
    }
}
