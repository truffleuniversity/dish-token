pragma solidity ^0.5.0;

import '../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol';
import '../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Mintable.sol';
import '../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721MetadataMintable.sol';

contract DISHNFT is ERC721Full, ERC721Mintable, ERC721MetadataMintable {
  constructor() ERC721Full("DISH", "DISH") public {
  }
}