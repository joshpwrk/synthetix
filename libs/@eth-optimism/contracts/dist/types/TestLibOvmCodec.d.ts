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
  CallOverrides
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface TestLibOvmCodecInterface extends ethers.utils.Interface {
  functions: {
    "encodeTransaction(tuple)": FunctionFragment;
    "hashTransaction(tuple)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "encodeTransaction",
    values: [
      {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "hashTransaction",
    values: [
      {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      }
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "encodeTransaction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashTransaction",
    data: BytesLike
  ): Result;

  events: {};
}

export class TestLibOvmCodec extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TestLibOvmCodecInterface;

  functions: {
    encodeTransaction(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<{
      _encoded: string;
      0: string;
    }>;

    "encodeTransaction(tuple)"(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<{
      _encoded: string;
      0: string;
    }>;

    hashTransaction(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<{
      _hash: string;
      0: string;
    }>;

    "hashTransaction(tuple)"(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<{
      _hash: string;
      0: string;
    }>;
  };

  encodeTransaction(
    _transaction: {
      timestamp: BigNumberish;
      blockNumber: BigNumberish;
      l1QueueOrigin: BigNumberish;
      l1TxOrigin: string;
      entrypoint: string;
      gasLimit: BigNumberish;
      data: BytesLike;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  "encodeTransaction(tuple)"(
    _transaction: {
      timestamp: BigNumberish;
      blockNumber: BigNumberish;
      l1QueueOrigin: BigNumberish;
      l1TxOrigin: string;
      entrypoint: string;
      gasLimit: BigNumberish;
      data: BytesLike;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  hashTransaction(
    _transaction: {
      timestamp: BigNumberish;
      blockNumber: BigNumberish;
      l1QueueOrigin: BigNumberish;
      l1TxOrigin: string;
      entrypoint: string;
      gasLimit: BigNumberish;
      data: BytesLike;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  "hashTransaction(tuple)"(
    _transaction: {
      timestamp: BigNumberish;
      blockNumber: BigNumberish;
      l1QueueOrigin: BigNumberish;
      l1TxOrigin: string;
      entrypoint: string;
      gasLimit: BigNumberish;
      data: BytesLike;
    },
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    encodeTransaction(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    "encodeTransaction(tuple)"(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    hashTransaction(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<string>;

    "hashTransaction(tuple)"(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    encodeTransaction(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "encodeTransaction(tuple)"(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hashTransaction(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hashTransaction(tuple)"(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    encodeTransaction(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "encodeTransaction(tuple)"(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashTransaction(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hashTransaction(tuple)"(
      _transaction: {
        timestamp: BigNumberish;
        blockNumber: BigNumberish;
        l1QueueOrigin: BigNumberish;
        l1TxOrigin: string;
        entrypoint: string;
        gasLimit: BigNumberish;
        data: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
