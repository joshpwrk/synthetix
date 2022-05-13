/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { TestLibOvmCodec } from "./TestLibOvmCodec";

export class TestLibOvmCodecFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestLibOvmCodec> {
    return super.deploy(overrides || {}) as Promise<TestLibOvmCodec>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestLibOvmCodec {
    return super.attach(address) as TestLibOvmCodec;
  }
  connect(signer: Signer): TestLibOvmCodecFactory {
    return super.connect(signer) as TestLibOvmCodecFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestLibOvmCodec {
    return new Contract(address, _abi, signerOrProvider) as TestLibOvmCodec;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "blockNumber",
            type: "uint256"
          },
          {
            internalType: "enum Lib_OVMCodec.QueueOrigin",
            name: "l1QueueOrigin",
            type: "uint8"
          },
          {
            internalType: "address",
            name: "l1TxOrigin",
            type: "address"
          },
          {
            internalType: "address",
            name: "entrypoint",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct Lib_OVMCodec.Transaction",
        name: "_transaction",
        type: "tuple"
      }
    ],
    name: "encodeTransaction",
    outputs: [
      {
        internalType: "bytes",
        name: "_encoded",
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
            name: "timestamp",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "blockNumber",
            type: "uint256"
          },
          {
            internalType: "enum Lib_OVMCodec.QueueOrigin",
            name: "l1QueueOrigin",
            type: "uint8"
          },
          {
            internalType: "address",
            name: "l1TxOrigin",
            type: "address"
          },
          {
            internalType: "address",
            name: "entrypoint",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "gasLimit",
            type: "uint256"
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes"
          }
        ],
        internalType: "struct Lib_OVMCodec.Transaction",
        name: "_transaction",
        type: "tuple"
      }
    ],
    name: "hashTransaction",
    outputs: [
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610388806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80633170de2a1461003b578063a3e6d2fc14610064575b600080fd5b61004e610049366004610197565b610084565b60405161005b91906102c2565b60405180910390f35b610077610072366004610197565b610097565b60405161005b91906102cb565b600061008f826100a2565b90505b919050565b606061008f826100bb565b60006100ad826100bb565b805190602001209050919050565b6060816000015182602001518360400151846060015185608001518660a001518760c001516040516020016100f69796959493929190610253565b6040516020818303038152906040529050919050565b80356001600160a01b038116811461009257600080fd5b600082601f830112610133578081fd5b813567ffffffffffffffff81111561014757fe5b61015a601f8201601f19166020016102fe565b81815284602083860101111561016e578283fd5b816020850160208301379081016020019190915292915050565b80356002811061009257600080fd5b6000602082840312156101a8578081fd5b813567ffffffffffffffff808211156101bf578283fd5b9083019060e082860312156101d2578283fd5b6101dc60e06102fe565b82358152602083013560208201526101f660408401610188565b60408201526102076060840161010c565b60608201526102186080840161010c565b608082015260a083013560a082015260c083013582811115610238578485fd5b61024487828601610123565b60c08301525095945050505050565b60008882528760208301526002871061026857fe5b8660f81b60408301526bffffffffffffffffffffffff19808760601b166041840152808660601b1660558401525083606983015282516102af816089850160208701610322565b9190910160890198975050505050505050565b90815260200190565b60006020825282518060208401526102ea816040850160208701610322565b601f01601f19169190910160400192915050565b60405181810167ffffffffffffffff8111828210171561031a57fe5b604052919050565b60005b8381101561033d578181015183820152602001610325565b8381111561034c576000848401525b5050505056fea2646970667358221220b1943f29d8acf6c4a1c9d9634033894e7baa9d13e678a7dab3d855bdefdd02ae64736f6c63430007060033";
