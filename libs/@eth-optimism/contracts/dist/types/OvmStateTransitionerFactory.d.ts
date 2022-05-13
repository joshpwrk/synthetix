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

interface OvmStateTransitionerFactoryInterface extends ethers.utils.Interface {
  functions: {
    "create(address,uint256,bytes32,bytes32)": FunctionFragment;
    "libAddressManager()": FunctionFragment;
    "resolve(string)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "create",
    values: [string, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "libAddressManager",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "resolve", values: [string]): string;

  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "libAddressManager",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resolve", data: BytesLike): Result;

  events: {};
}

export class OvmStateTransitionerFactory extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: OvmStateTransitionerFactoryInterface;

  functions: {
    create(
      _libAddressManager: string,
      _stateTransitionIndex: BigNumberish,
      _preStateRoot: BytesLike,
      _transactionHash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "create(address,uint256,bytes32,bytes32)"(
      _libAddressManager: string,
      _stateTransitionIndex: BigNumberish,
      _preStateRoot: BytesLike,
      _transactionHash: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    libAddressManager(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "libAddressManager()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    resolve(
      _name: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "resolve(string)"(
      _name: string,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;
  };

  create(
    _libAddressManager: string,
    _stateTransitionIndex: BigNumberish,
    _preStateRoot: BytesLike,
    _transactionHash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "create(address,uint256,bytes32,bytes32)"(
    _libAddressManager: string,
    _stateTransitionIndex: BigNumberish,
    _preStateRoot: BytesLike,
    _transactionHash: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  libAddressManager(overrides?: CallOverrides): Promise<string>;

  "libAddressManager()"(overrides?: CallOverrides): Promise<string>;

  resolve(_name: string, overrides?: CallOverrides): Promise<string>;

  "resolve(string)"(_name: string, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    create(
      _libAddressManager: string,
      _stateTransitionIndex: BigNumberish,
      _preStateRoot: BytesLike,
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "create(address,uint256,bytes32,bytes32)"(
      _libAddressManager: string,
      _stateTransitionIndex: BigNumberish,
      _preStateRoot: BytesLike,
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    libAddressManager(overrides?: CallOverrides): Promise<string>;

    "libAddressManager()"(overrides?: CallOverrides): Promise<string>;

    resolve(_name: string, overrides?: CallOverrides): Promise<string>;

    "resolve(string)"(
      _name: string,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    create(
      _libAddressManager: string,
      _stateTransitionIndex: BigNumberish,
      _preStateRoot: BytesLike,
      _transactionHash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "create(address,uint256,bytes32,bytes32)"(
      _libAddressManager: string,
      _stateTransitionIndex: BigNumberish,
      _preStateRoot: BytesLike,
      _transactionHash: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    libAddressManager(overrides?: CallOverrides): Promise<BigNumber>;

    "libAddressManager()"(overrides?: CallOverrides): Promise<BigNumber>;

    resolve(_name: string, overrides?: CallOverrides): Promise<BigNumber>;

    "resolve(string)"(
      _name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    create(
      _libAddressManager: string,
      _stateTransitionIndex: BigNumberish,
      _preStateRoot: BytesLike,
      _transactionHash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "create(address,uint256,bytes32,bytes32)"(
      _libAddressManager: string,
      _stateTransitionIndex: BigNumberish,
      _preStateRoot: BytesLike,
      _transactionHash: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    libAddressManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "libAddressManager()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resolve(
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "resolve(string)"(
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
