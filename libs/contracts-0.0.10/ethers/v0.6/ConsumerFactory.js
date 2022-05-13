"use strict";
/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
class ConsumerFactory extends ethers_1.ContractFactory {
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
exports.ConsumerFactory = ConsumerFactory;
const _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
                name: "id",
                type: "bytes32"
            }
        ],
        name: "ChainlinkCancelled",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "bytes32",
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
                internalType: "bytes32",
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
                internalType: "bytes32",
                name: "requestId",
                type: "bytes32"
            },
            {
                indexed: true,
                internalType: "bytes32",
                name: "price",
                type: "bytes32"
            }
        ],
        name: "RequestFulfilled",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_oracle",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "_requestId",
                type: "bytes32"
            }
        ],
        name: "addExternalRequest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_oracle",
                type: "address"
            },
            {
                internalType: "bytes32",
                name: "_requestId",
                type: "bytes32"
            },
            {
                internalType: "uint256",
                name: "_payment",
                type: "uint256"
            },
            {
                internalType: "bytes4",
                name: "_callbackFunctionId",
                type: "bytes4"
            },
            {
                internalType: "uint256",
                name: "_expiration",
                type: "uint256"
            }
        ],
        name: "cancelRequest",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "currentPrice",
        outputs: [
            {
                internalType: "bytes32",
                name: "",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "_requestId",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "_price",
                type: "bytes32"
            }
        ],
        name: "fulfill",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_currency",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "_payment",
                type: "uint256"
            }
        ],
        name: "requestEthereumPrice",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "_currency",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "_payment",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "_callback",
                type: "address"
            }
        ],
        name: "requestEthereumPriceByCallback",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "withdrawLink",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
const _bytecode = "0x6080604052600160045534801561001557600080fd5b50611307806100256000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806383db5cbc1161005b57806383db5cbc146101d55780638dc654a21461027d5780639d1b464a14610285578063e8d5359d1461029f5761007d565b8063042f2b65146100825780635591a608146100a757806374961d4d14610114575b600080fd5b6100a56004803603604081101561009857600080fd5b50803590602001356102d8565b005b6100a5600480360360a08110156100bd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020810135906040810135907fffffffff0000000000000000000000000000000000000000000000000000000060608201351690608001356103e5565b6100a56004803603606081101561012a57600080fd5b81019060208101813564010000000081111561014557600080fd5b82018360208201111561015757600080fd5b8035906020019184600183028401116401000000008311171561017957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550508235935050506020013573ffffffffffffffffffffffffffffffffffffffff166104ac565b6100a5600480360360408110156101eb57600080fd5b81019060208101813564010000000081111561020657600080fd5b82018360208201111561021857600080fd5b8035906020019184600183028401116401000000008311171561023a57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050913592506105e7915050565b6100a56105f6565b61028d6107b3565b60408051918252519081900360200190f35b6100a5600480360360408110156102b557600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356107b9565b600082815260056020526040902054829073ffffffffffffffffffffffffffffffffffffffff163314610356576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806112636028913960400191505060405180910390fd5b60008181526005602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555182917f7cc135e0cebb02c3480ae5d74d377283180a2601f8f644edf7987b009316c63a91a2604051829084907f0c2366233f634048c0f0458060d1228fab36d00f7c0ecf6bdf2d9c458503631190600090a35060075550565b604080517f6ee4d55300000000000000000000000000000000000000000000000000000000815260048101869052602481018590527fffffffff0000000000000000000000000000000000000000000000000000000084166044820152606481018390529051869173ffffffffffffffffffffffffffffffffffffffff831691636ee4d5539160848082019260009290919082900301818387803b15801561048c57600080fd5b505af11580156104a0573d6000803e3d6000fd5b50505050505050505050565b6104b46111f0565b6006546104e290837f042f2b65000000000000000000000000000000000000000000000000000000006107c3565b90506105446040518060400160405280600381526020017f676574000000000000000000000000000000000000000000000000000000000081525060405180608001604052806047815260200161128b6047913983919063ffffffff6107ee16565b604080516001808252818301909252606091816020015b606081526020019060019003908161055b579050509050848160008151811061058057fe5b60200260200101819052506105d56040518060400160405280600481526020017f7061746800000000000000000000000000000000000000000000000000000000815250828461081d9092919063ffffffff16565b6105df828561088b565b505050505050565b6105f28282306104ac565b5050565b60006106006108bb565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191925073ffffffffffffffffffffffffffffffffffffffff83169163a9059cbb91339184916370a08231916024808301926020929190829003018186803b15801561067957600080fd5b505afa15801561068d573d6000803e3d6000fd5b505050506040513d60208110156106a357600080fd5b5051604080517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b16815273ffffffffffffffffffffffffffffffffffffffff909316600484015260248301919091525160448083019260209291908290030181600087803b15801561071957600080fd5b505af115801561072d573d6000803e3d6000fd5b505050506040513d602081101561074357600080fd5b50516107b057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f556e61626c6520746f207472616e736665720000000000000000000000000000604482015290519081900360640190fd5b50565b60075481565b6105f282826108d7565b6107cb6111f0565b6107d36111f0565b6107e58186868663ffffffff6109be16565b95945050505050565b6080830151610803908363ffffffff610a2016565b6080830151610818908263ffffffff610a2016565b505050565b6080830151610832908363ffffffff610a2016565b61083f8360800151610a3d565b60005b815181101561087d5761087582828151811061085a57fe5b60200260200101518560800151610a2090919063ffffffff16565b600101610842565b506108188360800151610a48565b6003546000906108b29073ffffffffffffffffffffffffffffffffffffffff168484610a53565b90505b92915050565b60025473ffffffffffffffffffffffffffffffffffffffff1690565b600081815260056020526040902054819073ffffffffffffffffffffffffffffffffffffffff161561096a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f5265717565737420697320616c72656164792070656e64696e67000000000000604482015290519081900360640190fd5b50600090815260056020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6109c66111f0565b6109d68560800151610100610c90565b505091835273ffffffffffffffffffffffffffffffffffffffff1660208301527fffffffff0000000000000000000000000000000000000000000000000000000016604082015290565b610a2d8260038351610cca565b610818828263ffffffff610dda16565b6107b0816004610df4565b6107b0816007610df4565b6004546040805130606090811b60208084019190915260348084018690528451808503909101815260549093018452825192810192909220908601939093526000838152600590915281812080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8816179055905182917fb5e6e01e79f91267dc17b4e6314d5d4d03593d2ceee0fbb452b750bd70ea5af991a260025473ffffffffffffffffffffffffffffffffffffffff16634000aea08584610b2d87610e0f565b6040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610bb1578181015183820152602001610b99565b50505050905090810190601f168015610bde5780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b158015610bff57600080fd5b505af1158015610c13573d6000803e3d6000fd5b505050506040513d6020811015610c2957600080fd5b5051610c80576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806112406023913960400191505060405180910390fd5b6004805460010190559392505050565b610c98611225565b6020820615610cad5760208206602003820191505b506020828101829052604080518085526000815290920101905290565b60178111610cf157610ceb8360e0600585901b16831763ffffffff610ff816565b50610818565b60ff8111610d2757610d14836018611fe0600586901b161763ffffffff610ff816565b50610ceb8382600163ffffffff61101016565b61ffff8111610d5e57610d4b836019611fe0600586901b161763ffffffff610ff816565b50610ceb8382600263ffffffff61101016565b63ffffffff8111610d9757610d8483601a611fe0600586901b161763ffffffff610ff816565b50610ceb8382600463ffffffff61101016565b67ffffffffffffffff811161081857610dc183601b611fe0600586901b161763ffffffff610ff816565b50610dd48382600863ffffffff61101016565b50505050565b610de2611225565b6108b283846000015151848551611031565b61081882601f611fe0600585901b161763ffffffff610ff816565b6060634042994660e01b60008084600001518560200151866040015187606001516001896080015160000151604051602401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018881526020018781526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001857bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015610f3b578181015183820152602001610f23565b50505050905090810190601f168015610f685780820380516001836020036101000a031916815260200191505b50604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909d169c909c17909b5250989950505050505050505050919050565b611000611225565b6108b28384600001515184611119565b611018611225565b611029848560000151518585611164565b949350505050565b611039611225565b825182111561104757600080fd5b84602001518285011115611071576110718561106987602001518786016111c2565b6002026111d9565b6000808651805187602083010193508088870111156110905787860182525b505050602084015b602084106110d557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09093019260209182019101611098565b5181517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60208690036101000a019081169019919091161790525083949350505050565b611121611225565b8360200151831061113d5761113d8485602001516002026111d9565b83518051602085830101848153508085141561115a576001810182525b5093949350505050565b61116c611225565b8460200151848301111561118957611189858584016002026111d9565b60006001836101000a0390508551838682010185831982511617815250805184870111156111b75783860181525b509495945050505050565b6000818311156111d35750816108b5565b50919050565b81516111e58383610c90565b50610dd48382610dda565b6040805160a081018252600080825260208201819052918101829052606081019190915260808101611220611225565b905290565b60405180604001604052806060815260200160008152509056fe756e61626c6520746f207472616e73666572416e6443616c6c20746f206f7261636c65536f75726365206d75737420626520746865206f7261636c65206f6620746865207265717565737468747470733a2f2f6d696e2d6170692e63727970746f636f6d706172652e636f6d2f646174612f70726963653f6673796d3d455448267473796d733d5553442c4555522c4a5059a26469706673582212202915366eac988b08070f1c8d074fe3943091bb0ac0e17821ded3eb3b4559262964736f6c63430006060033";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uc3VtZXJGYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ29uc3VtZXJGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQ0FBMEM7QUFDMUMsb0JBQW9COztBQUVwQixtQ0FBMkQ7QUFPM0QsTUFBYSxlQUFnQixTQUFRLHdCQUFlO0lBQ2xELFlBQVksTUFBZTtRQUN6QixLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQWdDO1FBQ3JDLE9BQU8sS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQXNCLENBQUM7SUFDdEQsQ0FBQztJQUNELG9CQUFvQixDQUFDLFNBQWdDO1FBQ25ELE9BQU8sS0FBSyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxNQUFNLENBQUMsT0FBZTtRQUNwQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFhLENBQUM7SUFDM0MsQ0FBQztJQUNELE9BQU8sQ0FBQyxNQUFjO1FBQ3BCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQW9CLENBQUM7SUFDbEQsQ0FBQztJQUNELE1BQU0sQ0FBQyxPQUFPLENBQ1osT0FBZSxFQUNmLGdCQUFtQztRQUVuQyxPQUFPLElBQUksaUJBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFhLENBQUM7SUFDbkUsQ0FBQztDQUNGO0FBdkJELDBDQXVCQztBQUVELE1BQU0sSUFBSSxHQUFHO0lBQ1g7UUFDRSxTQUFTLEVBQUUsS0FBSztRQUNoQixNQUFNLEVBQUU7WUFDTjtnQkFDRSxPQUFPLEVBQUUsSUFBSTtnQkFDYixZQUFZLEVBQUUsU0FBUztnQkFDdkIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRjtRQUNELElBQUksRUFBRSxvQkFBb0I7UUFDMUIs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LWdlbmVyYXRvciB2ZXIuIDAuMC44ICovXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuXG5pbXBvcnQgeyBDb250cmFjdCwgQ29udHJhY3RGYWN0b3J5LCBTaWduZXIgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJldGhlcnMvcHJvdmlkZXJzXCI7XG5pbXBvcnQgeyBVbnNpZ25lZFRyYW5zYWN0aW9uIH0gZnJvbSBcImV0aGVycy91dGlscy90cmFuc2FjdGlvblwiO1xuXG5pbXBvcnQgeyBUcmFuc2FjdGlvbk92ZXJyaWRlcyB9IGZyb20gXCIuXCI7XG5pbXBvcnQgeyBDb25zdW1lciB9IGZyb20gXCIuL0NvbnN1bWVyXCI7XG5cbmV4cG9ydCBjbGFzcyBDb25zdW1lckZhY3RvcnkgZXh0ZW5kcyBDb250cmFjdEZhY3Rvcnkge1xuICBjb25zdHJ1Y3RvcihzaWduZXI/OiBTaWduZXIpIHtcbiAgICBzdXBlcihfYWJpLCBfYnl0ZWNvZGUsIHNpZ25lcik7XG4gIH1cblxuICBkZXBsb3kob3ZlcnJpZGVzPzogVHJhbnNhY3Rpb25PdmVycmlkZXMpOiBQcm9taXNlPENvbnN1bWVyPiB7XG4gICAgcmV0dXJuIHN1cGVyLmRlcGxveShvdmVycmlkZXMpIGFzIFByb21pc2U8Q29uc3VtZXI+O1xuICB9XG4gIGdldERlcGxveVRyYW5zYWN0aW9uKG92ZXJyaWRlcz86IFRyYW5zYWN0aW9uT3ZlcnJpZGVzKTogVW5zaWduZWRUcmFuc2FjdGlvbiB7XG4gICAgcmV0dXJuIHN1cGVyLmdldERlcGxveVRyYW5zYWN0aW9uKG92ZXJyaWRlcyk7XG4gIH1cbiAgYXR0YWNoKGFkZHJlc3M6IHN0cmluZyk6IENvbnN1bWVyIHtcbiAgICByZXR1cm4gc3VwZXIuYXR0YWNoKGFkZHJlc3MpIGFzIENvbnN1bWVyO1xuICB9XG4gIGNvbm5lY3Qoc2lnbmVyOiBTaWduZXIpOiBDb25zdW1lckZhY3Rvcnkge1xuICAgIHJldHVybiBzdXBlci5jb25uZWN0KHNpZ25lcikgYXMgQ29uc3VtZXJGYWN0b3J5O1xuICB9XG4gIHN0YXRpYyBjb25uZWN0KFxuICAgIGFkZHJlc3M6IHN0cmluZyxcbiAgICBzaWduZXJPclByb3ZpZGVyOiBTaWduZXIgfCBQcm92aWRlclxuICApOiBDb25zdW1lciB7XG4gICAgcmV0dXJuIG5ldyBDb250cmFjdChhZGRyZXNzLCBfYWJpLCBzaWduZXJPclByb3ZpZGVyKSBhcyBDb25zdW1lcjtcbiAgfVxufVxuXG5jb25zdCBfYWJpID0gW1xuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImJ5dGVzMzJcIixcbiAgICAgICAgbmFtZTogXCJpZFwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJDaGFpbmxpbmtDYW5jZWxsZWRcIixcbiAgICB0eXBlOiBcImV2ZW50XCJcbiAgfSxcbiAge1xuICAgIGFub255bW91czogZmFsc2UsXG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXG4gICAgICAgIGludGVybmFsVHlwZTogXCJieXRlczMyXCIsXG4gICAgICAgIG5hbWU6IFwiaWRcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiQ2hhaW5saW5rRnVsZmlsbGVkXCIsXG4gICAgdHlwZTogXCJldmVudFwiXG4gIH0sXG4gIHtcbiAgICBhbm9ueW1vdXM6IGZhbHNlLFxuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbmRleGVkOiB0cnVlLFxuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYnl0ZXMzMlwiLFxuICAgICAgICBuYW1lOiBcImlkXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXMzMlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcIkNoYWlubGlua1JlcXVlc3RlZFwiLFxuICAgIHR5cGU6IFwiZXZlbnRcIlxuICB9LFxuICB7XG4gICAgYW5vbnltb3VzOiBmYWxzZSxcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXhlZDogdHJ1ZSxcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImJ5dGVzMzJcIixcbiAgICAgICAgbmFtZTogXCJyZXF1ZXN0SWRcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGluZGV4ZWQ6IHRydWUsXG4gICAgICAgIGludGVybmFsVHlwZTogXCJieXRlczMyXCIsXG4gICAgICAgIG5hbWU6IFwicHJpY2VcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiUmVxdWVzdEZ1bGZpbGxlZFwiLFxuICAgIHR5cGU6IFwiZXZlbnRcIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJhZGRyZXNzXCIsXG4gICAgICAgIG5hbWU6IFwiX29yYWNsZVwiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImJ5dGVzMzJcIixcbiAgICAgICAgbmFtZTogXCJfcmVxdWVzdElkXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXMzMlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcImFkZEV4dGVybmFsUmVxdWVzdFwiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcImFkZHJlc3NcIixcbiAgICAgICAgbmFtZTogXCJfb3JhY2xlXCIsXG4gICAgICAgIHR5cGU6IFwiYWRkcmVzc1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYnl0ZXMzMlwiLFxuICAgICAgICBuYW1lOiBcIl9yZXF1ZXN0SWRcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiX3BheW1lbnRcIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJieXRlczRcIixcbiAgICAgICAgbmFtZTogXCJfY2FsbGJhY2tGdW5jdGlvbklkXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXM0XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJ1aW50MjU2XCIsXG4gICAgICAgIG5hbWU6IFwiX2V4cGlyYXRpb25cIixcbiAgICAgICAgdHlwZTogXCJ1aW50MjU2XCJcbiAgICAgIH1cbiAgICBdLFxuICAgIG5hbWU6IFwiY2FuY2VsUmVxdWVzdFwiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtdLFxuICAgIG5hbWU6IFwiY3VycmVudFByaWNlXCIsXG4gICAgb3V0cHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYnl0ZXMzMlwiLFxuICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICB0eXBlOiBcImJ5dGVzMzJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgc3RhdGVNdXRhYmlsaXR5OiBcInZpZXdcIixcbiAgICB0eXBlOiBcImZ1bmN0aW9uXCJcbiAgfSxcbiAge1xuICAgIGlucHV0czogW1xuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYnl0ZXMzMlwiLFxuICAgICAgICBuYW1lOiBcIl9yZXF1ZXN0SWRcIixcbiAgICAgICAgdHlwZTogXCJieXRlczMyXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJieXRlczMyXCIsXG4gICAgICAgIG5hbWU6IFwiX3ByaWNlXCIsXG4gICAgICAgIHR5cGU6IFwiYnl0ZXMzMlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBuYW1lOiBcImZ1bGZpbGxcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXG4gICAgICB7XG4gICAgICAgIGludGVybmFsVHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgbmFtZTogXCJfY3VycmVuY3lcIixcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInVpbnQyNTZcIixcbiAgICAgICAgbmFtZTogXCJfcGF5bWVudFwiLFxuICAgICAgICB0eXBlOiBcInVpbnQyNTZcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJyZXF1ZXN0RXRoZXJldW1QcmljZVwiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH0sXG4gIHtcbiAgICBpbnB1dHM6IFtcbiAgICAgIHtcbiAgICAgICAgaW50ZXJuYWxUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgICBuYW1lOiBcIl9jdXJyZW5jeVwiLFxuICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwidWludDI1NlwiLFxuICAgICAgICBuYW1lOiBcIl9wYXltZW50XCIsXG4gICAgICAgIHR5cGU6IFwidWludDI1NlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbnRlcm5hbFR5cGU6IFwiYWRkcmVzc1wiLFxuICAgICAgICBuYW1lOiBcIl9jYWxsYmFja1wiLFxuICAgICAgICB0eXBlOiBcImFkZHJlc3NcIlxuICAgICAgfVxuICAgIF0sXG4gICAgbmFtZTogXCJyZXF1ZXN0RXRoZXJldW1QcmljZUJ5Q2FsbGJhY2tcIixcbiAgICBvdXRwdXRzOiBbXSxcbiAgICBzdGF0ZU11dGFiaWxpdHk6IFwibm9ucGF5YWJsZVwiLFxuICAgIHR5cGU6IFwiZnVuY3Rpb25cIlxuICB9LFxuICB7XG4gICAgaW5wdXRzOiBbXSxcbiAgICBuYW1lOiBcIndpdGhkcmF3TGlua1wiLFxuICAgIG91dHB1dHM6IFtdLFxuICAgIHN0YXRlTXV0YWJpbGl0eTogXCJub25wYXlhYmxlXCIsXG4gICAgdHlwZTogXCJmdW5jdGlvblwiXG4gIH1cbl07XG5cbmNvbnN0IF9ieXRlY29kZSA9XG4gIFwiMHg2MDgwNjA0MDUyNjAwMTYwMDQ1NTM0ODAxNTYxMDAxNTU3NjAwMDgwZmQ1YjUwNjExMzA3ODA2MTAwMjU2MDAwMzk2MDAwZjNmZTYwODA2MDQwNTIzNDgwMTU2MTAwMTA1NzYwMDA4MGZkNWI1MDYwMDQzNjEwNjEwMDdkNTc2MDAwMzU2MGUwMWM4MDYzODNkYjVjYmMxMTYxMDA1YjU3ODA2MzgzZGI1Y2JjMTQ2MTAxZDU1NzgwNjM4ZGM2NTRhMjE0NjEwMjdkNTc4MDYzOWQxYjQ2NGExNDYxMDI4NTU3ODA2M2U4ZDUzNTlkMTQ2MTAyOWY1NzYxMDA3ZDU2NWI4MDYzMDQyZjJiNjUxNDYxMDA4MjU3ODA2MzU1OTFhNjA4MTQ2MTAwYTc1NzgwNjM3NDk2MWQ0ZDE0NjEwMTE0NTc1YjYwMDA4MGZkNWI2MTAwYTU2MDA0ODAzNjAzNjA0MDgxMTAxNTYxMDA5ODU3NjAwMDgwZmQ1YjUwODAzNTkwNjAyMDAxMzU2MTAyZDg1NjViMDA1YjYxMDBhNTYwMDQ4MDM2MDM2MGEwODExMDE1NjEwMGJkNTc2MDAwODBmZDViNTA3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY4MTM1MTY5MDYwMjA4MTAxMzU5MDYwNDA4MTAxMzU5MDdmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwNjA4MjAxMzUxNjkwNjA4MDAxMzU2MTAzZTU1NjViNjEwMGE1NjAwNDgwMzYwMzYwNjA4MTEwMTU2MTAxMmE1NzYwMDA4MGZkNWI4MTAxOTA2MDIwODEwMTgxMzU2NDAxMDAwMDAwMDA4MTExMTU2MTAxNDU1NzYwMDA4MGZkNWI4MjAxODM2MDIwODIwMTExMTU2MTAxNTc1NzYwMDA4MGZkNWI4MDM1OTA2MDIwMDE5MTg0NjAwMTgzMDI4NDAxMTE2NDAxMDAwMDAwMDA4MzExMTcxNTYxMDE3OTU3NjAwMDgwZmQ1YjkxOTA4MDgwNjAxZjAxNjAyMDgwOTEwNDAyNjAyMDAxNjA0MDUxOTA4MTAxNjA0MDUyODA5MzkyOTE5MDgxODE1MjYwMjAwMTgzODM4MDgyODQzNzYwMDA5MjAxOTE5MDkxNTI1MDkyOTU1MDUwODIzNTkzNTA1MDUwNjAyMDAxMzU3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjYxMDRhYzU2NWI2MTAwYTU2MDA0ODAzNjAzNjA0MDgxMTAxNTYxMDFlYjU3NjAwMDgwZmQ1YjgxMDE5MDYwMjA4MTAxODEzNTY0MDEwMDAwMDAwMDgxMTExNTYxMDIwNjU3NjAwMDgwZmQ1YjgyMDE4MzYwMjA4MjAxMTExNTYxMDIxODU3NjAwMDgwZmQ1YjgwMzU5MDYwMjAwMTkxODQ2MDAxODMwMjg0MDExMTY0MDEwMDAwMDAwMDgzMTExNzE1NjEwMjNhNTc2MDAwODBmZDViOTE5MDgwODA2MDFmMDE2MDIwODA5MTA0MDI2MDIwMDE2MDQwNTE5MDgxMDE2MDQwNTI4MDkzOTI5MTkwODE4MTUyNjAyMDAxODM4MzgwODI4NDM3NjAwMDkyMDE5MTkwOTE1MjUwOTI5NTUwNTA5MTM1OTI1MDYxMDVlNzkxNTA1MDU2NWI2MTAwYTU2MTA1ZjY1NjViNjEwMjhkNjEwN2IzNTY1YjYwNDA4MDUxOTE4MjUyNTE5MDgxOTAwMzYwMjAwMTkwZjM1YjYxMDBhNTYwMDQ4MDM2MDM2MDQwODExMDE1NjEwMmI1NTc2MDAwODBmZDViNTA3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY4MTM1MTY5MDYwMjAwMTM1NjEwN2I5NTY1YjYwMDA4MjgxNTI2MDA1NjAyMDUyNjA0MDkwMjA1NDgyOTA3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjMzMTQ2MTAzNTY1NzYwNDA1MTdmMDhjMzc5YTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDA0MDE4MDgwNjAyMDAxODI4MTAzODI1MjYwMjg4MTUyNjAyMDAxODA2MTEyNjM2MDI4OTEzOTYwNDAwMTkxNTA1MDYwNDA1MTgwOTEwMzkwZmQ1YjYwMDA4MTgxNTI2MDA1NjAyMDUyNjA0MDgwODIyMDgwNTQ3ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxNjkwNTU1MTgyOTE3ZjdjYzEzNWUwY2ViYjAyYzM0ODBhZTVkNzRkMzc3MjgzMTgwYTI2MDFmOGY2NDRlZGY3OTg3YjAwOTMxNmM2M2E5MWEyNjA0MDUxODI5MDg0OTA3ZjBjMjM2NjIzM2Y2MzQwNDhjMGYwNDU4MDYwZDEyMjhmYWIzNmQwMGY3YzBlY2Y2YmRmMmQ5YzQ1ODUwMzYzMTE5MDYwMDA5MGEzNTA2MDA3NTU1MDU2NWI2MDQwODA1MTdmNmVlNGQ1NTMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDA0ODEwMTg2OTA1MjYwMjQ4MTAxODU5MDUyN2ZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODQxNjYwNDQ4MjAxNTI2MDY0ODEwMTgzOTA1MjkwNTE4NjkxNzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmODMxNjkxNjM2ZWU0ZDU1MzkxNjA4NDgwODIwMTkyNjAwMDkyOTA5MTkwODI5MDAzMDE4MTgzODc4MDNiMTU4MDE1NjEwNDhjNTc2MDAwODBmZDViNTA1YWYxMTU4MDE1NjEwNGEwNTczZDYwMDA4MDNlM2Q2MDAwZmQ1YjUwNTA1MDUwNTA1MDUwNTA1MDUwNTY1YjYxMDRiNDYxMTFmMDU2NWI2MDA2NTQ2MTA0ZTI5MDgzN2YwNDJmMmI2NTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjEwN2MzNTY1YjkwNTA2MTA1NDQ2MDQwNTE4MDYwNDAwMTYwNDA1MjgwNjAwMzgxNTI2MDIwMDE3ZjY3NjU3NDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4MTUyNTA2MDQwNTE4MDYwODAwMTYwNDA1MjgwNjA0NzgxNTI2MDIwMDE2MTEyOGI2MDQ3OTEzOTgzOTE5MDYzZmZmZmZmZmY2MTA3ZWUxNjU2NWI2MDQwODA1MTYwMDE4MDgyNTI4MTgzMDE5MDkyNTI2MDYwOTE4MTYwMjAwMTViNjA2MDgxNTI2MDIwMDE5MDYwMDE5MDAzOTA4MTYxMDU1YjU3OTA1MDUwOTA1MDg0ODE2MDAwODE1MTgxMTA2MTA1ODA1N2ZlNWI2MDIwMDI2MDIwMDEwMTgxOTA1MjUwNjEwNWQ1NjA0MDUxODA2MDQwMDE2MDQwNTI4MDYwMDQ4MTUyNjAyMDAxN2Y3MDYxNzQ2ODAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODE1MjUwODI4NDYxMDgxZDkwOTI5MTkwNjNmZmZmZmZmZjE2NTY1YjYxMDVkZjgyODU2MTA4OGI1NjViNTA1MDUwNTA1MDUwNTY1YjYxMDVmMjgyODIzMDYxMDRhYzU2NWI1MDUwNTY1YjYwMDA2MTA2MDA2MTA4YmI1NjViNjA0MDgwNTE3ZjcwYTA4MjMxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4MTUyMzA2MDA0ODIwMTUyOTA1MTkxOTI1MDczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjgzMTY5MTYzYTkwNTljYmI5MTMzOTE4NDkxNjM3MGEwODIzMTkxNjAyNDgwODMwMTkyNjAyMDkyOTE5MDgyOTAwMzAxODE4NjgwM2IxNTgwMTU2MTA2Nzk1NzYwMDA4MGZkNWI1MDVhZmExNTgwMTU2MTA2OGQ1NzNkNjAwMDgwM2UzZDYwMDBmZDViNTA1MDUwNTA2MDQwNTEzZDYwMjA4MTEwMTU2MTA2YTM1NzYwMDA4MGZkNWI1MDUxNjA0MDgwNTE3ZmZmZmZmZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MGUwODY5MDFiMTY4MTUyNzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmOTA5MzE2NjAwNDg0MDE1MjYwMjQ4MzAxOTE5MDkxNTI1MTYwNDQ4MDgzMDE5MjYwMjA5MjkxOTA4MjkwMDMwMTgxNjAwMDg3ODAzYjE1ODAxNTYxMDcxOTU3NjAwMDgwZmQ1YjUwNWFmMTE1ODAxNTYxMDcyZDU3M2Q2MDAwODAzZTNkNjAwMGZkNWI1MDUwNTA1MDYwNDA1MTNkNjAyMDgxMTAxNTYxMDc0MzU3NjAwMDgwZmQ1YjUwNTE2MTA3YjA1NzYwNDA4MDUxN2YwOGMzNzlhMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwODE1MjYwMjA2MDA0ODIwMTUyNjAxMjYwMjQ4MjAxNTI3ZjU1NmU2MTYyNmM2NTIwNzQ2ZjIwNzQ3MjYxNmU3MzY2NjU3MjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDQ0ODIwMTUyOTA1MTkwODE5MDAzNjA2NDAxOTBmZDViNTA1NjViNjAwNzU0ODE1NjViNjEwNWYyODI4MjYxMDhkNzU2NWI2MTA3Y2I2MTExZjA1NjViNjEwN2QzNjExMWYwNTY1YjYxMDdlNTgxODY4Njg2NjNmZmZmZmZmZjYxMDliZTE2NTY1Yjk1OTQ1MDUwNTA1MDUwNTY1YjYwODA4MzAxNTE2MTA4MDM5MDgzNjNmZmZmZmZmZjYxMGEyMDE2NTY1YjYwODA4MzAxNTE2MTA4MTg5MDgyNjNmZmZmZmZmZjYxMGEyMDE2NTY1YjUwNTA1MDU2NWI2MDgwODMwMTUxNjEwODMyOTA4MzYzZmZmZmZmZmY2MTBhMjAxNjU2NWI2MTA4M2Y4MzYwODAwMTUxNjEwYTNkNTY1YjYwMDA1YjgxNTE4MTEwMTU2MTA4N2Q1NzYxMDg3NTgyODI4MTUxODExMDYxMDg1YTU3ZmU1YjYwMjAwMjYwMjAwMTAxNTE4NTYwODAwMTUxNjEwYTIwOTA5MTkwNjNmZmZmZmZmZjE2NTY1YjYwMDEwMTYxMDg0MjU2NWI1MDYxMDgxODgzNjA4MDAxNTE2MTBhNDg1NjViNjAwMzU0NjAwMDkwNjEwOGIyOTA3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjg0ODQ2MTBhNTM1NjViOTA1MDViOTI5MTUwNTA1NjViNjAwMjU0NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY5MDU2NWI2MDAwODE4MTUyNjAwNTYwMjA1MjYwNDA5MDIwNTQ4MTkwNzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTYxNTYxMDk2YTU3NjA0MDgwNTE3ZjA4YzM3OWEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA4MTUyNjAyMDYwMDQ4MjAxNTI2MDFhNjAyNDgyMDE1MjdmNTI2NTcxNzU2NTczNzQyMDY5NzMyMDYxNmM3MjY1NjE2NDc5MjA3MDY1NmU2NDY5NmU2NzAwMDAwMDAwMDAwMDYwNDQ4MjAxNTI5MDUxOTA4MTkwMDM2MDY0MDE5MGZkNWI1MDYwMDA5MDgxNTI2MDA1NjAyMDUyNjA0MDkwMjA4MDU0N2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTY3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY5MjkwOTIxNjkxOTA5MTE3OTA1NTU2NWI2MTA5YzY2MTExZjA1NjViNjEwOWQ2ODU2MDgwMDE1MTYxMDEwMDYxMGM5MDU2NWI1MDUwOTE4MzUyNzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY2MDIwODMwMTUyN2ZmZmZmZmZmZjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTY2MDQwODIwMTUyOTA1NjViNjEwYTJkODI2MDAzODM1MTYxMGNjYTU2NWI2MTA4MTg4MjgyNjNmZmZmZmZmZjYxMGRkYTE2NTY1YjYxMDdiMDgxNjAwNDYxMGRmNDU2NWI2MTA3YjA4MTYwMDc2MTBkZjQ1NjViNjAwNDU0NjA0MDgwNTEzMDYwNjA5MDgxMWI2MDIwODA4NDAxOTE5MDkxNTI2MDM0ODA4NDAxODY5MDUyODQ1MTgwODUwMzkwOTEwMTgxNTI2MDU0OTA5MzAxODQ1MjgyNTE5MjgxMDE5MjkwOTIyMDkwODYwMTkzOTA5MzUyNjAwMDgzODE1MjYwMDU5MDkxNTI4MTgxMjA4MDU0N2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTY3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY4ODE2MTc5MDU1OTA1MTgyOTE3ZmI1ZTZlMDFlNzlmOTEyNjdkYzE3YjRlNjMxNGQ1ZDRkMDM1OTNkMmNlZWUwZmJiNDUyYjc1MGJkNzBlYTVhZjk5MWEyNjAwMjU0NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY2MzQwMDBhZWEwODU4NDYxMGIyZDg3NjEwZTBmNTY1YjYwNDA1MTg0NjNmZmZmZmZmZjE2NjBlMDFiODE1MjYwMDQwMTgwODQ3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2ODE1MjYwMjAwMTgzODE1MjYwMjAwMTgwNjAyMDAxODI4MTAzODI1MjgzODE4MTUxODE1MjYwMjAwMTkxNTA4MDUxOTA2MDIwMDE5MDgwODM4MzYwMDA1YjgzODExMDE1NjEwYmIxNTc4MTgxMDE1MTgzODIwMTUyNjAyMDAxNjEwYjk5NTY1YjUwNTA1MDUwOTA1MDkwODEwMTkwNjAxZjE2ODAxNTYxMGJkZTU3ODA4MjAzODA1MTYwMDE4MzYwMjAwMzYxMDEwMDBhMDMxOTE2ODE1MjYwMjAwMTkxNTA1YjUwOTQ1MDUwNTA1MDUwNjAyMDYwNDA1MTgwODMwMzgxNjAwMDg3ODAzYjE1ODAxNTYxMGJmZjU3NjAwMDgwZmQ1YjUwNWFmMTE1ODAxNTYxMGMxMzU3M2Q2MDAwODAzZTNkNjAwMGZkNWI1MDUwNTA1MDYwNDA1MTNkNjAyMDgxMTAxNTYxMGMyOTU3NjAwMDgwZmQ1YjUwNTE2MTBjODA1NzYwNDA1MTdmMDhjMzc5YTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDgxNTI2MDA0MDE4MDgwNjAyMDAxODI4MTAzODI1MjYwMjM4MTUyNjAyMDAxODA2MTEyNDA2MDIzOTEzOTYwNDAwMTkxNTA1MDYwNDA1MTgwOTEwMzkwZmQ1YjYwMDQ4MDU0NjAwMTAxOTA1NTkzOTI1MDUwNTA1NjViNjEwYzk4NjExMjI1NTY1YjYwMjA4MjA2MTU2MTBjYWQ1NzYwMjA4MjA2NjAyMDAzODIwMTkxNTA1YjUwNjAyMDgyODEwMTgyOTA1MjYwNDA4MDUxODA4NTUyNjAwMDgxNTI5MDkyMDEwMTkwNTI5MDU2NWI2MDE3ODExMTYxMGNmMTU3NjEwY2ViODM2MGUwNjAwNTg1OTAxYjE2ODMxNzYzZmZmZmZmZmY2MTBmZjgxNjU2NWI1MDYxMDgxODU2NWI2MGZmODExMTYxMGQyNzU3NjEwZDE0ODM2MDE4NjExZmUwNjAwNTg2OTAxYjE2MTc2M2ZmZmZmZmZmNjEwZmY4MTY1NjViNTA2MTBjZWI4MzgyNjAwMTYzZmZmZmZmZmY2MTEwMTAxNjU2NWI2MWZmZmY4MTExNjEwZDVlNTc2MTBkNGI4MzYwMTk2MTFmZTA2MDA1ODY5MDFiMTYxNzYzZmZmZmZmZmY2MTBmZjgxNjU2NWI1MDYxMGNlYjgzODI2MDAyNjNmZmZmZmZmZjYxMTAxMDE2NTY1YjYzZmZmZmZmZmY4MTExNjEwZDk3NTc2MTBkODQ4MzYwMWE2MTFmZTA2MDA1ODY5MDFiMTYxNzYzZmZmZmZmZmY2MTBmZjgxNjU2NWI1MDYxMGNlYjgzODI2MDA0NjNmZmZmZmZmZjYxMTAxMDE2NTY1YjY3ZmZmZmZmZmZmZmZmZmZmZjgxMTE2MTA4MTg1NzYxMGRjMTgzNjAxYjYxMWZlMDYwMDU4NjkwMWIxNjE3NjNmZmZmZmZmZjYxMGZmODE2NTY1YjUwNjEwZGQ0ODM4MjYwMDg2M2ZmZmZmZmZmNjExMDEwMTY1NjViNTA1MDUwNTA1NjViNjEwZGUyNjExMjI1NTY1YjYxMDhiMjgzODQ2MDAwMDE1MTUxODQ4NTUxNjExMDMxNTY1YjYxMDgxODgyNjAxZjYxMWZlMDYwMDU4NTkwMWIxNjE3NjNmZmZmZmZmZjYxMGZmODE2NTY1YjYwNjA2MzQwNDI5OTQ2NjBlMDFiNjAwMDgwODQ2MDAwMDE1MTg1NjAyMDAxNTE4NjYwNDAwMTUxODc2MDYwMDE1MTYwMDE4OTYwODAwMTUxNjAwMDAxNTE2MDQwNTE2MDI0MDE4MDg5NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY3M2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxNjgxNTI2MDIwMDE4ODgxNTI2MDIwMDE4NzgxNTI2MDIwMDE4NjczZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZjE2NzNmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY4MTUyNjAyMDAxODU3YmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTkxNjdiZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmYxOTE2ODE1MjYwMjAwMTg0ODE1MjYwMjAwMTgzODE1MjYwMjAwMTgwNjAyMDAxODI4MTAzODI1MjgzODE4MTUxODE1MjYwMjAwMTkxNTA4MDUxOTA2MDIwMDE5MDgwODM4MzYwMDA1YjgzODExMDE1NjEwZjNiNTc4MTgxMDE1MTgzODIwMTUyNjAyMDAxNjEwZjIzNTY1YjUwNTA1MDUwOTA1MDkwODEwMTkwNjAxZjE2ODAxNTYxMGY2ODU3ODA4MjAzODA1MTYwMDE4MzYwMjAwMzYxMDEwMDBhMDMxOTE2ODE1MjYwMjAwMTkxNTA1YjUwNjA0MDgwNTE3ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZTA4MTg0MDMwMTgxNTI5MTkwNTI2MDIwODEwMTgwNTE3YmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmMTY3ZmZmZmZmZmZmMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA5MDlkMTY5YzkwOWMxNzkwOWI1MjUwOTg5OTUwNTA1MDUwNTA1MDUwNTA1MDUwOTE5MDUwNTY1YjYxMTAwMDYxMTIyNTU2NWI2MTA4YjI4Mzg0NjAwMDAxNTE1MTg0NjExMTE5NTY1YjYxMTAxODYxMTIyNTU2NWI2MTEwMjk4NDg1NjAwMDAxNTE1MTg1ODU2MTExNjQ1NjViOTQ5MzUwNTA1MDUwNTY1YjYxMTAzOTYxMTIyNTU2NWI4MjUxODIxMTE1NjExMDQ3NTc2MDAwODBmZDViODQ2MDIwMDE1MTgyODUwMTExMTU2MTEwNzE1NzYxMTA3MTg1NjExMDY5ODc2MDIwMDE1MTg3ODYwMTYxMTFjMjU2NWI2MDAyMDI2MTExZDk1NjViNjAwMDgwODY1MTgwNTE4NzYwMjA4MzAxMDE5MzUwODA4ODg3MDExMTE1NjExMDkwNTc4Nzg2MDE4MjUyNWI1MDUwNTA2MDIwODQwMTViNjAyMDg0MTA2MTEwZDU1NzgwNTE4MjUyN2ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmUwOTA5MzAxOTI2MDIwOTE4MjAxOTEwMTYxMTA5ODU2NWI1MTgxNTE3ZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmY2MDIwODY5MDAzNjEwMTAwMGEwMTkwODExNjkwMTk5MTkwOTExNjE3OTA1MjUwODM5NDkzNTA1MDUwNTA1NjViNjExMTIxNjExMjI1NTY1YjgzNjAyMDAxNTE4MzEwNjExMTNkNTc2MTExM2Q4NDg1NjAyMDAxNTE2MDAyMDI2MTExZDk1NjViODM1MTgwNTE2MDIwODU4MzAxMDE4NDgxNTM1MDgwODUxNDE1NjExMTVhNTc2MDAxODEwMTgyNTI1YjUwOTM5NDkzNTA1MDUwNTA1NjViNjExMTZjNjExMjI1NTY1Yjg0NjAyMDAxNTE4NDgzMDExMTE1NjExMTg5NTc2MTExODk4NTg1ODQwMTYwMDIwMjYxMTFkOTU2NWI2MDAwNjAwMTgzNjEwMTAwMGEwMzkwNTA4NTUxODM4NjgyMDEwMTg1ODMxOTgyNTExNjE3ODE1MjUwODA1MTg0ODcwMTExMTU2MTExYjc1NzgzODYwMTgxNTI1YjUwOTQ5NTk0NTA1MDUwNTA1MDU2NWI2MDAwODE4MzExMTU2MTExZDM1NzUwODE2MTA4YjU1NjViNTA5MTkwNTA1NjViODE1MTYxMTFlNTgzODM2MTBjOTA1NjViNTA2MTBkZDQ4MzgyNjEwZGRhNTY1YjYwNDA4MDUxNjBhMDgxMDE4MjUyNjAwMDgwODI1MjYwMjA4MjAxODE5MDUyOTE4MTAxODI5MDUyNjA2MDgxMDE5MTkwOTE1MjYwODA4MTAxNjExMjIwNjExMjI1NTY1YjkwNTI5MDU2NWI2MDQwNTE4MDYwNDAwMTYwNDA1MjgwNjA2MDgxNTI2MDIwMDE2MDAwODE1MjUwOTA1NmZlNzU2ZTYxNjI2YzY1MjA3NDZmMjA3NDcyNjE2ZTczNjY2NTcyNDE2ZTY0NDM2MTZjNmMyMDc0NmYyMDZmNzI2MTYzNmM2NTUzNmY3NTcyNjM2NTIwNmQ3NTczNzQyMDYyNjUyMDc0Njg2NTIwNmY3MjYxNjM2YzY1MjA2ZjY2MjA3NDY4NjUyMDcyNjU3MTc1NjU3Mzc0Njg3NDc0NzA3MzNhMmYyZjZkNjk2ZTJkNjE3MDY5MmU2MzcyNzk3MDc0NmY2MzZmNmQ3MDYxNzI2NTJlNjM2ZjZkMmY2NDYxNzQ2MTJmNzA3MjY5NjM2NTNmNjY3Mzc5NmQzZDQ1NTQ0ODI2NzQ3Mzc5NmQ3MzNkNTU1MzQ0MmM0NTU1NTIyYzRhNTA1OWEyNjQ2OTcwNjY3MzU4MjIxMjIwMjkxNTM2NmVhYzk4OGIwODA3MGYxYzhkMDc0ZmUzOTQzMDkxYmIwYWMwZTE3ODIxZGVkM2ViM2I0NTU5MjYyOTY0NzM2ZjZjNjM0MzAwMDYwNjAwMzNcIjtcbiJdfQ==