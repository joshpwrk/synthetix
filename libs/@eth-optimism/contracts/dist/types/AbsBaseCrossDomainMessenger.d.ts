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

interface AbsBaseCrossDomainMessengerInterface extends ethers.utils.Interface {
  functions: {
    "messageNonce()": FunctionFragment;
    "relayedMessages(bytes32)": FunctionFragment;
    "sendMessage(address,bytes,uint32)": FunctionFragment;
    "sentMessages(bytes32)": FunctionFragment;
    "successfulMessages(bytes32)": FunctionFragment;
    "xDomainMessageSender()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "messageNonce",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "relayedMessages",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [string, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sentMessages",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "successfulMessages",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "xDomainMessageSender",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "messageNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "relayedMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sentMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "successfulMessages",
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

export class AbsBaseCrossDomainMessenger extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: AbsBaseCrossDomainMessengerInterface;

  functions: {
    messageNonce(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "messageNonce()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    relayedMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "relayedMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

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

    sentMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "sentMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    successfulMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "successfulMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

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

  messageNonce(overrides?: CallOverrides): Promise<BigNumber>;

  "messageNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

  relayedMessages(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "relayedMessages(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

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

  sentMessages(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  "sentMessages(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  successfulMessages(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "successfulMessages(bytes32)"(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  xDomainMessageSender(overrides?: CallOverrides): Promise<string>;

  "xDomainMessageSender()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    messageNonce(overrides?: CallOverrides): Promise<BigNumber>;

    "messageNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    relayedMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "relayedMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

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

    sentMessages(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    "sentMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    successfulMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "successfulMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<string>;

    "xDomainMessageSender()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    FailedRelayedMessage(msgHash: null): EventFilter;

    RelayedMessage(msgHash: null): EventFilter;

    SentMessage(message: null): EventFilter;
  };

  estimateGas: {
    messageNonce(overrides?: CallOverrides): Promise<BigNumber>;

    "messageNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    relayedMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "relayedMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
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

    sentMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "sentMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    successfulMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "successfulMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    xDomainMessageSender(overrides?: CallOverrides): Promise<BigNumber>;

    "xDomainMessageSender()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    messageNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "messageNonce()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    relayedMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "relayedMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
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

    sentMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "sentMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    successfulMessages(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "successfulMessages(bytes32)"(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    xDomainMessageSender(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "xDomainMessageSender()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
