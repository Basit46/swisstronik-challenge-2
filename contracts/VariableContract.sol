// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract VariableContract {
    //A string variable 
    string private stringVariable;

    //Default variable set to "Hello World"
    constructor() {
        stringVariable = "Hello World"; 
    }

    //func to set this string variable to a new value
    function setStringVariable(string memory newValue) public {
        stringVariable = newValue;
    }

    //func to get the current value of the string variable
    function getSringVariable() public view returns (string memory) {
        return stringVariable;
    }
}
