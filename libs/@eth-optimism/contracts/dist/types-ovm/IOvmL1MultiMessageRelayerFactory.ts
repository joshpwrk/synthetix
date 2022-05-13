/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import { IOvmL1MultiMessageRelayer } from "./IOvmL1MultiMessageRelayer";

export class IOvmL1MultiMessageRelayerFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOvmL1MultiMessageRelayer {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IOvmL1MultiMessageRelayer;
  }
}

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address"
          },
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "bytes",
            name: "message",
            type: "bytes"
          },
          {
            internalType: "uint256",
            name: "messageNonce",
            type: "uint256"
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "stateRoot",
                type: "bytes32"
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "batchIndex",
                    type: "uint256"
                  },
                  {
                    internalType: "bytes32",
                    name: "batchRoot",
                    type: "bytes32"
                  },
                  {
                    internalType: "uint256",
                    name: "batchSize",
                    type: "uint256"
                  },
                  {
                    internalType: "uint256",
                    name: "prevTotalElements",
                    type: "uint256"
                  },
                  {
                    internalType: "bytes",
                    name: "extraData",
                    type: "bytes"
                  }
                ],
                internalType: "struct Lib_OVMCodec.ChainBatchHeader",
                name: "stateRootBatchHeader",
                type: "tuple"
              },
              {
                components: [
                  {
                    internalType: "uint256",
                    name: "index",
                    type: "uint256"
                  },
                  {
                    internalType: "bytes32[]",
                    name: "siblings",
                    type: "bytes32[]"
                  }
                ],
                internalType: "struct Lib_OVMCodec.ChainInclusionProof",
                name: "stateRootProof",
                type: "tuple"
              },
              {
                internalType: "bytes",
                name: "stateTrieWitness",
                type: "bytes"
              },
              {
                internalType: "bytes",
                name: "storageTrieWitness",
                type: "bytes"
              }
            ],
            internalType:
              "struct iOVM_L1CrossDomainMessenger.L2MessageInclusionProof",
            name: "proof",
            type: "tuple"
          }
        ],
        internalType: "struct iOVM_L1MultiMessageRelayer.L2ToL1Message[]",
        name: "_messages",
        type: "tuple[]"
      }
    ],
    name: "batchRelayMessages",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
