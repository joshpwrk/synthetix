/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { IOvmBondManager } from "./IOvmBondManager";

export class IOvmBondManagerFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOvmBondManager {
    return new Contract(address, _abi, signerOrProvider) as IOvmBondManager;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_who",
        type: "address"
      }
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "deposit",
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
        internalType: "address",
        name: "_publisher",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256"
      }
    ],
    name: "finalize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "finalizeWithdrawal",
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
        internalType: "address",
        name: "_who",
        type: "address"
      }
    ],
    name: "getGasSpent",
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
        name: "_who",
        type: "address"
      }
    ],
    name: "isCollateralized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
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
      },
      {
        internalType: "address",
        name: "_who",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_gasSpent",
        type: "uint256"
      }
    ],
    name: "recordGasSpent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "startWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
