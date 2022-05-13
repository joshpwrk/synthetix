/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IOvmL1CrossDomainMessengerInterface extends ethers.utils.Interface {
  functions: {
    "relayMessage(address,address,bytes,uint256,tuple)": FunctionFragment;
    "replayMessage(address,address,bytes,uint256,uint32)": FunctionFragment;
    "sendMessage(address,bytes,uint32)": FunctionFragment;
    "xDomainMessageSender()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "relayMessage",
    values: [
      string,
      string,
      BytesLike,
      BigNumberish,
      {
        stateRoot: BytesLike;
        stateRootBatchHeader: {
          batchIndex: BigNumberish;
          batchRoot: BytesLike;
          batchSize: BigNumberish;
          prevTotalElements: BigNumberish;
          extraData: BytesLike;
        };
        stateRootProof: { index: BigNumberish; siblings: BytesLike[] };
        stateTrieWitness: BytesLike;
        storageTrieWitness: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "replayMessage",
    values: [string, string, BytesLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "xDomainMessageSender",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "relayMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "replayMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "xDomainMessageSender",
    data: BytesLike
  ): Result;

  events: {
    "FailedRelayedMessage(bytes32)": EventFragment;
    "RelayedMessage(bytes32)": EventFragment;
    "SentMessage(bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FailedRelayedMessage"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RelayedMessage"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SentMessage"): EventFragment;
}

export class IOvmL1CrossDomainMessenger extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IOvmL1CrossDomainMessengerInterface;

  functions: {
    relayMessage(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _proof: {
        stateRoot: BytesLike;
        stateRootBatchHeader: {
          batchIndex: BigNumberish;
          batchRoot: BytesLike;
          batchSize: BigNumberish;
          prevTotalElements: BigNumberish;
          extraData: BytesLike;
        };
        stateRootProof: { index: BigNumberish; siblings: BytesLike[] };
        stateTrieWitness: BytesLike;
        storageTrieWitness: BytesLike;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "relayMessage(address,address,bytes,uint256,tuple)"(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _proof: {
        stateRoot: BytesLike;
        stateRootBatchHeader: {
          batchIndex: BigNumberish;
          batchRoot: BytesLike;
          batchSize: BigNumberish;
          prevTotalElements: BigNumberish;
          extraData: BytesLike;
        };
        stateRootProof: { index: BigNumberish; siblings: BytesLike[] };
        stateTrieWitness: BytesLike;
        storageTrieWitness: BytesLike;
      },
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    replayMessage(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _gasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "replayMessage(address,address,bytes,uint256,uint32)"(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _gasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    sendMessage(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "sendMessage(address,bytes,uint32)"(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    xDomainMessageSender(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "xDomainMessageSender()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  relayMessage(
    _target: string,
    _sender: string,
    _message: BytesLike,
    _messageNonce: BigNumberish,
    _proof: {
      stateRoot: BytesLike;
      stateRootBatchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      };
      stateRootProof: { index: BigNumberish; siblings: BytesLike[] };
      stateTrieWitness: BytesLike;
      storageTrieWitness: BytesLike;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "relayMessage(address,address,bytes,uint256,tuple)"(
    _target: string,
    _sender: string,
    _message: BytesLike,
    _messageNonce: BigNumberish,
    _proof: {
      stateRoot: BytesLike;
      stateRootBatchHeader: {
        batchIndex: BigNumberish;
        batchRoot: BytesLike;
        batchSize: BigNumberish;
        prevTotalElements: BigNumberish;
        extraData: BytesLike;
      };
      stateRootProof: { index: BigNumberish; siblings: BytesLike[] };
      stateTrieWitness: BytesLike;
      storageTrieWitness: BytesLike;
    },
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  replayMessage(
    _target: string,
    _sender: string,
    _message: BytesLike,
    _messageNonce: BigNumberish,
    _gasLimit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "replayMessage(address,address,bytes,uint256,uint32)"(
    _target: string,
    _sender: string,
    _message: BytesLike,
    _messageNonce: BigNumberish,
    _gasLimit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  sendMessage(
    _target: string,
    _message: BytesLike,
    _gasLimit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "sendMessage(address,bytes,uint32)"(
    _target: string,
    _message: BytesLike,
    _gasLimit: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  xDomainMessageSender(overrides?: CallOverrides): Promise<string>;

  "xDomainMessageSender()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    relayMessage(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _proof: {
        stateRoot: BytesLike;
        stateRootBatchHeader: {
          batchIndex: BigNumberish;
          batchRoot: BytesLike;
          batchSize: BigNumberish;
          prevTotalElements: BigNumberish;
          extraData: BytesLike;
        };
        stateRootProof: { index: BigNumberish; siblings: BytesLike[] };
        stateTrieWitness: BytesLike;
        storageTrieWitness: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    "relayMessage(address,address,bytes,uint256,tuple)"(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _proof: {
        stateRoot: BytesLike;
        stateRootBatchHeader: {
          batchIndex: BigNumberish;
          batchRoot: BytesLike;
          batchSize: BigNumberish;
          prevTotalElements: BigNumberish;
          extraData: BytesLike;
        };
        stateRootProof: { index: BigNumberish; siblings: BytesLike[] };
        stateTrieWitness: BytesLike;
        storageTrieWitness: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    replayMessage(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _gasLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "replayMessage(address,address,bytes,uint256,uint32)"(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _gasLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    sendMessage(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "sendMessage(address,bytes,uint32)"(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<string>;

    "xDomainMessageSender()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    FailedRelayedMessage(msgHash: null): EventFilter;

    RelayedMessage(msgHash: null): EventFilter;

    SentMessage(message: null): EventFilter;
  };

  estimateGas: {
    relayMessage(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _proof: {
        stateRoot: BytesLike;
        stateRootBatchHeader: {
          batchIndex: BigNumberish;
          batchRoot: BytesLike;
          batchSize: BigNumberish;
          prevTotalElements: BigNumberish;
          extraData: BytesLike;
        };
        stateRootProof: { index: BigNumberish; siblings: BytesLike[] };
        stateTrieWitness: BytesLike;
        storageTrieWitness: BytesLike;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    "relayMessage(address,address,bytes,uint256,tuple)"(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _proof: {
        stateRoot: BytesLike;
        stateRootBatchHeader: {
          batchIndex: BigNumberish;
          batchRoot: BytesLike;
          batchSize: BigNumberish;
          prevTotalElements: BigNumberish;
          extraData: BytesLike;
        };
        stateRootProof: { index: BigNumberish; siblings: BytesLike[] };
        stateTrieWitness: BytesLike;
        storageTrieWitness: BytesLike;
      },
      overrides?: Overrides
    ): Promise<BigNumber>;

    replayMessage(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _gasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "replayMessage(address,address,bytes,uint256,uint32)"(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _gasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    sendMessage(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "sendMessage(address,bytes,uint32)"(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<BigNumber>;

    "xDomainMessageSender()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    relayMessage(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _proof: {
        stateRoot: BytesLike;
        stateRootBatchHeader: {
          batchIndex: BigNumberish;
          batchRoot: BytesLike;
          batchSize: BigNumberish;
          prevTotalElements: BigNumberish;
          extraData: BytesLike;
        };
        stateRootProof: { index: BigNumberish; siblings: BytesLike[] };
        stateTrieWitness: BytesLike;
        storageTrieWitness: BytesLike;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "relayMessage(address,address,bytes,uint256,tuple)"(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _proof: {
        stateRoot: BytesLike;
        stateRootBatchHeader: {
          batchIndex: BigNumberish;
          batchRoot: BytesLike;
          batchSize: BigNumberish;
          prevTotalElements: BigNumberish;
          extraData: BytesLike;
        };
        stateRootProof: { index: BigNumberish; siblings: BytesLike[] };
        stateTrieWitness: BytesLike;
        storageTrieWitness: BytesLike;
      },
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    replayMessage(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _gasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "replayMessage(address,address,bytes,uint256,uint32)"(
      _target: string,
      _sender: string,
      _message: BytesLike,
      _messageNonce: BigNumberish,
      _gasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    sendMessage(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "sendMessage(address,bytes,uint32)"(
      _target: string,
      _message: BytesLike,
      _gasLimit: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    xDomainMessageSender(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "xDomainMessageSender()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
