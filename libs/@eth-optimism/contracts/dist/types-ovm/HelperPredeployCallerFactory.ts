/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { HelperPredeployCaller } from "./HelperPredeployCaller";

export class HelperPredeployCallerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<HelperPredeployCaller> {
    return super.deploy(overrides || {}) as Promise<HelperPredeployCaller>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HelperPredeployCaller {
    return super.attach(address) as HelperPredeployCaller;
  }
  connect(signer: Signer): HelperPredeployCallerFactory {
    return super.connect(signer) as HelperPredeployCallerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelperPredeployCaller {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as HelperPredeployCaller;
  }
}

const _abi = [
  {
    stateMutability: "nonpayable",
    type: "fallback"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_predeploy",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "callPredeploy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_predeploy",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "callPredeployAbi",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_predeploy",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes"
      }
    ],
    name: "getL1MessageSender",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_target",
        type: "address"
      }
    ],
    name: "setTarget",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x60806040523480156100195760008061001661005a565b50505b505a6100236100c5565b600060018161003061011f565b816001600160a01b0302191690836001600160a01b031602179061005261016b565b5050506101b9565b632a2a7adb598160e01b8152600481016020815285602082015260005b86811015610092578086015182820160400152602001610077565b506020828760640184336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b505050565b6373509064598160e01b8152602081600483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b8051935060005b604081101561011a57600082820152602001610103565b505050565b6303daa959598160e01b8152836004820152602081602483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b80516000825293506020610103565b6322bd64c0598160e01b8152836004820152846024820152600081604483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b600081526020610103565b610a0c806101c86000396000f3fe6080604052348015610019576000806100166107c2565b50505b50600436106100555760003560e01c8063181c0e34146100b2578063594d2920146101a7578063776d1a01146102f7578063dd3daf0d14610326575b6100b06000600161006461082d565b906101000a90046001600160a01b03166000368080601f01602080910402602001604051908101604052818152929190602084018383808284376000920191909152506103ff92505050565b005b61018b600480360360408110156100d1576000806100ce6107c2565b50505b6001600160a01b038235169190810190604081016020820135640100000000811115610105576000806101026107c2565b50505b8201836020820111156101205760008061011d6107c2565b50505b8035906020019184600183028401116401000000008311171561014b576000806101486107c2565b50505b91908080601f01602080910402602001604051908101604052818152929190602084018383808284376000920191909152509295506104d9945050505050565b6040516001600160a01b03909116815260200160405180910390f35b610280600480360360408110156101c6576000806101c36107c2565b50505b6001600160a01b0382351691908101906040810160208201356401000000008111156101fa576000806101f76107c2565b50505b820183602082011115610215576000806102126107c2565b50505b803590602001918460018302840111640100000000831117156102405760008061023d6107c2565b50505b91908080601f01602080910402602001604051908101604052818152929190602084018383808284376000920191909152509295506104ef945050505050565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156102bc5780820151838201526020016102a4565b50505050905090810190601f1680156102e95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100b060048036036020811015610316576000806103136107c2565b50505b50356001600160a01b03166106df565b6100b060048036036040811015610345576000806103426107c2565b50505b6001600160a01b038235169190810190604081016020820135640100000000811115610379576000806103766107c2565b50505b820183602082011115610394576000806103916107c2565b50505b803590602001918460018302840111640100000000831117156103bf576000806103bc6107c2565b50505b91908080601f0160208091040260200160405190810160405281815292919060208401838380828437600092019190915250929550610764945050505050565b600080836001600160a01b0316836040518082805190602001908083835b6020831061043c5780518252601f19909201916020918201910161041d565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865a61047661088d565b5050505050509150503d80600081146104ab576040513d603f01601f191681016040523d815291503d6000602084013e6104b0565b606091505b509150915081156104c357805160208201f35b8051602082016104d16107c2565b505050505050565b60006104e58383610764565b5060005b92915050565b60606000606060008061050061082d565b906101000a90046001600160a01b03166001600160a01b03165a610522610978565b6001600160a01b031614156105ea57846001600160a01b0316846040518082805190602001908083835b6020831061056b5780518252601f19909201916020918201910161054c565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865a6105a561088d565b5050505050509150503d80600081146105da576040513d603f01601f191681016040523d815291503d6000602084013e6105df565b606091505b50909250905061067d565b600060016105f661082d565b906101000a90046001600160a01b03166001600160a01b03166000366040518083838082843780830192505050925050506000604051808303816000865a61063c61088d565b5050505050509150503d8060008114610671576040513d603f01601f191681016040523d815291503d6000602084013e610676565b606091505b5090925090505b816106d75760405162461bcd60e51b815260206004820152601760248201527f5072656465706c6f792063616c6c2072657665727465640000000000000000006044820152606401604051809103906106d46107c2565b50505b949350505050565b6000806106ea61082d565b906101000a90046001600160a01b03166001600160a01b03165a61070c610978565b6001600160a01b0316141561075257806001808061072861082d565b816001600160a01b0302191690836001600160a01b031602179061074a6109be565b505050610761565b6107616000600161006461082d565b50565b60008061076f61082d565b906101000a90046001600160a01b03166001600160a01b03165a610791610978565b6001600160a01b031614156107af576107aa82826103ff565b6107be565b6107be6000600161006461082d565b5050565b632a2a7adb598160e01b8152600481016020815285602082015260005b868110156107fa5780860151828201604001526020016107df565b506020828760640184336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b505050565b6303daa959598160e01b8152836004820152602081602483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b8051935060005b604081101561088857600082820152602001610871565b505050565b6385979f76598160e01b81526108be565b80808311156104e9575090919050565b80808310156104e9575090919050565b836004820152846024820152606060448201528760648201526084810160005b898110156108f65780890151828201526020016108de565b506060828a60a40184336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b815160408301513d6000853e8c8c82606087013350600060045af1505961094b8e3d6108ae565b8d01610957818761089e565b5b8281101561096c5760008152602001610958565b50929d50505050505050565b6373509064598160e01b8152602081600483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b80516000825293506020610871565b6322bd64c0598160e01b8152836004820152846024820152600081604483336000905af158600e01573d6000803e3d6000fd5b3d6001141558600a015760016000f35b60008152602061087156";
