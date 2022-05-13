"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zeroesAndOnes = exports.calculateL1GasLimit = exports.ceilmod = exports.TxGasLimit = exports.TxGasPrice = void 0;
const ethers_1 = require("ethers");
const common_1 = require("./common");
const hundredMillion = ethers_1.BigNumber.from(100000000);
const feeScalar = 10000000;
exports.TxGasPrice = ethers_1.BigNumber.from(feeScalar + feeScalar / 2);
const txDataZeroGas = 4;
const txDataNonZeroGasEIP2028 = 16;
const overhead = 4200 + 200 * txDataNonZeroGasEIP2028;
const tenThousand = ethers_1.BigNumber.from(10000);
const encode = (input) => {
    const { data } = input;
    let { l1GasPrice, l2GasLimit, l2GasPrice } = input;
    if (typeof l1GasPrice === 'number') {
        l1GasPrice = ethers_1.BigNumber.from(l1GasPrice);
    }
    if (typeof l2GasLimit === 'number') {
        l2GasLimit = ethers_1.BigNumber.from(l2GasLimit);
    }
    if (typeof l2GasPrice === 'number') {
        l2GasPrice = ethers_1.BigNumber.from(l2GasPrice);
    }
    const l1GasLimit = exports.calculateL1GasLimit(data);
    const roundedL2GasLimit = exports.ceilmod(l2GasLimit, tenThousand);
    const l1Fee = l1GasLimit.mul(l1GasPrice);
    const l2Fee = roundedL2GasLimit.mul(l2GasPrice);
    const sum = l1Fee.add(l2Fee);
    const scaled = sum.div(feeScalar);
    const rounded = exports.ceilmod(scaled, tenThousand);
    const roundedScaledL2GasLimit = roundedL2GasLimit.div(tenThousand);
    return rounded.add(roundedScaledL2GasLimit);
};
const decode = (fee) => {
    if (typeof fee === 'number') {
        fee = ethers_1.BigNumber.from(fee);
    }
    const scaled = fee.mod(tenThousand);
    return scaled.mul(tenThousand);
};
exports.TxGasLimit = {
    encode,
    decode,
};
const ceilmod = (a, b) => {
    if (typeof a === 'number') {
        a = ethers_1.BigNumber.from(a);
    }
    if (typeof b === 'number') {
        b = ethers_1.BigNumber.from(b);
    }
    const remainder = a.mod(b);
    if (remainder.eq(0)) {
        return a;
    }
    const sum = a.add(b);
    const rounded = sum.sub(remainder);
    return rounded;
};
exports.ceilmod = ceilmod;
const calculateL1GasLimit = (data) => {
    const [zeroes, ones] = exports.zeroesAndOnes(data);
    const zeroesCost = zeroes * txDataZeroGas;
    const onesCost = ones * txDataNonZeroGasEIP2028;
    const gasLimit = zeroesCost + onesCost + overhead;
    return ethers_1.BigNumber.from(gasLimit);
};
exports.calculateL1GasLimit = calculateL1GasLimit;
const zeroesAndOnes = (data) => {
    if (typeof data === 'string') {
        data = Buffer.from(common_1.remove0x(data), 'hex');
    }
    let zeros = 0;
    let ones = 0;
    for (const byte of data) {
        if (byte === 0) {
            zeros++;
        }
        else {
            ones++;
        }
    }
    return [zeros, ones];
};
exports.zeroesAndOnes = zeroesAndOnes;
//# sourceMappingURL=fees.js.map