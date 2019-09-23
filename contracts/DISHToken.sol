pragma solidity ^0.5.0;

import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";

contract DISHToken is ERC20, ERC20Mintable, ERC20Pausable, ERC20Burnable {
    using SafeERC20 for ERC20;

    string public name = "DISHToken";
    string public symbol = "DT";
    uint public decimals = 18;
    uint public INITIAL_SUPPLY = 1000;

    constructor() public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}