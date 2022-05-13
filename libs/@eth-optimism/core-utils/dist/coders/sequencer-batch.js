"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequencerBatch = exports.decodeAppendSequencerBatch = exports.encodeAppendSequencerBatch = void 0;
const common_1 = require("../common");
const ethers_1 = require("ethers");
const APPEND_SEQUENCER_BATCH_METHOD_ID = 'appendSequencerBatch()';
const encodeAppendSequencerBatch = (b) => {
    const encodeShouldStartAtElement = common_1.encodeHex(b.shouldStartAtElement, 10);
    const encodedTotalElementsToAppend = common_1.encodeHex(b.totalElementsToAppend, 6);
    const encodedContextsHeader = common_1.encodeHex(b.contexts.length, 6);
    const encodedContexts = encodedContextsHeader +
        b.contexts.reduce((acc, cur) => acc + encodeBatchContext(cur), '');
    const encodedTransactionData = b.transactions.reduce((acc, cur) => {
        if (cur.length % 2 !== 0) {
            throw new Error('Unexpected uneven hex string value!');
        }
        const encodedTxDataHeader = common_1.remove0x(ethers_1.BigNumber.from(common_1.remove0x(cur).length / 2).toHexString()).padStart(6, '0');
        return acc + encodedTxDataHeader + common_1.remove0x(cur);
    }, '');
    return (encodeShouldStartAtElement +
        encodedTotalElementsToAppend +
        encodedContexts +
        encodedTransactionData);
};
exports.encodeAppendSequencerBatch = encodeAppendSequencerBatch;
const encodeBatchContext = (context) => {
    return (common_1.encodeHex(context.numSequencedTransactions, 6) +
        common_1.encodeHex(context.numSubsequentQueueTransactions, 6) +
        common_1.encodeHex(context.timestamp, 10) +
        common_1.encodeHex(context.blockNumber, 10));
};
const decodeAppendSequencerBatch = (b) => {
    b = common_1.remove0x(b);
    const shouldStartAtElement = b.slice(0, 10);
    const totalElementsToAppend = b.slice(10, 16);
    const contextHeader = b.slice(16, 22);
    const contextCount = parseInt(contextHeader, 16);
    let offset = 22;
    const contexts = [];
    for (let i = 0; i < contextCount; i++) {
        const numSequencedTransactions = b.slice(offset, offset + 6);
        offset += 6;
        const numSubsequentQueueTransactions = b.slice(offset, offset + 6);
        offset += 6;
        const timestamp = b.slice(offset, offset + 10);
        offset += 10;
        const blockNumber = b.slice(offset, offset + 10);
        offset += 10;
        contexts.push({
            numSequencedTransactions: parseInt(numSequencedTransactions, 16),
            numSubsequentQueueTransactions: parseInt(numSubsequentQueueTransactions, 16),
            timestamp: parseInt(timestamp, 16),
            blockNumber: parseInt(blockNumber, 16),
        });
    }
    const transactions = [];
    for (const context of contexts) {
        for (let i = 0; i < context.numSequencedTransactions; i++) {
            const size = b.slice(offset, offset + 6);
            offset += 6;
            const raw = b.slice(offset, offset + parseInt(size, 16) * 2);
            transactions.push(common_1.add0x(raw));
            offset += raw.length;
        }
    }
    return {
        shouldStartAtElement: parseInt(shouldStartAtElement, 16),
        totalElementsToAppend: parseInt(totalElementsToAppend, 16),
        contexts,
        transactions,
    };
};
exports.decodeAppendSequencerBatch = decodeAppendSequencerBatch;
exports.sequencerBatch = {
    encode: (b) => {
        return (ethers_1.ethers.utils.id(APPEND_SEQUENCER_BATCH_METHOD_ID).slice(0, 10) +
            exports.encodeAppendSequencerBatch(b));
    },
    decode: (b) => {
        b = common_1.remove0x(b);
        const functionSelector = b.slice(0, 8);
        if (functionSelector !==
            ethers_1.ethers.utils.id(APPEND_SEQUENCER_BATCH_METHOD_ID).slice(2, 10)) {
            throw new Error('Incorrect function signature');
        }
        return exports.decodeAppendSequencerBatch(b.slice(8));
    },
};
//# sourceMappingURL=sequencer-batch.js.map