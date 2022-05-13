import { Provider, TransactionReceipt } from '@ethersproject/abstract-provider';
export interface Layer {
    provider: Provider;
    messengerAddress: string;
}
export interface WatcherOptions {
    l1: Layer;
    l2: Layer;
    pollInterval?: number;
}
export declare class Watcher {
    l1: Layer;
    l2: Layer;
    pollInterval: number;
    NUM_BLOCKS_TO_FETCH: number;
    constructor(opts: WatcherOptions);
    getMessageHashesFromL1Tx(l1TxHash: string): Promise<string[]>;
    getMessageHashesFromL2Tx(l2TxHash: string): Promise<string[]>;
    getL1TransactionReceipt(l2ToL1MsgHash: string, pollForPending?: boolean): Promise<TransactionReceipt>;
    getL2TransactionReceipt(l1ToL2MsgHash: string, pollForPending?: boolean): Promise<TransactionReceipt>;
    getMessageHashesFromTx(layer: Layer, txHash: string): Promise<string[]>;
    getTransactionReceipt(layer: Layer, msgHash: string, pollForPending?: boolean): Promise<TransactionReceipt>;
}
