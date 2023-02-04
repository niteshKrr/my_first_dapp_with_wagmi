import React from "react";
import { useContractRead } from "wagmi";
import { useState } from "react";
import ABI from "@/constants/ABI";
import { BigNumber } from "ethers";

type GetDataType = {
  _hex: string;
  _isBigNumber: boolean;
};

const ContractRead = () => {
  const [getdata, setGetdata] = useState(0);

  const contractRead = useContractRead({
    address: "0xDcC4bEd9F5174ED8F228988d215B44ad70AEf5D6",
    abi: ABI,
    functionName: "getMyNum",
    watch: true,
    onError(error) {
      console.log("Error", error);
    },
    onSuccess(data: BigNumber) {
      const myNumber = parseInt(data._hex, 16);
      console.log("successfully fetched number:", myNumber);
      setGetdata(myNumber);
    },
  });

  return (
    <div>
      <div>Number is {getdata}</div>
    </div>
  );
};

export default ContractRead;
