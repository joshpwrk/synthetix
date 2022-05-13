/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { TestLibSecureMerkleTrie } from "./TestLibSecureMerkleTrie";

export class TestLibSecureMerkleTrieFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TestLibSecureMerkleTrie> {
    return super.deploy(overrides || {}) as Promise<TestLibSecureMerkleTrie>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestLibSecureMerkleTrie {
    return super.attach(address) as TestLibSecureMerkleTrie;
  }
  connect(signer: Signer): TestLibSecureMerkleTrieFactory {
    return super.connect(signer) as TestLibSecureMerkleTrieFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestLibSecureMerkleTrie {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestLibSecureMerkleTrie;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_key",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes"
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32"
      }
    ],
    name: "get",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_key",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_value",
        type: "bytes"
      }
    ],
    name: "getSingleNodeRootHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_key",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_value",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes"
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32"
      }
    ],
    name: "update",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_key",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_value",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "_proof",
        type: "bytes"
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32"
      }
    ],
    name: "verifyInclusionProof",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "pure",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506125ae806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063120c4a221461005157806349fba1931461007b578063cd4a76951461009b578063e8e72100146100ae575b600080fd5b61006461005f366004612385565b6100ce565b6040516100729291906124bc565b60405180910390f35b61008e610089366004612325565b6100e9565b6040516100729190612479565b61008e6100a93660046123ee565b6100fe565b6100c16100bc3660046123ee565b610117565b60405161007291906124b1565b600060606100dd858585610125565b91509150935093915050565b60006100f5838361014e565b90505b92915050565b600061010c85858585610166565b90505b949350505050565b600061010c8585858561018a565b600060606000610134866101a4565b90506101418186866101d5565b9250925050935093915050565b60008061015a846101a4565b905061010f81846102a8565b600080610172866101a4565b9050610180818686866102cc565b9695505050505050565b600080610196866101a4565b905061018081868686610368565b606081805190602001206040516020016101be9190612479565b60405160208183030381529060405290505b919050565b6000606060006101e485610399565b905060008060006101f6848a8961046f565b8151929550909350915015808061020a5750815b61025b576040805162461bcd60e51b815260206004820152601a60248201527f50726f76696465642070726f6f6620697320696e76616c69642e000000000000604482015290519081900360640190fd5b6000816102775760405180602001604052806000815250610296565b61029686600187038151811061028957fe5b6020026020010151610815565b919b919a509098505050505050505050565b60006102bc6102b684610831565b8361092d565b5180516020909101209392505050565b6040805180820190915260018152600160ff1b60209091015260007f56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b4218214156103205761031985856102a8565b905061010f565b600061032b84610399565b905060008061033b83898761046f565b5091509150600061034f84848b858c6109cf565b905061035b818a610dad565b9998505050505050505050565b60008060006103788786866101d5565b9150915081801561038e575061038e8682610f06565b979650505050505050565b606060006103a683610f1c565b9050600081516001600160401b03811180156103c157600080fd5b506040519080825280602002602001820160405280156103fb57816020015b6103e861227d565b8152602001906001900390816103e05790505b50905060005b825181101561046757600061042884838151811061041b57fe5b6020026020010151610f2f565b9050604051806040016040528082815260200161044483610f1c565b81525083838151811061045357fe5b602090810291909101015250600101610401565b509392505050565b6000606081808061047f87610831565b90508560008061048d61227d565b60005b8c518110156107ed578c81815181106104a557fe5b602002602001015191508284019350600187019650836000141561051957815180516020909101208514610514576040805162461bcd60e51b8152602060048201526011602482015270092dcecc2d8d2c840e4dedee840d0c2e6d607b1b604482015290519081900360640190fd5b6105e0565b81515160201161058057815180516020909101208514610514576040805162461bcd60e51b815260206004820152601b60248201527f496e76616c6964206c6172676520696e7465726e616c20686173680000000000604482015290519081900360640190fd5b8461058e8360000151610fb5565b146105e0576040805162461bcd60e51b815260206004820152601a60248201527f496e76616c696420696e7465726e616c206e6f64652068617368000000000000604482015290519081900360640190fd5b6020820151516011141561064f5785518414156105fc576107ed565b600086858151811061060a57fe5b602001015160f81c60f81b60f81c9050600083602001518260ff168151811061062f57fe5b6020026020010151905061064281610fe9565b96506001945050506107e5565b6002826020015151141561079857600061066883611026565b905060008160008151811061067957fe5b016020015160f81c90506001811660020360006106998460ff8416611044565b905060006106a78b8a611044565b905060006106b58383611071565b905060ff8516600214806106cc575060ff85166003145b156106fe578083511480156106e15750808251145b156106eb57988901985b50600160ff1b99506107ed945050505050565b60ff85161580610711575060ff85166001145b1561076157825181146107315750600160ff1b99506107ed945050505050565b610752886020015160018151811061074557fe5b6020026020010151610fe9565b9a5097506107e5945050505050565b60405162461bcd60e51b81526004018080602001828103825260268152602001806125536026913960400191505060405180910390fd5b6040805162461bcd60e51b815260206004820152601d60248201527f526563656976656420616e20756e706172736561626c65206e6f64652e000000604482015290519081900360640190fd5b600101610490565b50600160ff1b8414866108008786611044565b909e909d50909b509950505050505050505050565b602081015180516060916100f891600019810190811061041b57fe5b6060600082516002026001600160401b038111801561084f57600080fd5b506040519080825280601f01601f19166020018201604052801561087a576020820181803683370190505b50905060005b835181101561092657600484828151811061089757fe5b602001015160f81c60f81b6001600160f81b031916901c8282600202815181106108bd57fe5b60200101906001600160f81b031916908160001a90535060108482815181106108e257fe5b016020015160f81c816108f157fe5b0660f81b82826002026001018151811061090757fe5b60200101906001600160f81b031916908160001a905350600101610880565b5092915050565b61093561227d565b60408051600280825260608201909252600091816020015b606081526020019060019003908161094d57905050905060006109718560016110d7565b905061098461097f8261122e565b6112fe565b8260008151811061099157fe5b60200260200101819052506109a5846112fe565b826001815181106109b257fe5b60200260200101819052506109c682611367565b95945050505050565b6060600083905060008760018803815181106109e757fe5b6020026020010151905060006109fc8261139f565b6040805160038082526080820190925291925060009190816020015b610a2061227d565b815260200190600190039081610a185790505090506000806002846002811115610a4657fe5b1415610b10578b5160009015610acb5760005b60018e5103811015610ac9576000610a838f8381518110610a7657fe5b602002602001015161139f565b6002811115610a8e57fe5b1415610a9f57600190910190610ac1565b610abb8e8281518110610aae57fe5b6020026020010151611475565b51820191505b600101610a59565b505b610ad486611475565b51610af8610ae188611475565b610af3610aed8f610831565b85611044565b611071565b148015610b0457508651155b15610b0e57600191505b505b8015610b4a57610b28610b2286611475565b8961092d565b838381518110610b3457fe5b6020026020010181905250600182019150610d8e565b6000846002811115610b5857fe5b1415610bc1578551610b9057610b6e8589611488565b838381518110610b7a57fe5b6020026020010181905250600182019150610bbc565b84838381518110610b9d57fe5b6020026020010181905250600182019150610b28610b22876001611044565b610d8e565b6000610bcc86611475565b90506000610bda8289611071565b90508015610c3b576000610bf0836000846114d3565b9050610c0481610bff8d611624565b611665565b868681518110610c1057fe5b6020026020010181905250600185019450610c2b8383611044565b9250610c378983611044565b9850505b6000610c456116a9565b9050825160001415610c6a57610c6381610c5e8a610815565b611488565b9050610d02565b600083600081518110610c7957fe5b016020015160f81c9050610c8e846001611044565b93506002886002811115610c9e57fe5b1415610cd9576000610cb885610cb38c610815565b61092d565b9050610cd18383610ccc8460000151611624565b611736565b925050610d00565b835115610cef576000610cb885610bff8c610815565b610cfd8282610ccc8c610815565b91505b505b8851610d3757610d12818c611488565b905080868681518110610d2157fe5b6020026020010181905250600185019450610d8a565b610d42896001611044565b985080868681518110610d5157fe5b6020026020010181905250600185019450610d6c898c61092d565b868681518110610d7857fe5b60200260200101819052506001850194505b5050505b610d9d8c60018d03858561178f565b9c9b505050505050505050505050565b600080610db983610831565b9050610dc361227d565b84516000906060905b8015610ef157876001820381518110610de157fe5b60200260200101519350610df48461139f565b92506002836002811115610e0457fe5b1415610e2f576000610e1585611475565b9050610e2786600083518951036114d3565b955050610edb565b6001836002811115610e3d57fe5b1415610e7d576000610e4e85611475565b9050610e6086600083518951036114d3565b835190965015610e7757610e748584611871565b94505b50610edb565b6000836002811115610e8b57fe5b1415610edb57815115610edb57600085600187510381518110610eaa57fe5b602001015160f81c60f81b60f81c9050610eca86600060018951036114d3565b9550610ed7858285611736565b9450505b8351610ee690611624565b915060001901610dcc565b50509051805160209091012095945050505050565b8051602091820120825192909101919091201490565b60606100f8610f2a8361191d565b611942565b60606000806000610f3f85611ab8565b919450925090506000816001811115610f5457fe5b14610fa6576040805162461bcd60e51b815260206004820152601860248201527f496e76616c696420524c502062797465732076616c75652e0000000000000000604482015290519081900360640190fd5b6109c685602001518484611de1565b6000602082511015610fcc575060208101516101d0565b818060200190516020811015610fe157600080fd5b505192915050565b6000606060208360000151101561100a5761100383611e92565b9050611016565b61101383610f2f565b90505b61101f81610fb5565b9392505050565b60606100f861103f836020015160008151811061041b57fe5b610831565b60608251821061106357506040805160208101909152600081526100f8565b6100f58383848651036114d3565b6000805b8084511180156110855750808351115b80156110ca575082818151811061109857fe5b602001015160f81c60f81b6001600160f81b0319168482815181106110b957fe5b01602001516001600160f81b031916145b156100f557600101611075565b60606000826110e75760006110ea565b60025b9050600060028551816110f957fe5b06905060008160020360ff166001600160401b038111801561111a57600080fd5b506040519080825280601f01601f191660200182016040528015611145576020820181803683370190505b50905081830160f81b8160008151811061115b57fe5b60200101906001600160f81b031916908160001a90535080866040516020018083805190602001908083835b602083106111a65780518252601f199092019160209182019101611187565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b602083106111ee5780518252601f1990920191602091820191016111cf565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052935050505092915050565b60606000600283518161123d57fe5b046001600160401b038111801561125357600080fd5b506040519080825280601f01601f19166020018201604052801561127e576020820181803683370190505b50905060005b81518110156109265783816002026001018151811061129f57fe5b602001015160f81c60f81b60048583600202815181106112bb57fe5b602001015160f81c60f81b6001600160f81b031916901b178282815181106112df57fe5b60200101906001600160f81b031916908160001a905350600101611284565b60608082516001148015611326575060808360008151811061131c57fe5b016020015160f81c105b156113325750816100f8565b61133e83516080611e9d565b83604051602001611350929190612482565b604051602081830303815290604052905092915050565b61136f61227d565b600061137a83611fed565b9050604051806040016040528082815260200161139683610f1c565b90529392505050565b602081015151600090601114156113b8575060006101d0565b600282602001515114156114345760006113d183611026565b90506000816000815181106113e257fe5b016020015160f81c905060028114806113fe575060ff81166003145b1561140e576002925050506101d0565b60ff81161580611421575060ff81166001145b15611431576001925050506101d0565b50505b6040805162461bcd60e51b8152602060048201526011602482015270496e76616c6964206e6f6465207479706560781b604482015290519081900360640190fd5b60606100f861148383611026565b612031565b61149061227d565b600061149b836112fe565b90506114a68161191d565b6020850151805160001981019081106114bb57fe5b602002602001018190525061010f846020015161207a565b60608182601f01101561151e576040805162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b604482015290519081900360640190fd5b828284011015611566576040805162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b604482015290519081900360640190fd5b818301845110156115b2576040805162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b604482015290519081900360640190fd5b6060821580156115d1576040519150600082526020820160405261161b565b6040519150601f8416801560200281840101858101878315602002848b0101015b8183101561160a5780518352602092830192016115f2565b5050858452601f01601f1916604052505b50949350505050565b60606020825110156116375750806101d0565b81805190602001206040516020018082815260200191505060405160208183030381529060405290506101d0565b61166d61227d565b60408051600280825260608201909252600091816020015b606081526020019060019003908161168557905050905060006109718560006110d7565b6116b161227d565b6040805160118082526102408201909252600091816020015b60608152602001906001900390816116ca57905050905060005b815181101561172657604051806040016040528060018152602001600160ff1b81525082828151811061171357fe5b60209081029190910101526001016116e4565b5061173081611367565b91505090565b61173e61227d565b6000602083511061175757611752836112fe565b611759565b825b90506117648161191d565b85602001518560ff168151811061177757fe5b60200260200101819052506109c6856020015161207a565b606060008285016001600160401b03811180156117ab57600080fd5b506040519080825280602002602001820160405280156117e557816020015b6117d261227d565b8152602001906001900390816117ca5790505b50905060005b85811015611826578681815181106117ff57fe5b602002602001015182828151811061181357fe5b60209081029190910101526001016117eb565b5060005b838110156118675784818151811061183e57fe5b6020026020010151828783018151811061185457fe5b602090810291909101015260010161182a565b5095945050505050565b61187961227d565b60408051600280825260608201909252600091816020015b606081526020019060019003908161189157905050905060006118bd6118b686611475565b60006110d7565b90506118cb61097f8261122e565b826000815181106118d857fe5b602002602001018190525060208451101561190b5783826001815181106118fb57fe5b6020026020010181905250611914565b6109a5846112fe565b6109c682611367565b611925612297565b506040805180820190915281518152602082810190820152919050565b606060008061195084611ab8565b9193509091506001905081600181111561196657fe5b146119b8576040805162461bcd60e51b815260206004820152601760248201527f496e76616c696420524c50206c6973742076616c75652e000000000000000000604482015290519081900360640190fd5b6040805160208082526104208201909252600091816020015b6119d9612297565b8152602001906001900390816119d15790505090506000835b8651811015611aad5760208210611a3a5760405162461bcd60e51b815260040180806020018281038252602a815260200180612529602a913960400191505060405180910390fd5b600080611a666040518060400160405280858c60000151038152602001858c6020015101815250611ab8565b509150915060405180604001604052808383018152602001848b6020015101815250858581518110611a9457fe5b60209081029190910101526001939093019201016119f2565b508152949350505050565b600080600080846000015111611b15576040805162461bcd60e51b815260206004820152601860248201527f524c50206974656d2063616e6e6f74206265206e756c6c2e0000000000000000604482015290519081900360640190fd5b6020840151805160001a607f8111611b3a576000600160009450945094505050611dda565b60b78111611baf578551607f198201908110611b9d576040805162461bcd60e51b815260206004820152601960248201527f496e76616c696420524c502073686f727420737472696e672e00000000000000604482015290519081900360640190fd5b60019550935060009250611dda915050565b60bf8111611c9357855160b6198201908110611c12576040805162461bcd60e51b815260206004820152601f60248201527f496e76616c696420524c50206c6f6e6720737472696e67206c656e6774682e00604482015290519081900360640190fd5b6000816020036101000a6001850151049050808201886000015111611c7e576040805162461bcd60e51b815260206004820152601860248201527f496e76616c696420524c50206c6f6e6720737472696e672e0000000000000000604482015290519081900360640190fd5b60019091019550935060009250611dda915050565b60f78111611d0757855160bf198201908110611cf6576040805162461bcd60e51b815260206004820152601760248201527f496e76616c696420524c502073686f7274206c6973742e000000000000000000604482015290519081900360640190fd5b600195509350849250611dda915050565b855160f6198201908110611d62576040805162461bcd60e51b815260206004820152601d60248201527f496e76616c696420524c50206c6f6e67206c697374206c656e6774682e000000604482015290519081900360640190fd5b6000816020036101000a6001850151049050808201886000015111611dc7576040805162461bcd60e51b815260206004820152601660248201527524b73b30b634b210292628103637b733903634b9ba1760511b604482015290519081900360640190fd5b6001918201965094509250611dda915050565b9193909250565b60606000826001600160401b0381118015611dfb57600080fd5b506040519080825280601f01601f191660200182016040528015611e26576020820181803683370190505b509050805160001415611e3a57905061101f565b8484016020820160005b60208604811015611e65578251825260209283019290910190600101611e44565b5060006001602087066020036101000a039050808251168119845116178252839450505050509392505050565b60606100f882612123565b6060806038841015611ef7576040805160018082528183019092529060208201818036833701905050905082840160f81b81600081518110611edb57fe5b60200101906001600160f81b031916908160001a9053506100f5565b600060015b808681611f0557fe5b0415611f1a5760019091019061010002611efc565b816001016001600160401b0381118015611f3357600080fd5b506040519080825280601f01601f191660200182016040528015611f5e576020820181803683370190505b50925084820160370160f81b83600081518110611f7757fe5b60200101906001600160f81b031916908160001a905350600190505b818111611fe3576101008183036101000a8781611fac57fe5b0481611fb457fe5b0660f81b838281518110611fc457fe5b60200101906001600160f81b031916908160001a905350600101611f93565b5050905092915050565b60606000611ffa83612139565b9050612008815160c0611e9d565b8160405160200161201a929190612482565b604051602081830303815290604052915050919050565b606060028260008151811061204257fe5b016020015160f81c8161205157fe5b0660ff166000141561206f57612068826002611044565b90506101d0565b612068826001611044565b61208261227d565b600082516001600160401b038111801561209b57600080fd5b506040519080825280602002602001820160405280156120cf57816020015b60608152602001906001900390816120ba5790505b50905060005b8351811015612119576120fa8482815181106120ed57fe5b6020026020010151611e92565b82828151811061210657fe5b60209081029190910101526001016120d5565b5061101f81611367565b60606100f8826020015160008460000151611de1565b606081516000141561215a57506040805160008152602081019091526101d0565b6000805b835181101561218d5783818151811061217357fe5b60200260200101515182019150808060010191505061215e565b6000826001600160401b03811180156121a557600080fd5b506040519080825280601f01601f1916602001820160405280156121d0576020820181803683370190505b50600092509050602081015b855183101561161b5760008684815181106121f357fe5b60200260200101519050600060208201905061221183828451612239565b87858151811061221d57fe5b60200260200101515183019250505082806001019350506121dc565b8282825b6020811061225c578151835260209283019290910190601f190161223d565b905182516020929092036101000a6000190180199091169116179052505050565b604051806040016040528060608152602001606081525090565b604051806040016040528060008152602001600081525090565b600082601f8301126122c1578081fd5b81356001600160401b03808211156122d557fe5b604051601f8301601f1916810160200182811182821017156122f357fe5b60405282815284830160200186101561230a578384fd5b82602086016020830137918201602001929092529392505050565b60008060408385031215612337578182fd5b82356001600160401b038082111561234d578384fd5b612359868387016122b1565b9350602085013591508082111561236e578283fd5b5061237b858286016122b1565b9150509250929050565b600080600060608486031215612399578081fd5b83356001600160401b03808211156123af578283fd5b6123bb878388016122b1565b945060208601359150808211156123d0578283fd5b506123dd868287016122b1565b925050604084013590509250925092565b60008060008060808587031215612403578081fd5b84356001600160401b0380821115612419578283fd5b612425888389016122b1565b9550602087013591508082111561243a578283fd5b612446888389016122b1565b9450604087013591508082111561245b578283fd5b50612468878288016122b1565b949793965093946060013593505050565b90815260200190565b600083516124948184602088016124f8565b8351908301906124a88183602088016124f8565b01949350505050565b901515815260200190565b600083151582526040602083015282518060408401526124e38160608501602087016124f8565b601f01601f1916919091016060019392505050565b60005b838110156125135781810151838201526020016124fb565b83811115612522576000848401525b5050505056fe50726f766964656420524c50206c6973742065786365656473206d6178206c697374206c656e6774682e52656365697665642061206e6f6465207769746820616e20756e6b6e6f776e20707265666978a2646970667358221220f7784076bf34d4e7ed908bba2b65e5c1b61bcc56d34d2dfdf2692e59bf09b41f64736f6c63430007060033";
