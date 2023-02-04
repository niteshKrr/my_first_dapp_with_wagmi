const ABI = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "newNum",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "from",
          type: "address",
        },
      ],
      name: "myEvent",
      type: "event",
    },
    {
      inputs: [],
      name: "getMyNum",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_setnum",
          type: "uint256",
        },
      ],
      name: "setMyNum",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ]

  export default ABI;