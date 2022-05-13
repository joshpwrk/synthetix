/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { TestLibEip155Tx } from "./TestLibEip155Tx";

export class TestLibEip155TxFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestLibEip155Tx> {
    return super.deploy(overrides || {}) as Promise<TestLibEip155Tx>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestLibEip155Tx {
    return super.attach(address) as TestLibEip155Tx;
  }
  connect(signer: Signer): TestLibEip155TxFactory {
    return super.connect(signer) as TestLibEip155TxFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestLibEip155Tx {
    return new Contract(address, _abi, signerOrProvider) as TestLibEip155Tx;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_encoded",
        type: "bytes"
      },
      {
        internalType: "uint256",
        name: "_chainId",
        type: "uint256"
      }
    ],
    name: "decode",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasPrice",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256"
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
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
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
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256"
          },
          {
            internalType: "uint8",
            name: "recoveryParam",
            type: "uint8"
          },
          {
            internalType: "bool",
            name: "isCreate",
            type: "bool"
          }
        ],
        internalType: "struct Lib_EIP155Tx.EIP155Tx",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasPrice",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256"
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
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
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
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256"
          },
          {
            internalType: "uint8",
            name: "recoveryParam",
            type: "uint8"
          },
          {
            internalType: "bool",
            name: "isCreate",
            type: "bool"
          }
        ],
        internalType: "struct Lib_EIP155Tx.EIP155Tx",
        name: "_transaction",
        type: "tuple"
      },
      {
        internalType: "bool",
        name: "_includeSignature",
        type: "bool"
      }
    ],
    name: "encode",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasPrice",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256"
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
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
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
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256"
          },
          {
            internalType: "uint8",
            name: "recoveryParam",
            type: "uint8"
          },
          {
            internalType: "bool",
            name: "isCreate",
            type: "bool"
          }
        ],
        internalType: "struct Lib_EIP155Tx.EIP155Tx",
        name: "_transaction",
        type: "tuple"
      }
    ],
    name: "hash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasPrice",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256"
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
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
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
          },
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256"
          },
          {
            internalType: "uint8",
            name: "recoveryParam",
            type: "uint8"
          },
          {
            internalType: "bool",
            name: "isCreate",
            type: "bool"
          }
        ],
        internalType: "struct Lib_EIP155Tx.EIP155Tx",
        name: "_transaction",
        type: "tuple"
      }
    ],
    name: "sender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611721806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80630df31f9314610051578063280227de1461007a5780632925fd091461009a578063e677d67d146100ba575b600080fd5b61006461005f3660046113ff565b6100da565b6040516100719190611519565b60405180910390f35b61008d6100883660046113ff565b6100ed565b60405161007191906114e1565b6100ad6100a8366004611432565b6100f8565b604051610071919061154b565b6100cd6100c83660046113bc565b61010b565b60405161007191906115b2565b60006100e58261011d565b90505b919050565b60006100e58261018e565b606061010483836101a8565b9392505050565b6101136111c9565b610104838361040f565b6000600161012a8361018e565b836101400151601b018460e001518561010001516040516000815260200160405260405161015b949392919061152d565b6020604051602081039080840390855afa15801561017d573d6000803e3d6000fd5b5050604051601f1901519392505050565b600061019a82826101a8565b805190602001209050919050565b604080516009808252610140820190925260609160009190816020015b60608152602001906001900390816101c557505084519091506101e7906105a7565b816000815181106101f457fe5b602002602001018190525061020c84602001516105a7565b8160018151811061021957fe5b602002602001018190525061023184604001516105a7565b8160028151811061023e57fe5b6020026020010181905250836101600151156102895761026c604051806020016040528060008152506105b5565b8160038151811061027957fe5b60200260200101819052506102af565b610296846060015161061e565b816003815181106102a357fe5b60200260200101819052505b6102bc84608001516105a7565b816004815181106102c957fe5b60200260200101819052506102e18460a001516105b5565b816005815181106102ee57fe5b602002602001018190525082156103775761030f8460c0015160ff166105a7565b8160068151811061031c57fe5b60200260200101819052506103348460e00151610648565b8160078151811061034157fe5b602002602001018190525061035a846101000151610648565b8160088151811061036757fe5b60200260200101819052506103fe565b6103858461012001516105a7565b8160068151811061039257fe5b60200260200101819052506103b5604051806020016040528060008152506105b5565b816007815181106103c257fe5b60200260200101819052506103e5604051806020016040528060008152506105b5565b816008815181106103f257fe5b60200260200101819052505b6104078161065e565b949350505050565b6104176111c9565b6000610422846106a2565b905060006104438260068151811061043657fe5b60200260200101516106b5565b905060006023856002028360ff160303905060028160ff16106104815760405162461bcd60e51b81526004016104789061155e565b60405180910390fd5b60006104a08460038151811061049357fe5b60200260200101516106c0565b5160001490506040518061018001604052806104c28660008151811061043657fe5b81526020016104d78660018151811061043657fe5b81526020016104ec8660028151811061043657fe5b815260200161050e8660038151811061050157fe5b602002602001015161074f565b6001600160a01b0316815260200161052c8660048151811061043657fe5b81526020016105418660058151811061049357fe5b81526020018460ff16815260200161056c8660078151811061055f57fe5b60200260200101516107c3565b81526020016105818660088151811061055f57fe5b81526020018781526020018360ff16815260200182151581525094505050505092915050565b60606100e56105b5836108bd565b606080825160011480156105dd57506080836000815181106105d357fe5b016020015160f81c105b156105e95750816100e5565b6105f5835160806109c2565b836040516020016106079291906114ea565b604051602081830303815290604052905092915050565b60606100e58260405160200161063491906114c4565b6040516020818303038152906040526105b5565b60606100e58260405160200161063491906114e1565b6060600061066b83610b12565b9050610679815160c06109c2565b8160405160200161068b9291906114ea565b604051602081830303815290604052915050919050565b60606100e56106b083610c13565b610c38565b60006100e5826107c3565b606060008060006106d085610dae565b9194509250905060008160018111156106e557fe5b14610737576040805162461bcd60e51b815260206004820152601860248201527f496e76616c696420524c502062797465732076616c75652e0000000000000000604482015290519081900360640190fd5b610746856020015184846110d7565b95945050505050565b805160009060011415610764575060006100e8565b81516015146107ba576040805162461bcd60e51b815260206004820152601a60248201527f496e76616c696420524c5020616464726573732076616c75652e000000000000604482015290519081900360640190fd5b6100e5826106b5565b600060218260000151111561081f576040805162461bcd60e51b815260206004820152601a60248201527f496e76616c696420524c5020627974657333322076616c75652e000000000000604482015290519081900360640190fd5b600080600061082d85610dae565b91945092509050600081600181111561084257fe5b14610894576040805162461bcd60e51b815260206004820152601a60248201527f496e76616c696420524c5020627974657333322076616c75652e000000000000604482015290519081900360640190fd5b6020808601518401805190918410156108b35760208490036101000a90045b9695505050505050565b60606000826040516020016108d291906114e1565b604051602081830303815290604052905060005b602081101561091c578181815181106108fb57fe5b01602001516001600160f81b031916156109145761091c565b6001016108e6565b60008160200367ffffffffffffffff8111801561093857600080fd5b506040519080825280601f01601f191660200182016040528015610963576020820181803683370190505b50905060005b81518110156109b957835160018401938591811061098357fe5b602001015160f81c60f81b82828151811061099a57fe5b60200101906001600160f81b031916908160001a905350600101610969565b50949350505050565b6060806038841015610a1c576040805160018082528183019092529060208201818036833701905050905082840160f81b81600081518110610a0057fe5b60200101906001600160f81b031916908160001a905350610104565b600060015b808681610a2a57fe5b0415610a3f5760019091019061010002610a21565b8160010167ffffffffffffffff81118015610a5957600080fd5b506040519080825280601f01601f191660200182016040528015610a84576020820181803683370190505b50925084820160370160f81b83600081518110610a9d57fe5b60200101906001600160f81b031916908160001a905350600190505b818111610b09576101008183036101000a8781610ad257fe5b0481610ada57fe5b0660f81b838281518110610aea57fe5b60200101906001600160f81b031916908160001a905350600101610ab9565b50509392505050565b6060815160001415610b3357506040805160008152602081019091526100e8565b6000805b8351811015610b6657838181518110610b4c57fe5b602002602001015151820191508080600101915050610b37565b60008267ffffffffffffffff81118015610b7f57600080fd5b506040519080825280601f01601f191660200182016040528015610baa576020820181803683370190505b50600092509050602081015b85518310156109b9576000868481518110610bcd57fe5b602002602001015190506000602082019050610beb83828451611185565b878581518110610bf757fe5b6020026020010151518301925050508280600101935050610bb6565b610c1b61122c565b506040805180820190915281518152602082810190820152919050565b6060600080610c4684610dae565b91935090915060019050816001811115610c5c57fe5b14610cae576040805162461bcd60e51b815260206004820152601760248201527f496e76616c696420524c50206c6973742076616c75652e000000000000000000604482015290519081900360640190fd5b6040805160208082526104208201909252600091816020015b610ccf61122c565b815260200190600190039081610cc75790505090506000835b8651811015610da35760208210610d305760405162461bcd60e51b815260040180806020018281038252602a8152602001806116c2602a913960400191505060405180910390fd5b600080610d5c6040518060400160405280858c60000151038152602001858c6020015101815250610dae565b509150915060405180604001604052808383018152602001848b6020015101815250858581518110610d8a57fe5b6020908102919091010152600193909301920101610ce8565b508152949350505050565b600080600080846000015111610e0b576040805162461bcd60e51b815260206004820152601860248201527f524c50206974656d2063616e6e6f74206265206e756c6c2e0000000000000000604482015290519081900360640190fd5b6020840151805160001a607f8111610e305760006001600094509450945050506110d0565b60b78111610ea5578551607f198201908110610e93576040805162461bcd60e51b815260206004820152601960248201527f496e76616c696420524c502073686f727420737472696e672e00000000000000604482015290519081900360640190fd5b600195509350600092506110d0915050565b60bf8111610f8957855160b6198201908110610f08576040805162461bcd60e51b815260206004820152601f60248201527f496e76616c696420524c50206c6f6e6720737472696e67206c656e6774682e00604482015290519081900360640190fd5b6000816020036101000a6001850151049050808201886000015111610f74576040805162461bcd60e51b815260206004820152601860248201527f496e76616c696420524c50206c6f6e6720737472696e672e0000000000000000604482015290519081900360640190fd5b600190910195509350600092506110d0915050565b60f78111610ffd57855160bf198201908110610fec576040805162461bcd60e51b815260206004820152601760248201527f496e76616c696420524c502073686f7274206c6973742e000000000000000000604482015290519081900360640190fd5b6001955093508492506110d0915050565b855160f6198201908110611058576040805162461bcd60e51b815260206004820152601d60248201527f496e76616c696420524c50206c6f6e67206c697374206c656e6774682e000000604482015290519081900360640190fd5b6000816020036101000a60018501510490508082018860000151116110bd576040805162461bcd60e51b815260206004820152601660248201527524b73b30b634b210292628103637b733903634b9ba1760511b604482015290519081900360640190fd5b60019182019650945092506110d0915050565b9193909250565b606060008267ffffffffffffffff811180156110f257600080fd5b506040519080825280601f01601f19166020018201604052801561111d576020820181803683370190505b509050805160001415611131579050610104565b8484016020820160005b6020860481101561115c57825182526020928301929091019060010161113b565b5080519151601f959095166020036101000a600019019182169119909416179092525092915050565b8282825b602081106111a8578151835260209283019290910190601f1901611189565b905182516020929092036101000a6000190180199091169116179052505050565b604080516101808101825260008082526020820181905291810182905260608082018390526080820183905260a082015260c0810182905260e0810182905261010081018290526101208101829052610140810182905261016081019190915290565b604051806040016040528060008152602001600081525090565b80356001600160a01b03811681146100e857600080fd5b803580151581146100e857600080fd5b600082601f83011261127d578081fd5b813567ffffffffffffffff81111561129157fe5b6112a4601f8201601f191660200161166d565b8181528460208386010111156112b8578283fd5b816020850160208301379081016020019190915292915050565b60006101808083850312156112e5578182fd5b6112ee8161166d565b91505081358152602082013560208201526040820135604082015261131560608301611246565b60608201526080820135608082015260a082013567ffffffffffffffff81111561133e57600080fd5b61134a8482850161126d565b60a08301525061135c60c083016113ab565b60c082015260e082810135908201526101008083013590820152610120808301359082015261014061138f8184016113ab565b908201526101606113a183820161125d565b9082015292915050565b803560ff811681146100e857600080fd5b600080604083850312156113ce578182fd5b823567ffffffffffffffff8111156113e4578283fd5b6113f08582860161126d565b95602094909401359450505050565b600060208284031215611410578081fd5b813567ffffffffffffffff811115611426578182fd5b610407848285016112d2565b60008060408385031215611444578182fd5b823567ffffffffffffffff81111561145a578283fd5b611466858286016112d2565b9250506114756020840161125d565b90509250929050565b6001600160a01b03169052565b15159052565b600081518084526114a9816020860160208601611691565b601f01601f19169290920160200192915050565b60ff169052565b60609190911b6bffffffffffffffffffffffff1916815260140190565b90815260200190565b600083516114fc818460208801611691565b835190830190611510818360208801611691565b01949350505050565b6001600160a01b0391909116815260200190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082526101046020830184611491565b60208082526034908201527f4c69625f45495031353554783a205472616e73616374696f6e207369676e6564604082015273081dda5d1a081ddc9bdb99c818da185a5b88125160621b606082015260800190565b60006020825282516020830152602083015160408301526040830151606083015260608301516115e5608084018261147e565b50608083015160a083015260a08301516101808060c085015261160c6101a0850183611491565b915060c085015161162060e08601826114bd565b5060e085015161010085810191909152850151610120808601919091528501516101408086019190915285015161016061165c818701836114bd565b8601519050610b098583018261148b565b60405181810167ffffffffffffffff8111828210171561168957fe5b604052919050565b60005b838110156116ac578181015183820152602001611694565b838111156116bb576000848401525b5050505056fe50726f766964656420524c50206c6973742065786365656473206d6178206c697374206c656e6774682ea26469706673582212200fdffce267a640adf24dbdb925352a4c08de2e57d927341a0a2fa70ea479e78464736f6c63430007060033";
