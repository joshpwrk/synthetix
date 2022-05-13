/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { Arrayish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { ServiceAgreementConsumer } from "./ServiceAgreementConsumer";

export class ServiceAgreementConsumerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _link: string,
    _coordinator: string,
    _sAId: Arrayish,
    overrides?: TransactionOverrides
  ): Promise<ServiceAgreementConsumer> {
    return super.deploy(_link, _coordinator, _sAId, overrides) as Promise<
      ServiceAgreementConsumer
    >;
  }
  getDeployTransaction(
    _link: string,
    _coordinator: string,
    _sAId: Arrayish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_link, _coordinator, _sAId, overrides);
  }
  attach(address: string): ServiceAgreementConsumer {
    return super.attach(address) as ServiceAgreementConsumer;
  }
  connect(signer: Signer): ServiceAgreementConsumerFactory {
    return super.connect(signer) as ServiceAgreementConsumerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ServiceAgreementConsumer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ServiceAgreementConsumer;
  }
}

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_requestId",
        type: "bytes32"
      },
      {
        name: "_price",
        type: "bytes32"
      }
    ],
    name: "fulfill",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_currency",
        type: "string"
      }
    ],
    name: "requestEthereumPrice",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "currentPrice",
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        name: "_link",
        type: "address"
      },
      {
        name: "_coordinator",
        type: "address"
      },
      {
        name: "_sAId",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkRequested",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkFulfilled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "id",
        type: "bytes32"
      }
    ],
    name: "ChainlinkCancelled",
    type: "event"
  }
];

const _bytecode =
  "0x6080604052600160045534801561001557600080fd5b50604051606080610dd28339810180604052606081101561003557600080fd5b508051602082015160409092015190919061005883640100000000610075810204565b61006a82640100000000610097810204565b600655506100b99050565b60028054600160a060020a031916600160a060020a0392909216919091179055565b60038054600160a060020a031916600160a060020a0392909216919091179055565b610d0a806100c86000396000f3fe6080604052600436106100565763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663042f2b65811461005b5780636c0cae681461008d5780639d1b464a14610140575b600080fd5b34801561006757600080fd5b5061008b6004803603604081101561007e57600080fd5b5080359060200135610167565b005b34801561009957600080fd5b5061008b600480360360208110156100b057600080fd5b8101906020810181356401000000008111156100cb57600080fd5b8201836020820111156100dd57600080fd5b803590602001918460018302840111640100000000831117156100ff57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610283945050505050565b34801561014c57600080fd5b506101556103e4565b60408051918252519081900360200190f35b600082815260056020526040902054829073ffffffffffffffffffffffffffffffffffffffff16331461022157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f536f75726365206d75737420626520746865206f7261636c65206f662074686560448201527f2072657175657374000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b60008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555182917f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a91a25060075550565b61028b610c91565b6006546102b990307f042f2b65000000000000000000000000000000000000000000000000000000006103ea565b90506103876040805190810160405280600381526020017f6765740000000000000000000000000000000000000000000000000000000000815250608060405190810160405280604781526020017f68747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f81526020017f6d2f646174612f70726963653f6673796d3d455448267473796d733d5553442c81526020017f4555522c4a505900000000000000000000000000000000000000000000000000815250836104159092919063ffffffff16565b60408051808201909152600481527f706174680000000000000000000000000000000000000000000000000000000060208201526103cd9082908463ffffffff61041516565b6103df81670de0b6b3a764000061043f565b505050565b60075481565b6103f2610c91565b6103fa610c91565b61040c8186868663ffffffff61046f16565b95945050505050565b608083015161042a908363ffffffff6104d116565b60808301516103df908263ffffffff6104d116565b6003546000906104669073ffffffffffffffffffffffffffffffffffffffff1684846104ee565b90505b92915050565b610477610c91565b6104878560800151610100610790565b505091835273ffffffffffffffffffffffffffffffffffffffff1660208301527fffffffff0000000000000000000000000000000000000000000000000000000016604082015290565b6104de82600383516107ca565b6103df828263ffffffff6108cd16565b60045460408051306c01000000000000000000000000026020808301919091526034808301859052835180840390910181526054909201835281519181019190912060608601939093526000838152600590915281812080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8816179055905182917fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af991a260025473ffffffffffffffffffffffffffffffffffffffff16634000aea085846105d3876108e7565b6040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561067357818101518382015260200161065b565b50505050905090810190601f1680156106a05780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b1580156106c157600080fd5b505af11580156106d5573d6000803e3d6000fd5b505050506040513d60208110156106eb57600080fd5b5051151561078057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f756e61626c6520746f207472616e73666572416e6443616c6c20746f206f726160448201527f636c650000000000000000000000000000000000000000000000000000000000606482015290519081900360840190fd5b6004805460010190559392505050565b610798610cc6565b60208206156107ad5760208206602003820191505b506020828101829052604080518085526000815290920101905290565b601781116107ec576107e68360ff848116602002168317610a99565b506103df565b60ff81116108205761080d836018602060ff8616021763ffffffff610a9916565b506107e68382600163ffffffff610ab116565b61ffff811161085557610842836019602060ff8616021763ffffffff610a9916565b506107e68382600263ffffffff610ab116565b63ffffffff811161088c5761087983601a602060ff8616021763ffffffff610a9916565b506107e68382600463ffffffff610ab116565b67ffffffffffffffff81116103df576108b483601b602060ff8616021763ffffffff610a9916565b506108c78382600863ffffffff610ab116565b50505050565b6108d5610cc6565b61046683846000015151848551610ad2565b8051602080830151604080850151606086810151608088015151935160006024820181815260448301829052606483018a905273ffffffffffffffffffffffffffffffffffffffff881660848401527fffffffff00000000000000000000000000000000000000000000000000000000861660a484015260c48301849052600160e48401819052610100610104850190815288516101248601528851969b7f40429946000000000000000000000000000000000000000000000000000000009b949a8b9a91999098909796939591949361014401918501908083838e5b838110156109dc5781810151838201526020016109c4565b50505050905090810190601f168015610a095780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909d169c909c17909b5250989950505050505050505050919050565b610aa1610cc6565b6104668384600001515184610bba565b610ab9610cc6565b610aca848560000151518585610c05565b949350505050565b610ada610cc6565b8251821115610ae857600080fd5b84602001518285011115610b1257610b1285610b0a8760200151878601610c63565b600202610c7a565b600080865180518760208301019350808887011115610b315787860182525b505050602084015b60208410610b7657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09093019260209182019101610b39565b5181517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60208690036101000a019081169019919091161790525083949350505050565b610bc2610cc6565b60208401518310610bde57610bde848560200151600202610c7a565b8351805160208583010184815381861415610bfa576001820183525b509495945050505050565b610c0d610cc6565b84602001518483011115610c2a57610c2a85858401600202610c7a565b60006001836101000a0390508551838682010185831982511617815281518588011115610c575784870182525b50959695505050505050565b600081831115610c74575081610469565b50919050565b8151610c868383610790565b506108c783826108cd565b6040805160c081018252600080825260208201819052918101829052606081019190915260808101610cc1610cc6565b905290565b6040805180820190915260608152600060208201529056fea165627a7a7230582008ade74f81e45b02017903dcec97944774cedf3fb11c1a3f62427a0059d11edc0029";
