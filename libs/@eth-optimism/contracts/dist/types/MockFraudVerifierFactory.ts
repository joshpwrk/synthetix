/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { MockFraudVerifier } from "./MockFraudVerifier";

export class MockFraudVerifierFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<MockFraudVerifier> {
    return super.deploy(overrides || {}) as Promise<MockFraudVerifier>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockFraudVerifier {
    return super.attach(address) as MockFraudVerifier;
  }
  connect(signer: Signer): MockFraudVerifierFactory {
    return super.connect(signer) as MockFraudVerifierFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockFraudVerifier {
    return new Contract(address, _abi, signerOrProvider) as MockFraudVerifier;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_preStateRoot",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "publisher",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "finalize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_preStateRoot",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "_txHash",
        type: "bytes32"
      }
    ],
    name: "getStateTransitioner",
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
        internalType: "contract OVM_BondManager",
        name: "_bondManager",
        type: "address"
      }
    ],
    name: "setBondManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "preStateRoot",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "txHash",
        type: "bytes32"
      },
      {
        internalType: "address",
        name: "addr",
        type: "address"
      }
    ],
    name: "setStateTransitioner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610288806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806348d3fed314610051578063abfbbe1314610079578063b48ec820146100ab578063d0ca0a9b146100ea575b600080fd5b6100776004803603602081101561006757600080fd5b50356001600160a01b031661011c565b005b6100776004803603606081101561008f57600080fd5b508035906001600160a01b03602082013516906040013561013e565b6100ce600480360360408110156100c157600080fd5b50803590602001356101b4565b604080516001600160a01b039092168252519081900360200190f35b6100776004803603606081101561010057600080fd5b50803590602081013590604001356001600160a01b03166101fa565b600080546001600160a01b0319166001600160a01b0392909216919091179055565b600080546040805163abfbbe1360e01b8152600481018790526001600160a01b038681166024830152604482018690529151919092169263abfbbe13926064808201939182900301818387803b15801561019757600080fd5b505af11580156101ab573d6000803e3d6000fd5b50505050505050565b604080516020808201859052818301849052825180830384018152606090920183528151918101919091206000908152600190915220546001600160a01b031692915050565b60408051602080820195909552808201939093528051808403820181526060909301815282519284019290922060009081526001909352912080546001600160a01b0319166001600160a01b0390921691909117905556fea26469706673582212206263ea5a597c5ae28ae5bd36cd0045f92fbb77c7a69ccbc0369f5f7135c89b4164736f6c63430007060033";
