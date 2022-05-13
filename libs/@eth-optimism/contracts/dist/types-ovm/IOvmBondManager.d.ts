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

interface IOvmBondManagerInterface extends ethers.utils.Interface {
  functions: {
    "claim(address)": FunctionFragment;
    "deposit()": FunctionFragment;
    "finalize(bytes32,address,uint256)": FunctionFragment;
    "finalizeWithdrawal()": FunctionFragment;
    "getGasSpent(bytes32,address)": FunctionFragment;
    "isCollateralized(address)": FunctionFragment;
    "recordGasSpent(bytes32,bytes32,address,uint256)": FunctionFragment;
    "startWithdrawal()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "claim", values: [string]): string;
  encodeFunctionData(functionFragment: "deposit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "finalize",
    values: [BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "finalizeWithdrawal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGasSpent",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "isCollateralized",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "recordGasSpent",
    values: [BytesLike, BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "startWithdrawal",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "finalize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "finalizeWithdrawal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasSpent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCollateralized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recordGasSpent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startWithdrawal",
    data: BytesLike
  ): Result;

  events: {};
}

export class IOvmBondManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IOvmBondManagerInterface;

  functions: {
    claim(_who: string, overrides?: Overrides): Promise<ContractTransaction>;

    "claim(address)"(
      _who: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    deposit(overrides?: Overrides): Promise<ContractTransaction>;

    "deposit()"(overrides?: Overrides): Promise<ContractTransaction>;

    finalize(
      _preStateRoot: BytesLike,
      _publisher: string,
      _timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "finalize(bytes32,address,uint256)"(
      _preStateRoot: BytesLike,
      _publisher: string,
      _timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    finalizeWithdrawal(overrides?: Overrides): Promise<ContractTransaction>;

    "finalizeWithdrawal()"(overrides?: Overrides): Promise<ContractTransaction>;

    getGasSpent(
      _preStateRoot: BytesLike,
      _who: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getGasSpent(bytes32,address)"(
      _preStateRoot: BytesLike,
      _who: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    isCollateralized(
      _who: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isCollateralized(address)"(
      _who: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    recordGasSpent(
      _preStateRoot: BytesLike,
      _txHash: BytesLike,
      _who: string,
      _gasSpent: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "recordGasSpent(bytes32,bytes32,address,uint256)"(
      _preStateRoot: BytesLike,
      _txHash: BytesLike,
      _who: string,
      _gasSpent: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    startWithdrawal(overrides?: Overrides): Promise<ContractTransaction>;

    "startWithdrawal()"(overrides?: Overrides): Promise<ContractTransaction>;
  };

  claim(_who: string, overrides?: Overrides): Promise<ContractTransaction>;

  "claim(address)"(
    _who: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  deposit(overrides?: Overrides): Promise<ContractTransaction>;

  "deposit()"(overrides?: Overrides): Promise<ContractTransaction>;

  finalize(
    _preStateRoot: BytesLike,
    _publisher: string,
    _timestamp: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "finalize(bytes32,address,uint256)"(
    _preStateRoot: BytesLike,
    _publisher: string,
    _timestamp: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  finalizeWithdrawal(overrides?: Overrides): Promise<ContractTransaction>;

  "finalizeWithdrawal()"(overrides?: Overrides): Promise<ContractTransaction>;

  getGasSpent(
    _preStateRoot: BytesLike,
    _who: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getGasSpent(bytes32,address)"(
    _preStateRoot: BytesLike,
    _who: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isCollateralized(_who: string, overrides?: CallOverrides): Promise<boolean>;

  "isCollateralized(address)"(
    _who: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  recordGasSpent(
    _preStateRoot: BytesLike,
    _txHash: BytesLike,
    _who: string,
    _gasSpent: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "recordGasSpent(bytes32,bytes32,address,uint256)"(
    _preStateRoot: BytesLike,
    _txHash: BytesLike,
    _who: string,
    _gasSpent: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  startWithdrawal(overrides?: Overrides): Promise<ContractTransaction>;

  "startWithdrawal()"(overrides?: Overrides): Promise<ContractTransaction>;

  callStatic: {
    claim(_who: string, overrides?: CallOverrides): Promise<void>;

    "claim(address)"(_who: string, overrides?: CallOverrides): Promise<void>;

    deposit(overrides?: CallOverrides): Promise<void>;

    "deposit()"(overrides?: CallOverrides): Promise<void>;

    finalize(
      _preStateRoot: BytesLike,
      _publisher: string,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "finalize(bytes32,address,uint256)"(
      _preStateRoot: BytesLike,
      _publisher: string,
      _timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    finalizeWithdrawal(overrides?: CallOverrides): Promise<void>;

    "finalizeWithdrawal()"(overrides?: CallOverrides): Promise<void>;

    getGasSpent(
      _preStateRoot: BytesLike,
      _who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasSpent(bytes32,address)"(
      _preStateRoot: BytesLike,
      _who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCollateralized(_who: string, overrides?: CallOverrides): Promise<boolean>;

    "isCollateralized(address)"(
      _who: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    recordGasSpent(
      _preStateRoot: BytesLike,
      _txHash: BytesLike,
      _who: string,
      _gasSpent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "recordGasSpent(bytes32,bytes32,address,uint256)"(
      _preStateRoot: BytesLike,
      _txHash: BytesLike,
      _who: string,
      _gasSpent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    startWithdrawal(overrides?: CallOverrides): Promise<void>;

    "startWithdrawal()"(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    claim(_who: string, overrides?: Overrides): Promise<BigNumber>;

    "claim(address)"(_who: string, overrides?: Overrides): Promise<BigNumber>;

    deposit(overrides?: Overrides): Promise<BigNumber>;

    "deposit()"(overrides?: Overrides): Promise<BigNumber>;

    finalize(
      _preStateRoot: BytesLike,
      _publisher: string,
      _timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "finalize(bytes32,address,uint256)"(
      _preStateRoot: BytesLike,
      _publisher: string,
      _timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    finalizeWithdrawal(overrides?: Overrides): Promise<BigNumber>;

    "finalizeWithdrawal()"(overrides?: Overrides): Promise<BigNumber>;

    getGasSpent(
      _preStateRoot: BytesLike,
      _who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasSpent(bytes32,address)"(
      _preStateRoot: BytesLike,
      _who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isCollateralized(
      _who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isCollateralized(address)"(
      _who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    recordGasSpent(
      _preStateRoot: BytesLike,
      _txHash: BytesLike,
      _who: string,
      _gasSpent: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "recordGasSpent(bytes32,bytes32,address,uint256)"(
      _preStateRoot: BytesLike,
      _txHash: BytesLike,
      _who: string,
      _gasSpent: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    startWithdrawal(overrides?: Overrides): Promise<BigNumber>;

    "startWithdrawal()"(overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(_who: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "claim(address)"(
      _who: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    deposit(overrides?: Overrides): Promise<PopulatedTransaction>;

    "deposit()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    finalize(
      _preStateRoot: BytesLike,
      _publisher: string,
      _timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "finalize(bytes32,address,uint256)"(
      _preStateRoot: BytesLike,
      _publisher: string,
      _timestamp: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    finalizeWithdrawal(overrides?: Overrides): Promise<PopulatedTransaction>;

    "finalizeWithdrawal()"(
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    getGasSpent(
      _preStateRoot: BytesLike,
      _who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGasSpent(bytes32,address)"(
      _preStateRoot: BytesLike,
      _who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isCollateralized(
      _who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isCollateralized(address)"(
      _who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    recordGasSpent(
      _preStateRoot: BytesLike,
      _txHash: BytesLike,
      _who: string,
      _gasSpent: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "recordGasSpent(bytes32,bytes32,address,uint256)"(
      _preStateRoot: BytesLike,
      _txHash: BytesLike,
      _who: string,
      _gasSpent: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    startWithdrawal(overrides?: Overrides): Promise<PopulatedTransaction>;

    "startWithdrawal()"(overrides?: Overrides): Promise<PopulatedTransaction>;
  };
}
