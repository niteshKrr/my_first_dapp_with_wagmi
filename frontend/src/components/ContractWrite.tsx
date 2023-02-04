import ABI from "@/constants/ABI";
import CONTRACT_ADDRESS from "@/constants/ContractAddress";
import { BigNumber } from "ethers";
import React from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";

const ContractWrite = () => {
  const [num, setNum] = React.useState(0);
  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: [
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
    ],
    functionName: "setMyNum",
    args: [BigNumber.from(num)],
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <div>
      <label>Update no.</label>
      <input
        id="num"
        onChange={(e) => setNum(Number(e.target.value))}
        placeholder="420..."
        value={num}
      />
      <button disabled={!write || isLoading} onClick={() => write?.()}>
        {isLoading ? "Updating..." : "Done"}
      </button>
      {isSuccess && (
        <div>
          Successfully updated!
          <div>
            <a href={`https://goerli.etherscan.io/tx/${data?.hash}`}>Etherscan</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractWrite;
