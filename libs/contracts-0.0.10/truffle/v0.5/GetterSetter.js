'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const contract = require('@truffle/contract')
const GetterSetter = contract({
 "contractName": "GetterSetter",
 "abi": [
  {
   "constant": true,
   "inputs": [],
   "name": "requestId",
   "outputs": [
    {
     "name": "",
     "type": "bytes32"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "constant": true,
   "inputs": [],
   "name": "getBytes",
   "outputs": [
    {
     "name": "",
     "type": "bytes"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "constant": true,
   "inputs": [],
   "name": "getBytes32",
   "outputs": [
    {
     "name": "",
     "type": "bytes32"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_requestId",
     "type": "bytes32"
    },
    {
     "name": "_value",
     "type": "uint256"
    }
   ],
   "name": "requestedUint256",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_requestId",
     "type": "bytes32"
    },
    {
     "name": "_value",
     "type": "bytes"
    }
   ],
   "name": "requestedBytes",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": true,
   "inputs": [],
   "name": "getUint256",
   "outputs": [
    {
     "name": "",
     "type": "uint256"
    }
   ],
   "payable": false,
   "stateMutability": "view",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_value",
     "type": "bytes32"
    }
   ],
   "name": "setBytes32",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_value",
     "type": "uint256"
    }
   ],
   "name": "setUint256",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_value",
     "type": "bytes"
    }
   ],
   "name": "setBytes",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "constant": false,
   "inputs": [
    {
     "name": "_requestId",
     "type": "bytes32"
    },
    {
     "name": "_value",
     "type": "bytes32"
    }
   ],
   "name": "requestedBytes32",
   "outputs": [],
   "payable": false,
   "stateMutability": "nonpayable",
   "type": "function"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "from",
     "type": "address"
    },
    {
     "indexed": true,
     "name": "value",
     "type": "bytes32"
    }
   ],
   "name": "SetBytes32",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "from",
     "type": "address"
    },
    {
     "indexed": true,
     "name": "value",
     "type": "uint256"
    }
   ],
   "name": "SetUint256",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": true,
     "name": "from",
     "type": "address"
    },
    {
     "indexed": false,
     "name": "value",
     "type": "bytes"
    }
   ],
   "name": "SetBytes",
   "type": "event"
  },
  {
   "anonymous": false,
   "inputs": [
    {
     "indexed": false,
     "name": "b32",
     "type": "bytes32"
    },
    {
     "indexed": false,
     "name": "u256",
     "type": "uint256"
    },
    {
     "indexed": false,
     "name": "b322",
     "type": "bytes32"
    }
   ],
   "name": "Output",
   "type": "event"
  }
 ],
 "evm": {
  "bytecode": {
   "linkReferences": {},
   "object": "0x608060405234801561001057600080fd5b50610670806100206000396000f3fe6080604052600436106100a25763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416626d6cae81146100a75780630bcd3b33146100ce5780631f903037146101585780633345b4d01461016d57806346ddd1ff1461019f5780636889597914610259578063c2b12a731461026e578063d2282dc514610298578063da359dc8146102c2578063ed53e51114610375575b600080fd5b3480156100b357600080fd5b506100bc6103a5565b60408051918252519081900360200190f35b3480156100da57600080fd5b506100e36103ab565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561011d578181015183820152602001610105565b50505050905090810190601f16801561014a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016457600080fd5b506100bc610457565b34801561017957600080fd5b5061019d6004803603604081101561019057600080fd5b508035906020013561045d565b005b3480156101ab57600080fd5b5061019d600480360360408110156101c257600080fd5b813591908101906040810160208201356401000000008111156101e457600080fd5b8201836020820111156101f657600080fd5b8035906020019184600183028401116401000000008311171561021857600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061046f945050505050565b34801561026557600080fd5b506100bc61047d565b34801561027a57600080fd5b5061019d6004803603602081101561029157600080fd5b5035610483565b3480156102a457600080fd5b5061019d600480360360208110156102bb57600080fd5b50356104b6565b3480156102ce57600080fd5b5061019d600480360360208110156102e557600080fd5b81019060208101813564010000000081111561030057600080fd5b82018360208201111561031257600080fd5b8035906020019184600183028401116401000000008311171561033457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506104eb945050505050565b34801561038157600080fd5b5061019d6004803603604081101561039857600080fd5b508035906020013561059b565b60025481565b6003805460408051602060026001851615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f8101849004840282018401909252818152929183018282801561044f5780601f106104245761010080835404028352916020019161044f565b820191906000526020600020905b81548152906001019060200180831161043257829003601f168201915b505050505081565b60005481565b600282905561046b816104b6565b5050565b600282905561046b816104eb565b60015481565b6000818155604051829133917fdc73ee99832252105ed74a404690c2f10ad1b294cbbeb0ff5cded48ef2aa437d9190a350565b6001819055604051819033907fd943f063acdb1c6f206cf6a3f6d1ba39687bcc07feb7f44019bdbd4773c9c28d90600090a350565b80516104fe9060039060208401906105a9565b50604080516020808252835181830152835133937ff22a519d38e59bc517532f666f8da532fdd5356e68d617191e82a8fdcc8abdcf9386939092839283019185019080838360005b8381101561055e578181015183820152602001610546565b50505050905090810190601f16801561058b5780820380516001836020036101000a031916815260200191505b509250505060405180910390a250565b600282905561046b81610483565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106105ea57805160ff1916838001178555610617565b82800160010185558215610617579182015b828111156106175782518255916020019190600101906105fc565b50610623929150610627565b5090565b61064191905b80821115610623576000815560010161062d565b9056fea165627a7a723058208257f47433fdfa710733d8c05153dc043cee9b637c45792ce99d9dcb37ae56b60029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x670 DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0xA2 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH3 0x6D6CAE DUP2 EQ PUSH2 0xA7 JUMPI DUP1 PUSH4 0xBCD3B33 EQ PUSH2 0xCE JUMPI DUP1 PUSH4 0x1F903037 EQ PUSH2 0x158 JUMPI DUP1 PUSH4 0x3345B4D0 EQ PUSH2 0x16D JUMPI DUP1 PUSH4 0x46DDD1FF EQ PUSH2 0x19F JUMPI DUP1 PUSH4 0x68895979 EQ PUSH2 0x259 JUMPI DUP1 PUSH4 0xC2B12A73 EQ PUSH2 0x26E JUMPI DUP1 PUSH4 0xD2282DC5 EQ PUSH2 0x298 JUMPI DUP1 PUSH4 0xDA359DC8 EQ PUSH2 0x2C2 JUMPI DUP1 PUSH4 0xED53E511 EQ PUSH2 0x375 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBC PUSH2 0x3A5 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xE3 PUSH2 0x3AB JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP4 MLOAD DUP2 DUP4 ADD MSTORE DUP4 MLOAD SWAP2 SWAP3 DUP4 SWAP3 SWAP1 DUP4 ADD SWAP2 DUP6 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x11D JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x105 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x14A JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x164 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBC PUSH2 0x457 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x179 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19D PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x190 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD CALLDATALOAD PUSH2 0x45D JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1AB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19D PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x1C2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD SWAP2 SWAP1 DUP2 ADD SWAP1 PUSH1 0x40 DUP2 ADD PUSH1 0x20 DUP3 ADD CALLDATALOAD PUSH5 0x100000000 DUP2 GT ISZERO PUSH2 0x1E4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 ADD DUP4 PUSH1 0x20 DUP3 ADD GT ISZERO PUSH2 0x1F6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP2 DUP5 PUSH1 0x1 DUP4 MUL DUP5 ADD GT PUSH5 0x100000000 DUP4 GT OR ISZERO PUSH2 0x218 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH1 0x0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP SWAP3 SWAP6 POP PUSH2 0x46F SWAP5 POP POP POP POP POP JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x265 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBC PUSH2 0x47D JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x27A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19D PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x291 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x483 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2A4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19D PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x2BB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x4B6 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2CE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19D PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x2E5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 PUSH1 0x20 DUP2 ADD DUP2 CALLDATALOAD PUSH5 0x100000000 DUP2 GT ISZERO PUSH2 0x300 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 ADD DUP4 PUSH1 0x20 DUP3 ADD GT ISZERO PUSH2 0x312 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP2 DUP5 PUSH1 0x1 DUP4 MUL DUP5 ADD GT PUSH5 0x100000000 DUP4 GT OR ISZERO PUSH2 0x334 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH1 0x0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP SWAP3 SWAP6 POP PUSH2 0x4EB SWAP5 POP POP POP POP POP JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x381 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19D PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x398 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD CALLDATALOAD PUSH2 0x59B JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x3 DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x2 PUSH1 0x1 DUP6 AND ISZERO PUSH2 0x100 MUL PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP3 ADD DUP5 ADD SWAP1 SWAP3 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0x44F JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x424 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x44F JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x432 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 DUP3 SWAP1 SSTORE PUSH2 0x46B DUP2 PUSH2 0x4B6 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x2 DUP3 SWAP1 SSTORE PUSH2 0x46B DUP2 PUSH2 0x4EB JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP2 DUP2 SSTORE PUSH1 0x40 MLOAD DUP3 SWAP2 CALLER SWAP2 PUSH32 0xDC73EE99832252105ED74A404690C2F10AD1B294CBBEB0FF5CDED48EF2AA437D SWAP2 SWAP1 LOG3 POP JUMP JUMPDEST PUSH1 0x1 DUP2 SWAP1 SSTORE PUSH1 0x40 MLOAD DUP2 SWAP1 CALLER SWAP1 PUSH32 0xD943F063ACDB1C6F206CF6A3F6D1BA39687BCC07FEB7F44019BDBD4773C9C28D SWAP1 PUSH1 0x0 SWAP1 LOG3 POP JUMP JUMPDEST DUP1 MLOAD PUSH2 0x4FE SWAP1 PUSH1 0x3 SWAP1 PUSH1 0x20 DUP5 ADD SWAP1 PUSH2 0x5A9 JUMP JUMPDEST POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP4 MLOAD DUP2 DUP4 ADD MSTORE DUP4 MLOAD CALLER SWAP4 PUSH32 0xF22A519D38E59BC517532F666F8DA532FDD5356E68D617191E82A8FDCC8ABDCF SWAP4 DUP7 SWAP4 SWAP1 SWAP3 DUP4 SWAP3 DUP4 ADD SWAP2 DUP6 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x55E JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x546 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x58B JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 POP JUMP JUMPDEST PUSH1 0x2 DUP3 SWAP1 SSTORE PUSH2 0x46B DUP2 PUSH2 0x483 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x5EA JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x617 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x617 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x617 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x5FC JUMP JUMPDEST POP PUSH2 0x623 SWAP3 SWAP2 POP PUSH2 0x627 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x641 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x623 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x62D JUMP JUMPDEST SWAP1 JUMP INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 DUP3 JUMPI DELEGATECALL PUSH21 0x33FDFA710733D8C05153DC043CEE9B637C45792CE9 SWAP14 SWAP14 0xcb CALLDATACOPY 0xae JUMP 0xb6 STOP 0x29 ",
   "sourceMap": "103:1122:25:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;103:1122:25;;;;;;;"
  },
  "deployedBytecode": {
   "linkReferences": {},
   "object": "0x6080604052600436106100a25763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416626d6cae81146100a75780630bcd3b33146100ce5780631f903037146101585780633345b4d01461016d57806346ddd1ff1461019f5780636889597914610259578063c2b12a731461026e578063d2282dc514610298578063da359dc8146102c2578063ed53e51114610375575b600080fd5b3480156100b357600080fd5b506100bc6103a5565b60408051918252519081900360200190f35b3480156100da57600080fd5b506100e36103ab565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561011d578181015183820152602001610105565b50505050905090810190601f16801561014a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561016457600080fd5b506100bc610457565b34801561017957600080fd5b5061019d6004803603604081101561019057600080fd5b508035906020013561045d565b005b3480156101ab57600080fd5b5061019d600480360360408110156101c257600080fd5b813591908101906040810160208201356401000000008111156101e457600080fd5b8201836020820111156101f657600080fd5b8035906020019184600183028401116401000000008311171561021857600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061046f945050505050565b34801561026557600080fd5b506100bc61047d565b34801561027a57600080fd5b5061019d6004803603602081101561029157600080fd5b5035610483565b3480156102a457600080fd5b5061019d600480360360208110156102bb57600080fd5b50356104b6565b3480156102ce57600080fd5b5061019d600480360360208110156102e557600080fd5b81019060208101813564010000000081111561030057600080fd5b82018360208201111561031257600080fd5b8035906020019184600183028401116401000000008311171561033457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506104eb945050505050565b34801561038157600080fd5b5061019d6004803603604081101561039857600080fd5b508035906020013561059b565b60025481565b6003805460408051602060026001851615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f8101849004840282018401909252818152929183018282801561044f5780601f106104245761010080835404028352916020019161044f565b820191906000526020600020905b81548152906001019060200180831161043257829003601f168201915b505050505081565b60005481565b600282905561046b816104b6565b5050565b600282905561046b816104eb565b60015481565b6000818155604051829133917fdc73ee99832252105ed74a404690c2f10ad1b294cbbeb0ff5cded48ef2aa437d9190a350565b6001819055604051819033907fd943f063acdb1c6f206cf6a3f6d1ba39687bcc07feb7f44019bdbd4773c9c28d90600090a350565b80516104fe9060039060208401906105a9565b50604080516020808252835181830152835133937ff22a519d38e59bc517532f666f8da532fdd5356e68d617191e82a8fdcc8abdcf9386939092839283019185019080838360005b8381101561055e578181015183820152602001610546565b50505050905090810190601f16801561058b5780820380516001836020036101000a031916815260200191505b509250505060405180910390a250565b600282905561046b81610483565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106105ea57805160ff1916838001178555610617565b82800160010185558215610617579182015b828111156106175782518255916020019190600101906105fc565b50610623929150610627565b5090565b61064191905b80821115610623576000815560010161062d565b9056fea165627a7a723058208257f47433fdfa710733d8c05153dc043cee9b637c45792ce99d9dcb37ae56b60029",
   "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0xA2 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH3 0x6D6CAE DUP2 EQ PUSH2 0xA7 JUMPI DUP1 PUSH4 0xBCD3B33 EQ PUSH2 0xCE JUMPI DUP1 PUSH4 0x1F903037 EQ PUSH2 0x158 JUMPI DUP1 PUSH4 0x3345B4D0 EQ PUSH2 0x16D JUMPI DUP1 PUSH4 0x46DDD1FF EQ PUSH2 0x19F JUMPI DUP1 PUSH4 0x68895979 EQ PUSH2 0x259 JUMPI DUP1 PUSH4 0xC2B12A73 EQ PUSH2 0x26E JUMPI DUP1 PUSH4 0xD2282DC5 EQ PUSH2 0x298 JUMPI DUP1 PUSH4 0xDA359DC8 EQ PUSH2 0x2C2 JUMPI DUP1 PUSH4 0xED53E511 EQ PUSH2 0x375 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xB3 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBC PUSH2 0x3A5 JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD SWAP2 DUP3 MSTORE MLOAD SWAP1 DUP2 SWAP1 SUB PUSH1 0x20 ADD SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0xDA JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xE3 PUSH2 0x3AB JUMP JUMPDEST PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP4 MLOAD DUP2 DUP4 ADD MSTORE DUP4 MLOAD SWAP2 SWAP3 DUP4 SWAP3 SWAP1 DUP4 ADD SWAP2 DUP6 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x11D JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x105 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x14A JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x164 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBC PUSH2 0x457 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x179 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19D PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x190 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD CALLDATALOAD PUSH2 0x45D JUMP JUMPDEST STOP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x1AB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19D PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x1C2 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 CALLDATALOAD SWAP2 SWAP1 DUP2 ADD SWAP1 PUSH1 0x40 DUP2 ADD PUSH1 0x20 DUP3 ADD CALLDATALOAD PUSH5 0x100000000 DUP2 GT ISZERO PUSH2 0x1E4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 ADD DUP4 PUSH1 0x20 DUP3 ADD GT ISZERO PUSH2 0x1F6 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP2 DUP5 PUSH1 0x1 DUP4 MUL DUP5 ADD GT PUSH5 0x100000000 DUP4 GT OR ISZERO PUSH2 0x218 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH1 0x0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP SWAP3 SWAP6 POP PUSH2 0x46F SWAP5 POP POP POP POP POP JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x265 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0xBC PUSH2 0x47D JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x27A JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19D PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x291 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x483 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2A4 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19D PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x2BB JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP CALLDATALOAD PUSH2 0x4B6 JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x2CE JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19D PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x20 DUP2 LT ISZERO PUSH2 0x2E5 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP2 ADD SWAP1 PUSH1 0x20 DUP2 ADD DUP2 CALLDATALOAD PUSH5 0x100000000 DUP2 GT ISZERO PUSH2 0x300 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP3 ADD DUP4 PUSH1 0x20 DUP3 ADD GT ISZERO PUSH2 0x312 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD SWAP2 DUP5 PUSH1 0x1 DUP4 MUL DUP5 ADD GT PUSH5 0x100000000 DUP4 GT OR ISZERO PUSH2 0x334 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST SWAP2 SWAP1 DUP1 DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP4 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP4 DUP4 DUP1 DUP3 DUP5 CALLDATACOPY PUSH1 0x0 SWAP3 ADD SWAP2 SWAP1 SWAP2 MSTORE POP SWAP3 SWAP6 POP PUSH2 0x4EB SWAP5 POP POP POP POP POP JUMP JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x381 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19D PUSH1 0x4 DUP1 CALLDATASIZE SUB PUSH1 0x40 DUP2 LT ISZERO PUSH2 0x398 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP DUP1 CALLDATALOAD SWAP1 PUSH1 0x20 ADD CALLDATALOAD PUSH2 0x59B JUMP JUMPDEST PUSH1 0x2 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x3 DUP1 SLOAD PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x2 PUSH1 0x1 DUP6 AND ISZERO PUSH2 0x100 MUL PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF ADD SWAP1 SWAP5 AND SWAP4 SWAP1 SWAP4 DIV PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP3 ADD DUP5 ADD SWAP1 SWAP3 MSTORE DUP2 DUP2 MSTORE SWAP3 SWAP2 DUP4 ADD DUP3 DUP3 DUP1 ISZERO PUSH2 0x44F JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x424 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x44F JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x432 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP DUP2 JUMP JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x2 DUP3 SWAP1 SSTORE PUSH2 0x46B DUP2 PUSH2 0x4B6 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x2 DUP3 SWAP1 SSTORE PUSH2 0x46B DUP2 PUSH2 0x4EB JUMP JUMPDEST PUSH1 0x1 SLOAD DUP2 JUMP JUMPDEST PUSH1 0x0 DUP2 DUP2 SSTORE PUSH1 0x40 MLOAD DUP3 SWAP2 CALLER SWAP2 PUSH32 0xDC73EE99832252105ED74A404690C2F10AD1B294CBBEB0FF5CDED48EF2AA437D SWAP2 SWAP1 LOG3 POP JUMP JUMPDEST PUSH1 0x1 DUP2 SWAP1 SSTORE PUSH1 0x40 MLOAD DUP2 SWAP1 CALLER SWAP1 PUSH32 0xD943F063ACDB1C6F206CF6A3F6D1BA39687BCC07FEB7F44019BDBD4773C9C28D SWAP1 PUSH1 0x0 SWAP1 LOG3 POP JUMP JUMPDEST DUP1 MLOAD PUSH2 0x4FE SWAP1 PUSH1 0x3 SWAP1 PUSH1 0x20 DUP5 ADD SWAP1 PUSH2 0x5A9 JUMP JUMPDEST POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 DUP1 DUP3 MSTORE DUP4 MLOAD DUP2 DUP4 ADD MSTORE DUP4 MLOAD CALLER SWAP4 PUSH32 0xF22A519D38E59BC517532F666F8DA532FDD5356E68D617191E82A8FDCC8ABDCF SWAP4 DUP7 SWAP4 SWAP1 SWAP3 DUP4 SWAP3 DUP4 ADD SWAP2 DUP6 ADD SWAP1 DUP1 DUP4 DUP4 PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0x55E JUMPI DUP2 DUP2 ADD MLOAD DUP4 DUP3 ADD MSTORE PUSH1 0x20 ADD PUSH2 0x546 JUMP JUMPDEST POP POP POP POP SWAP1 POP SWAP1 DUP2 ADD SWAP1 PUSH1 0x1F AND DUP1 ISZERO PUSH2 0x58B JUMPI DUP1 DUP3 SUB DUP1 MLOAD PUSH1 0x1 DUP4 PUSH1 0x20 SUB PUSH2 0x100 EXP SUB NOT AND DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP JUMPDEST POP SWAP3 POP POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG2 POP JUMP JUMPDEST PUSH1 0x2 DUP3 SWAP1 SSTORE PUSH2 0x46B DUP2 PUSH2 0x483 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x5EA JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x617 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x617 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x617 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x5FC JUMP JUMPDEST POP PUSH2 0x623 SWAP3 SWAP2 POP PUSH2 0x627 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x641 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x623 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x62D JUMP JUMPDEST SWAP1 JUMP INVALID LOG1 PUSH6 0x627A7A723058 KECCAK256 DUP3 JUMPI DELEGATECALL PUSH21 0x33FDFA710733D8C05153DC043CEE9B637C45792CE9 SWAP14 SWAP14 0xcb CALLDATACOPY 0xae JUMP 0xb6 STOP 0x29 ",
   "sourceMap": "103:1122:25:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;187:24;;8:9:-1;5:2;;;30:1;27;20:12;5:2;187:24:25;;;;;;;;;;;;;;;;;;;;215:21;;8:9:-1;5:2;;;30:1;27;20:12;5:2;215:21:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;215:21:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;129:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;129:25:25;;;;1097:126;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1097:126:25;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1097:126:25;;;;;;;;;;848:127;;8:9:-1;5:2;;;30:1;27;20:12;5:2;848:127:25;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;848:127:25;;;;;;;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;848:127:25;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;848:127:25;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;848:127:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;848:127:25;;-1:-1:-1;848:127:25;;-1:-1:-1;;;;;848:127:25;158:25;;8:9:-1;5:2;;;30:1;27;20:12;5:2;158:25:25;;;;483:114;;8:9:-1;5:2;;;30:1;27;20:12;5:2;483:114:25;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;483:114:25;;;979;;8:9:-1;5:2;;;30:1;27;20:12;5:2;979:114:25;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;979:114:25;;;731:113;;8:9:-1;5:2;;;30:1;27;20:12;5:2;731:113:25;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;731:113:25;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;731:113:25;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;731:113:25;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;731:113:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;731:113:25;;-1:-1:-1;731:113:25;;-1:-1:-1;;;;;731:113:25;601:126;;8:9:-1;5:2;;;30:1;27;20:12;5:2;601:126:25;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;601:126:25;;;;;;;;187:24;;;;:::o;215:21::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;129:25::-;;;;:::o;1097:126::-;1172:9;:22;;;1200:18;1211:6;1200:10;:18::i;:::-;1097:126;;:::o;848:127::-;926:9;:22;;;954:16;963:6;954:8;:16::i;158:25::-;;;;:::o;483:114::-;532:10;:19;;;562:30;;545:6;;573:10;;562:30;;532:10;562:30;483:114;:::o;979:::-;1028:10;:19;;;1058:30;;1041:6;;1069:10;;1058:30;;;;;979:114;:::o;731:113::-;783:17;;;;:8;;:17;;;;;:::i;:::-;-1:-1:-1;811:28:25;;;;;;;;;;;;;;;820:10;;811:28;;832:6;;811:28;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;811:28:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;731:113;:::o;601:126::-;676:9;:22;;;704:18;715:6;704:10;:18::i;103:1122::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;103:1122:25;;;-1:-1:-1;103:1122:25;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o"
  },
  "methodIdentifiers": {
   "getBytes()": "0bcd3b33",
   "getBytes32()": "1f903037",
   "getUint256()": "68895979",
   "requestId()": "006d6cae",
   "requestedBytes(bytes32,bytes)": "46ddd1ff",
   "requestedBytes32(bytes32,bytes32)": "ed53e511",
   "requestedUint256(bytes32,uint256)": "3345b4d0",
   "setBytes(bytes)": "da359dc8",
   "setBytes32(bytes32)": "c2b12a73",
   "setUint256(uint256)": "d2282dc5"
  }
 },
 "metadata": "{\"compiler\":{\"version\":\"0.5.0+commit.1d4f565a\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":true,\"inputs\":[],\"name\":\"requestId\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBytes\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getBytes32\",\"outputs\":[{\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_requestId\",\"type\":\"bytes32\"},{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"requestedUint256\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_requestId\",\"type\":\"bytes32\"},{\"name\":\"_value\",\"type\":\"bytes\"}],\"name\":\"requestedBytes\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"getUint256\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_value\",\"type\":\"bytes32\"}],\"name\":\"setBytes32\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_value\",\"type\":\"uint256\"}],\"name\":\"setUint256\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_value\",\"type\":\"bytes\"}],\"name\":\"setBytes\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"_requestId\",\"type\":\"bytes32\"},{\"name\":\"_value\",\"type\":\"bytes32\"}],\"name\":\"requestedBytes32\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"value\",\"type\":\"bytes32\"}],\"name\":\"SetBytes32\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"SetUint256\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"name\":\"value\",\"type\":\"bytes\"}],\"name\":\"SetBytes\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"b32\",\"type\":\"bytes32\"},{\"indexed\":false,\"name\":\"u256\",\"type\":\"uint256\"},{\"indexed\":false,\"name\":\"b322\",\"type\":\"bytes32\"}],\"name\":\"Output\",\"type\":\"event\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.5/tests/GetterSetter.sol\":\"GetterSetter\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":1000000},\"remappings\":[]},\"sources\":{\"/Users/steve/workspace/chainlink/evm-contracts/src/v0.5/tests/GetterSetter.sol\":{\"keccak256\":\"0xb25cd13750633ad7cc7686f4025b02883643977bb5826179322221aaaf8cc396\",\"urls\":[\"bzzr://c80908b763a7ff48279680183a599097706669b63cbb2770e55ec1798659c4e6\"]}},\"version\":1}"
})

if (process.env.NODE_ENV === 'test') {
  try {
    eval('GetterSetter.setProvider(web3.currentProvider)')
  } catch (e) {}
}

exports.GetterSetter = GetterSetter
