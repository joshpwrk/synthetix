"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watcher = void 0;
const ethers_1 = require("ethers");
class Watcher {
    constructor(opts) {
        this.pollInterval = 3000;
        this.NUM_BLOCKS_TO_FETCH = 10000000;
        this.l1 = opts.l1;
        this.l2 = opts.l2;
        if (opts.pollInterval) {
            this.pollInterval = opts.pollInterval;
        }
    }
    async getMessageHashesFromL1Tx(l1TxHash) {
        return this.getMessageHashesFromTx(this.l1, l1TxHash);
    }
    async getMessageHashesFromL2Tx(l2TxHash) {
        return this.getMessageHashesFromTx(this.l2, l2TxHash);
    }
    async getL1TransactionReceipt(l2ToL1MsgHash, pollForPending = true) {
        return this.getTransactionReceipt(this.l1, l2ToL1MsgHash, pollForPending);
    }
    async getL2TransactionReceipt(l1ToL2MsgHash, pollForPending = true) {
        return this.getTransactionReceipt(this.l2, l1ToL2MsgHash, pollForPending);
    }
    async getMessageHashesFromTx(layer, txHash) {
        const receipt = await layer.provider.getTransactionReceipt(txHash);
        if (!receipt) {
            return [];
        }
        const msgHashes = [];
        for (const log of receipt.logs) {
            if (log.address === layer.messengerAddress &&
                log.topics[0] === ethers_1.ethers.utils.id('SentMessage(bytes)')) {
                const [message] = ethers_1.ethers.utils.defaultAbiCoder.decode(['bytes'], log.data);
                msgHashes.push(ethers_1.ethers.utils.solidityKeccak256(['bytes'], [message]));
            }
        }
        return msgHashes;
    }
    async getTransactionReceipt(layer, msgHash, pollForPending = true) {
        let matches = [];
        while (matches.length === 0) {
            const blockNumber = await layer.provider.getBlockNumber();
            const startingBlock = Math.max(blockNumber - this.NUM_BLOCKS_TO_FETCH, 0);
            const successFilter = {
                address: layer.messengerAddress,
                topics: [ethers_1.ethers.utils.id(`RelayedMessage(bytes32)`)],
                fromBlock: startingBlock
            };
            const failureFilter = {
                address: layer.messengerAddress,
                topics: [ethers_1.ethers.utils.id(`FailedRelayedMessage(bytes32)`)],
                fromBlock: startingBlock
            };
            const successLogs = await layer.provider.getLogs(successFilter);
            const failureLogs = await layer.provider.getLogs(failureFilter);
            const logs = successLogs.concat(failureLogs);
            matches = logs.filter((log) => log.data === msgHash);
            if (!pollForPending) {
                break;
            }
            await new Promise(r => setTimeout(r, this.pollInterval));
        }
        if (matches.length > 0) {
            if (matches.length > 1) {
                throw Error('Found multiple transactions relaying the same message hash.');
            }
            return layer.provider.getTransactionReceipt(matches[0].transactionHash);
        }
        else {
            return Promise.resolve(undefined);
        }
    }
}
exports.Watcher = Watcher;
//# sourceMappingURL=watcher.js.map