"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class ChainlinkClientFactory extends ethers_1.ContractFactory {
    constructor(signer) {
        super(_abi, _bytecode, signer);
    }
    deploy(overrides) {
        return super.deploy(overrides);
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides);
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.ChainlinkClientFactory = ChainlinkClientFactory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "bytes32"
            }
        ],
        name: "ChainlinkRequested",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "bytes32"
            }
        ],
        name: "ChainlinkFulfilled",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "id",
                type: "bytes32"
            }
        ],
        name: "ChainlinkCancelled",
        type: "event"
    }
];
const _bytecode = "0x60806040526001600455348015601457600080fd5b5060358060226000396000f3006080604052600080fd00a165627a7a723058207cf50c7604054f938ed5959879334454bf85fafca8ad209475ef939f92df9b840029";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhaW5saW5rQ2xpZW50RmFjdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNoYWlubGlua0NsaWVudEZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBDQUEwQztBQUMxQyxvQkFBb0I7O0FBRXBCLG1DQUEyRDtBQU8zRCxNQUFhLHNCQUF1QixTQUFRLHdCQUFlO0lBQ3pELFlBQVksTUFBZTtRQUN6QixLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQWdDO1FBQ3JDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQTZCLENBQUM7SUFDN0QsQ0FBQztJQUNELG9CQUFvQixDQUFDLFNBQWdDO1FBQ25ELE9BQU8sS0FBSyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBZTtRQUNwQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFvQixDQUFDO0lBQ2xELENBQUM7SUFDRCxPQUFPLENBQUMsTUFBYztRQUNwQixPQUFPLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUEyQixDQUFDO0lBQ3pELENBQUM7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUNaLE9BQWUsRUFDZixnQkFBbUM7UUFFbkMsT0FBTyxJQUFJLGlCQUFRLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsQ0FBb0IsQ0FBQztJQUMxRSxDQUFDO0NBQ0Y7QUF2QkQsd0RBdUJDO0FBRUQsTUFBTSxJQUFJLEdBQUc7SUFDWDtRQUNFLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxPQUFPO0tBQ2Q7SUFDRDtRQUNFLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLE1BQU0sRUFBRTtZQUNOO2dCQUNFLE9BQU8sRUFBRSxJQUFJO2dCQUNiLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSxTQUFTO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLElBQUksRUFBRSxPQUFPO0tBQ2Q7Q0FDRixDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQ2Isa0xBQWtMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBHZW5lcmF0ZWQgYnkgdHMtZ2VuZXJhdG9yIHZlci4gMC4wLjggKi9cbi8qIHRzbGludDpkaXNhYmxlICovXG5cbmltcG9ydCB7IENvbnRyYWN0LCBDb250cmFjdEZhY3RvcnksIFNpZ25lciB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcImV0aGVycy9wcm92aWRlcnNcIjtcbmltcG9ydCB7IFVuc2lnbmVkVHJhbnNhY3Rpb24gfSBmcm9tIFwiZXRoZXJzL3V0aWxzL3RyYW5zYWN0aW9uXCI7XG5cbmltcG9ydCB7IFRyYW5zYWN0aW9uT3ZlcnJpZGVzIH0gZnJvbSBcIi5cIjtcbmltcG9ydCB7IENoYWlubGlua0NsaWVudCB9IGZyb20gXCIuL0NoYWlubGlua0NsaWVudFwiO1xuXG5leHBvcnQgY2xhc3MgQ2hhaW5saW5rQ2xpZW50RmFjdG9yeSBleHRlbmRzIENvbnRyYWN0RmFjdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHNpZ25lcj86IFNpZ25lcikge1xuICAgIHN1cGVyKF9hYmksIF9ieXRlY29kZSwgc2lnbmVyKTtcbiAgfVxuXG4gIGRlcGxveShvdmVycmlkZXM/OiBUcmFuc2FjdGlvbk92ZXJyaWRlcyk6IFByb21pc2U8Q2hhaW5saW5rQ2xpZW50PiB7XG4gICAgcmV0dXJuIHN1cGVyLmRlcGxveShvdmVycmlkZXMpIGFzIFByb21pc2U8Q2hhaW5saW5rQ2xpZW50PjtcbiAgfVxuICBnZXREZXBsb3lUcmFuc2FjdGlvbihvdmVycmlkZXM/OiBUcmFuc2FjdGlvbk92ZXJyaWRlcyk6IFVuc2lnbmVkVHJhbnNhY3Rpb24ge1xuICAgIHJldHVybiBzdXBlci5nZXREZXBsb3lUcmFuc2FjdGlvbihvdmVycmlkZXMpO1xuICB9XG4gIGF0dGFjaChhZGRyZXNzOiBzdHJpbmcpOiBDaGFpbmxpbmtDbGllbnQge1xuICAgIHJldHVybiBzdXBlci5hdHRhY2goYWRkcmVzcykgYXMgQ2hhaW5saW5rQ2xpZW50O1xuICB9XG4gIGNvbm5lY3Qoc2lnbmVyOiBTaWduZXIpOiBDaGFpbmxpbmtDbGllbnRGYWN0b3J5IHtcbiAgICByZXR1cm4gc3VwZXIuY29ubmVjdChzaWduZXIpIGFzIENoYWlubGlua0NsaWVudEZhY3Rvcnk7XG4gIH1cbiAgc3RhdGljIGNvbm5lY3QoXG4gICAgYWRkcmVzczogc3RyaW5nLFxuICAgIHNpZ25lck9yUHJvdmlkZXI6IFNpZ25lciB8IFByb3ZpZGVyXG4gICk6IENoYWlubGlua0NsaWVudCB7XG4gICAgcmV0dXJuIG5ldyBDb250cmFjdChhZGRyZXNzLCBfYWJpLCBzaWduZXJPclByb3ZpZGVyKSBhcyBDaGFpbmxpbmtDbGllbnQ7XG4gIH1cbn1cblxuY29uc3QgX2FiaSA9IFtcbiAge1xuICAgIGFub255bW91czogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXG4gICAgICAgIG5hbWU6IFwiaWRcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiQ2hhaW5saW5rUmVxdWVzdGVkXCIsXG4gICAgdHlwZTogXCJldmVudFwiXG4gIH0sXG4gIHtcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICBuYW1lOiBcImlkXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXMzMlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcIkNoYWlubGlua0Z1bGZpbGxlZFwiLFxuICAgIHR5cGU6IFwiZXZlbnRcIlxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgbmFtZTogXCJpZFwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJDaGFpbmxpbmtDYW5jZWxsZWRcIixcbiAgICB0eXBlOiBcImV2ZW50XCJcbiAgfVxuXTtcblxuY29uc3QgX2J5dGVjb2RlID1cbiAgXCIweDYwODA2MDQwNTI2MDAxNjAwNDU1MzQ4MDE1NjAxNDU3NjAwMDgwZmQ1YjUwNjAzNTgwNjAyMjYwMDAzOTYwMDBmMzAwNjA4MDYwNDA1MjYwMDA4MGZkMDBhMTY1NjI3YTdhNzIzMDU4MjA3Y2Y1MGM3NjA0MDU0ZjkzOGVkNTk1OTg3OTMzNDQ1NGJmODVmYWZjYThhZDIwOTQ3NWVmOTM5ZjkyZGY5Yjg0MDAyOVwiO1xuIl19