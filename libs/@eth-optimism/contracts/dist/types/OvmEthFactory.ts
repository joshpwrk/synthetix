/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { OvmEth } from "./OvmEth";

export class OvmEthFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _l2CrossDomainMessenger: string,
    _l1ETHGateway: string,
    overrides?: Overrides
  ): Promise<OvmEth> {
    return super.deploy(
      _l2CrossDomainMessenger,
      _l1ETHGateway,
      overrides || {}
    ) as Promise<OvmEth>;
  }
  getDeployTransaction(
    _l2CrossDomainMessenger: string,
    _l1ETHGateway: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _l2CrossDomainMessenger,
      _l1ETHGateway,
      overrides || {}
    );
  }
  attach(address: string): OvmEth {
    return super.attach(address) as OvmEth;
  }
  connect(signer: Signer): OvmEthFactory {
    return super.connect(signer) as OvmEthFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): OvmEth {
    return new Contract(address, _abi, signerOrProvider) as OvmEth;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_l2CrossDomainMessenger",
        type: "address"
      },
      {
        internalType: "address",
        name: "_l1ETHGateway",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "DepositFinalized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract iOVM_L1TokenGateway",
        name: "_l1TokenGateway",
        type: "address"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "WithdrawalInitiated",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "finalizeDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getFinalizeWithdrawalL1Gas",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract iOVM_L1TokenGateway",
        name: "_l1TokenGateway",
        type: "address"
      }
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "l1TokenGateway",
    outputs: [
      {
        internalType: "contract iOVM_L1TokenGateway",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "messenger",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200149238038062001492833981810160405260408110156200003757600080fd5b508051602091820151604080518082018252600581526422ba3432b960d91b8186019081528251808401909352600383526208aa8960eb1b95830195909552600080546001600160a01b0319166001600160a01b038616179055805193949293859391929183918391620000af91600291906200027c565b508051620000c59060039060208401906200027c565b5060004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f600260405180828054600181600116156101000203166002900480156200014d5780601f106200012a5761010080835404028352918201916200014d565b820191906000526020600020905b81548152906001019060200180831162000138575b505060408051918290038220828201825260018352603160f81b602093840152815180840196909652858201527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606086015260808501959095523060a0808601919091528551808603909101815260c09094019094525050805191012060075550620001e1935084925050620001e99050565b505062000381565b6001546001600160a01b0316156200021e5760405162461bcd60e51b815260040162000215906200033c565b60405180910390fd5b600180546001600160a01b0319166001600160a01b0383811691909117918290556040517f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e6926200027192169062000328565b60405180910390a150565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620002b45760008555620002ff565b82601f10620002cf57805160ff1916838001178555620002ff565b82800160010185558215620002ff579182015b82811115620002ff578251825591602001919060010190620002e2565b506200030d92915062000311565b5090565b5b808211156200030d576000815560010162000312565b6001600160a01b0391909116815260200190565b60208082526025908201527f436f6e74726163742068617320616c7265616479206265656e20696e697469616040820152641b1a5e995960da1b606082015260800190565b61110180620003916000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c80633cb747bf116100ad578063a84ce98c11610071578063a84ce98c14610381578063a9059cbb14610389578063bdeaf641146103b5578063d505accf146103d6578063dd62ed3e146104275761012c565b80633cb747bf146102dd57806370a08231146103015780637ecebe00146103275780638d6e9a5b1461034d57806395d89b41146103795761012c565b806323b872dd116100f457806323b872dd1461025c5780632e1a7d4d1461029257806330adf81f146102af578063313ce567146102b75780633644e515146102d55761012c565b806306fdde0314610131578063095ea7b3146101ae57806318160ddd146101ee57806319ab453c14610208578063205c287814610230575b600080fd5b610139610455565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561017357818101518382015260200161015b565b50505050905090810190601f1680156101a05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101da600480360360408110156101c457600080fd5b506001600160a01b0381351690602001356104e0565b604080519115158252519081900360200190f35b6101f66104f7565b60408051918252519081900360200190f35b61022e6004803603602081101561021e57600080fd5b50356001600160a01b03166104fd565b005b61022e6004803603604081101561024657600080fd5b506001600160a01b03813516906020013561058b565b6101da6004803603606081101561027257600080fd5b506001600160a01b038135811691602081013590911690604001356105c1565b61022e600480360360208110156102a857600080fd5b5035610655565b6101f661068a565b6102bf6106ae565b6040805160ff9092168252519081900360200190f35b6101f66106b3565b6102e56106b9565b604080516001600160a01b039092168252519081900360200190f35b6101f66004803603602081101561031757600080fd5b50356001600160a01b03166106c8565b6101f66004803603602081101561033d57600080fd5b50356001600160a01b03166106da565b61022e6004803603604081101561036357600080fd5b506001600160a01b0381351690602001356106ec565b610139610882565b6102e56108dd565b6101da6004803603604081101561039f57600080fd5b506001600160a01b0381351690602001356108ec565b6103bd6108f9565b6040805163ffffffff9092168252519081900360200190f35b61022e600480360360e08110156103ec57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610900565b6101f66004803603604081101561043d57600080fd5b506001600160a01b0381358116916020013516610b02565b6002805460408051602060018416156101000260001901909316849004601f810184900484028201840190925281815292918301828280156104d85780601f106104ad576101008083540402835291602001916104d8565b820191906000526020600020905b8154815290600101906020018083116104bb57829003601f168201915b505050505081565b60006104ed338484610b1f565b5060015b92915050565b60045481565b6001546001600160a01b03161561052f5760405162461bcd60e51b815260040161052690610fda565b60405180910390fd5b600180546001600160a01b0319166001600160a01b0383811691909117918290556040517f908408e307fc569b417f6cbec5d5a06f44a0a505ac0479b47d421a4b2fd6a1e692610580921690610fc6565b60405180910390a150565b6001546001600160a01b03166105b35760405162461bcd60e51b81526004016105269061101f565b6105bd8282610b81565b5050565b6001600160a01b038316600090815260066020908152604080832033845290915281205460001914610640576001600160a01b038416600090815260066020908152604080832033845290915290205461061b9083610c36565b6001600160a01b03851660009081526006602090815260408083203384529091529020555b61064b848484610c86565b5060019392505050565b6001546001600160a01b031661067d5760405162461bcd60e51b81526004016105269061101f565b6106873382610b81565b50565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60075481565b6000546001600160a01b031681565b60056020526000908152604090205481565b60086020526000908152604090205481565b6001546001600160a01b03166107145760405162461bcd60e51b81526004016105269061101f565b6001546001600160a01b0316610728610d34565b6001600160a01b0316336001600160a01b0316146107775760405162461bcd60e51b815260040180806020018281038252602e81526020018061106e602e913960400191505060405180910390fd5b806001600160a01b0316610789610d34565b6001600160a01b0316636e296e456040518163ffffffff1660e01b815260040160206040518083038186803b1580156107c157600080fd5b505afa1580156107d5573d6000803e3d6000fd5b505050506040513d60208110156107eb57600080fd5b50516001600160a01b0316146108325760405162461bcd60e51b815260040180806020018281038252603081526020018061109c6030913960400191505060405180910390fd5b61083c8383610d43565b826001600160a01b03167f162eb12ad2bd8b6ca7960f162208414ab3bc2da9f37953788ffd8cf850c3492b836040516108759190611064565b60405180910390a2505050565b6003805460408051602060026001851615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156104d85780601f106104ad576101008083540402835291602001916104d8565b6001546001600160a01b031681565b60006104ed338484610c86565b620186a090565b4284101561094a576040805162461bcd60e51b8152602060048201526012602482015271155b9a5cddd85c158c8e881156141254915160721b604482015290519081900360640190fd5b6007546001600160a01b0380891660008181526008602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa158015610a65573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610a9b5750886001600160a01b0316816001600160a01b0316145b610aec576040805162461bcd60e51b815260206004820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e415455524500000000604482015290519081900360640190fd5b610af7898989610b1f565b505050505050505050565b600660209081526000928352604080842090915290825290205481565b6001600160a01b03808416600081815260066020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b610b8b8282610d4d565b600063f4f7b41a60e01b8383604051602401610ba8929190610fad565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152600154909150610bfb906001600160a01b031682610bf66108f9565b610d57565b336001600160a01b03167fbb2689ff876f7ef453cf8865dde5ab10349d222e2e1383c5152fbdb083f02da28484604051610875929190610fad565b808203828111156104f1576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160a01b038316600090815260056020526040902054610ca99082610c36565b6001600160a01b038085166000908152600560205260408082209390935590841681522054610cd89082610e42565b6001600160a01b0380841660008181526005602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000546001600160a01b031690565b6105bd8282610e91565b6105bd3382610f1c565b610d5f610d34565b6001600160a01b0316633dbb202b8484846040518463ffffffff1660e01b815260040180846001600160a01b03168152602001806020018363ffffffff168152602001828103825284818151815260200191508051906020019080838360005b83811015610dd7578181015183820152602001610dbf565b50505050905090810190601f168015610e045780820380516001836020036101000a031916815260200191505b50945050505050600060405180830381600087803b158015610e2557600080fd5b505af1158015610e39573d6000803e3d6000fd5b50505050505050565b808201828110156104f1576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fd5b600454610e9e9082610e42565b6004556001600160a01b038216600090815260056020526040902054610ec49082610e42565b6001600160a01b03831660008181526005602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b038216600090815260056020526040902054610f3f9082610c36565b6001600160a01b038316600090815260056020526040902055600454610f659082610c36565b6004556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0391909116815260200190565b60208082526025908201527f436f6e74726163742068617320616c7265616479206265656e20696e697469616040820152641b1a5e995960da1b606082015260800190565b60208082526025908201527f436f6e747261637420686173206e6f7420796574206265656e20696e697469616040820152641b1a5e995960da1b606082015260800190565b9081526020019056fe4f564d5f58434841494e3a206d657373656e67657220636f6e747261637420756e61757468656e746963617465644f564d5f58434841494e3a2077726f6e672073656e646572206f662063726f73732d646f6d61696e206d657373616765a26469706673582212201f7227611b65266814b1c5f143a596f3b7047397037fef964b2d95ae3ad0ebd864736f6c63430007060033";
