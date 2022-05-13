/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { OvmChainStorageContainer } from "./OvmChainStorageContainer";

export class OvmChainStorageContainerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _libAddressManager: string,
    _owner: string,
    overrides?: Overrides
  ): Promise<OvmChainStorageContainer> {
    return super.deploy(_libAddressManager, _owner, overrides || {}) as Promise<
      OvmChainStorageContainer
    >;
  }
  getDeployTransaction(
    _libAddressManager: string,
    _owner: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _libAddressManager,
      _owner,
      overrides || {}
    );
  }
  attach(address: string): OvmChainStorageContainer {
    return super.attach(address) as OvmChainStorageContainer;
  }
  connect(signer: Signer): OvmChainStorageContainerFactory {
    return super.connect(signer) as OvmChainStorageContainerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OvmChainStorageContainer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as OvmChainStorageContainer;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_libAddressManager",
        type: "address"
      },
      {
        internalType: "string",
        name: "_owner",
        type: "string"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      },
      {
        internalType: "bytes27",
        name: "_globalMetadata",
        type: "bytes27"
      }
    ],
    name: "deleteElementsAfterInclusive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "deleteElementsAfterInclusive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "get",
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
    name: "getGlobalMetadata",
    outputs: [
      {
        internalType: "bytes27",
        name: "",
        type: "bytes27"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "length",
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
    name: "libAddressManager",
    outputs: [
      {
        internalType: "contract Lib_AddressManager",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "bytes32",
        name: "_object",
        type: "bytes32"
      },
      {
        internalType: "bytes27",
        name: "_globalMetadata",
        type: "bytes27"
      }
    ],
    name: "push",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_object",
        type: "bytes32"
      }
    ],
    name: "push",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string"
      }
    ],
    name: "resolve",
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
    inputs: [
      {
        internalType: "bytes27",
        name: "_globalMetadata",
        type: "bytes27"
      }
    ],
    name: "setGlobalMetadata",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256"
      }
    ],
    name: "setNextOverwritableIndex",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60806040523480156200001c576000806200001962000186565b50505b506040516200199938038062001999833981810160405260408110156200004d576000806200004a62000186565b50505b8101908080519291906020018051604051939291908464010000000082111562000081576000806200007e62000186565b50505b908301906020820185811115620000a2576000806200009f62000186565b50505b8251640100000000811182820188101715620000c857600080620000c562000186565b50505b825250602001908051906020019080838360005b83811015620000f6578082015183820152602001620000dc565b50505050905090810190601f168015620001245780820380516001836020036101000a031916815260200191505b5060405250505081806000806101000a816200013f620001f3565b816001600160a01b0302191690836001600160a01b03160217906200016362000255565b505050508060019080516200017d929160200190620002a4565b50505062000389565b632a2a7adb598160e01b8152600481016020815285602082015260005b86811015620001c0578086015182820160400152602001620001a3565b506020828760640184336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b505050565b6303daa959598160e01b8152836004820152602081602483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b8051935060005b6040811015620002505760008282015260200162000237565b505050565b6322bd64c0598160e01b8152836004820152846024820152600081604483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b60008152602062000237565b8280620002b0620001f3565b600181600116156101000203166002900490600052602060002090601f016020900481019282620002f057600085620002e862000255565b505062000354565b82601f106200030e57805160ff19168380011785620002e862000255565b828001600101856200031f62000255565b5050821562000354579182015b8281111562000354578251826200034262000255565b5050916020019190600101906200032c565b506200036292915062000366565b5090565b808211156200036257600080826200037d62000255565b50505060010162000366565b61160080620003996000396000f3fe6080604052348015610019576000806100166112fd565b50505b50600436106100bd5760003560e01c80634651d91e1161007a5780634651d91e1461026a5780638da5cb5b146102905780639507d39a1461030f578063b298e36b14610335578063ccf8f9691461035b578063fa9e936c1461037e576100bd565b8063167fd681146100cb5780631f7b6d32146101015780632015276c1461011b57806329061de21461014f578063299ca4781461017d578063461a4478146101a1575b6000806100c86112fd565b50505b6100ff600480360360408110156100ea576000806100e76112fd565b50505b508035906020013564ffffffffff19166103a4565b005b6101096104d2565b60405190815260200160405180910390f35b6100ff6004803603604081101561013a576000806101376112fd565b50505b508035906020013564ffffffffff19166104ea565b6100ff6004803603602081101561016e5760008061016b6112fd565b50505b503564ffffffffff19166105fd565b610185610712565b6040516001600160a01b03909116815260200160405180910390f35b610185600480360360208110156101c0576000806101bd6112fd565b50505b8101906020810181356401000000008111156101e4576000806101e16112fd565b50505b8201836020820111156101ff576000806101fc6112fd565b50505b8035906020019184600183028401116401000000008311171561022a576000806102276112fd565b50505b91908080601f0160208091040260200160405190810160405281815292919060208401838380828437600092019190915250929550610730945050505050565b6100ff60048036036020811015610289576000806102866112fd565b50505b5035610858565b61029861096a565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156102d45780820151838201526020016102bc565b50505050905090810190601f1680156103015780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101096004803603602081101561032e5760008061032b6112fd565b50505b5035610a23565b6100ff60048036036020811015610354576000806103516112fd565b50505b5035610a3d565b610363610b4f565b60405164ffffffffff19909116815260200160405180910390f35b6100ff6004803603602081101561039d5760008061039a6112fd565b50505b5035610b60565b6104626001806103b2611368565b600181600116156101000203166002900480601f0160208091040260200160405190810160405281815291906020830182806103ec611368565b600181600116156101000203166002900480156104585780601f10610426576101008083610418611368565b040283529160200191610458565b820191906000526020600020905b8161043d611368565b8152906001019060200180831161043457829003601f168201915b5050505050610730565b6001600160a01b03165a6104746113c3565b6001600160a01b0316146104c25760405162461bcd60e51b81526004018080602001828103825260448152602001806115bc60449139606001915050604051809103906104bf6112fd565b50505b6104ce60028383610c79565b5050565b60006104de6002610d6a565b64ffffffffff16905090565b6105916001806104f8611368565b600181600116156101000203166002900480601f016020809104026020016040519081016040528181529190602083018280610532611368565b600181600116156101000203166002900480156104585780601f1061055e576101008083610418611368565b820191906000526020600020905b81610575611368565b8152906001019060200180831161056c57506107309350505050565b6001600160a01b03165a6105a36113c3565b6001600160a01b0316146105f15760405162461bcd60e51b81526004018080602001828103825260448152602001806115bc60449139606001915050604051809103906105ee6112fd565b50505b6104ce60028383610d81565b6106a460018061060b611368565b600181600116156101000203166002900480601f016020809104026020016040519081016040528181529190602083018280610645611368565b600181600116156101000203166002900480156104585780601f10610671576101008083610418611368565b820191906000526020600020905b81610688611368565b8152906001019060200180831161067f57506107309350505050565b6001600160a01b03165a6106b66113c3565b6001600160a01b0316146107045760405162461bcd60e51b81526004018080602001828103825260448152602001806115bc60449139606001915050604051809103906107016112fd565b50505b61070f600282610ee0565b50565b60008061071d611368565b906101000a90046001600160a01b031681565b6000808061073c611368565b906101000a90046001600160a01b03166001600160a01b031663bf40fac1836040518263ffffffff1660e01b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156107a757808201518382015260200161078f565b50505050905090810190601f1680156107d45780820380516001836020036101000a031916815260200191505b509250505060206040518083038186806107ec611409565b158015610801576000806107fe6112fd565b50505b505a61080b611455565b505050505015801561082a573d6000803e3d60006108276112fd565b50505b505050506040513d6020811015610849576000806108466112fd565b50505b81019080805195945050505050565b6108ff600180610866611368565b600181600116156101000203166002900480601f0160208091040260200160405190810160405281815291906020830182806108a0611368565b600181600116156101000203166002900480156104585780601f106108cc576101008083610418611368565b820191906000526020600020905b816108e3611368565b815290600101906020018083116108da57506107309350505050565b6001600160a01b03165a6109116113c3565b6001600160a01b03161461095f5760405162461bcd60e51b81526004018080602001828103825260448152602001806115bc604491396060019150506040518091039061095c6112fd565b50505b61070f600282610f0a565b600180610975611368565b600181600116156101000203166002900480601f0160208091040260200160405190810160405281815291906020830182806109af611368565b60018160011615610100020316600290048015610a1b5780601f106109e95761010080836109db611368565b040283529160200191610a1b565b820191906000526020600020905b81610a00611368565b815290600101906020018083116109f757829003601f168201915b505050505081565b6000610a37600264ffffffffff8416610f28565b92915050565b610ae4600180610a4b611368565b600181600116156101000203166002900480601f016020809104026020016040519081016040528181529190602083018280610a85611368565b600181600116156101000203166002900480156104585780601f10610ab1576101008083610418611368565b820191906000526020600020905b81610ac8611368565b81529060010190602001808311610abf57506107309350505050565b6001600160a01b03165a610af66113c3565b6001600160a01b031614610b445760405162461bcd60e51b81526004018080602001828103825260448152602001806115bc6044913960600191505060405180910390610b416112fd565b50505b61070f600282611176565b6000610b5b6002611194565b905090565b610c07600180610b6e611368565b600181600116156101000203166002900480601f016020809104026020016040519081016040528181529190602083018280610ba8611368565b600181600116156101000203166002900480156104585780601f10610bd4576101008083610418611368565b820191906000526020600020905b81610beb611368565b81529060010190602001808311610be257506107309350505050565b6001600160a01b03165a610c196113c3565b6001600160a01b031614610c675760405162461bcd60e51b81526004018080602001828103825260448152602001806115bc6044913960600191505060405180910390610c646112fd565b50505b80806008610c73611540565b50505050565b6000610c84846111ae565b9050805164ffffffffff168364ffffffffff16108015610cb65750806060015164ffffffffff168364ffffffffff1610155b610d065760405162461bcd60e51b815260206004820152601460248201527324b73232bc1037baba1037b3103137bab732399760611b604482015260640160405180910390610d036112fd565b50505b806080015164ffffffffff168364ffffffffff161015610d48578060400180516000190167ffffffffffffffff169052606081015164ffffffffff1660808201525b64ffffffffff8316815264ffffffffff1982166020820152610c738482611250565b600080610d76836111ae565b905080519392505050565b6000610d8c846111ae565b90506000610da98260400151869067ffffffffffffffff166112dd565b905080610db4611368565b610dc85760108082610dc4611540565b5050505b80610dd1611368565b826080015183510364ffffffffff1610610e785784600601610df1611368565b826080015164ffffffffff161015610e575781604001805160010167ffffffffffffffff169052608082015164ffffffffff166060830152815164ffffffffff166080830152610e506040830151869067ffffffffffffffff166112dd565b9050610e78565b60028160008282610e66611368565b029250508190610e74611540565b5050505b6000826080015183510364ffffffffff169050848260010160008381526020019081526020016000208190610eab611540565b50505082600001805160010164ffffffffff16905264ffffffffff1984166020840152610ed88684611250565b505050505050565b6000610eeb836111ae565b64ffffffffff19831660208201529050610f058382611250565b505050565b6000610f15836111ae565b9050610f05828260200151859190610c79565b600080610f34846111ae565b9050805164ffffffffff168310610f915760405162461bcd60e51b815260206004820152601460248201527324b73232bc1037baba1037b3103137bab732399760611b604482015260640160405180910390610f8e6112fd565b50505b6000610fac8260400151869067ffffffffffffffff166112dd565b90506000610fd4836040015160010167ffffffffffffffff16876112dd90919063ffffffff16565b9050826080015164ffffffffff168510611078576000836080015164ffffffffff168603905082611003611368565b81106110555760405162461bcd60e51b815260206004820152601460248201527324b73232bc1037baba1037b3103137bab732399760611b6044820152606401604051809103906110526112fd565b50505b6000818152600184016020526040902061106d611368565b945050505050610a37565b600085846080015164ffffffffff16039050836060015164ffffffffff16846080015164ffffffffff16116110f35760405162461bcd60e51b815260206004820152601460248201527324b73232bc1037baba1037b3103137bab732399760611b6044820152606401604051809103906110f06112fd565b50505b816110fc611368565b81111561114f5760405162461bcd60e51b815260206004820152601460248201527324b73232bc1037baba1037b3103137bab732399760611b60448201526064016040518091039061114c6112fd565b50505b600182016000828461115f611368565b03815260200190815260200160002061106d611368565b6000611181836111ae565b9050610f05828260200151859190610d81565b6000806111a0836111ae565b905080602001519392505050565b6111b661158e565b6000826111c1611368565b90506000836001016111d1611368565b905064ffffffffff8281169064ffffffffff1984169067ffffffffffffffff841690604085811c821691606887901c16905160a08101604090815264ffffffffff968716825264ffffffffff19909516602082015267ffffffffffffffff90931693830193909352831660608201529116608082015292505050919050565b6000808083519050600084602001518281179450905060006040860151905060008660600151905060008760800151606881901b604084901b85171796509050868961129a611368565b146112ae5786808a6112aa611540565b5050505b85896001016112bb611368565b146112d257858060018b016112ce611540565b5050505b505050505050505050565b600060028206156112f157826004016112f6565b826002015b9392505050565b632a2a7adb598160e01b8152600481016020815285602082015260005b8681101561133557808601518282016040015260200161131a565b506020828760640184336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b505050565b6303daa959598160e01b8152836004820152602081602483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b8051935060005b6040811015610f05576000828201526020016113ac565b6373509064598160e01b8152602081600483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b805160008252935060206113ac565b638435035b598160e01b8152836004820152602081602483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b805160008252935060206113ac565b638540661f598160e01b8152611486565b8080831115610a37575090919050565b8080831015610a37575090919050565b836004820152846024820152606060448201528660648201526084810160005b888110156114be5780880151828201526020016114a6565b506060828960a40184336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b815160408301513d6000853e8b8b82606087013350600060045af150596115138d3d611476565b8c0161151f8187611466565b5b828110156115345760008152602001611520565b50929c50505050505050565b6322bd64c0598160e01b8152836004820152846024820152600081604483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b6000815260206113ac565b60405160a0810160409081526000808352602083018190529082018190526060820181905260808201529056fe4f564d5f436861696e53746f72616765436f6e7461696e65723a2046756e6374696f6e2063616e206f6e6c792062652063616c6c656420627920746865206f776e65722e";
