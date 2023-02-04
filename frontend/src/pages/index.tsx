import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import ContractRead from "@/components/ContractRead";
import ContractWrite from "@/components/ContractWrite";
import { useAccount, useContractEvent } from "wagmi";
import ABI from "@/constants/ABI";
import CONTRACT_ADDRESS from "@/constants/ContractAddress";

export default function Home() {
  const { isConnected } = useAccount();

  useContractEvent({
    address: CONTRACT_ADDRESS,
    abi: ABI,
    eventName: "myEvent",
    listener(newNum, from) {
      console.log(`${from} changed the value to ${newNum}`);
    },
  });

  return (
    <>
      <div>
        <ConnectButton />
      </div>
      {isConnected && (
        <div>
          <div>
            <ContractRead />
          </div>
          <div>
            <ContractWrite />
          </div>
        </div>
      )}
    </>
  );
}
