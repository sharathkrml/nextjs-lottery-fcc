import { useWeb3Contract, useMoralis } from "react-moralis"
import { abi, contractAddresses } from "../constants"
import { useEffect } from "react"
import { ethers, Contract } from "ethers"
const LotteryEntrance = () => {
  const { chainId: chainIdInHex, isWeb3Enabled } = useMoralis()
  const chainId = parseInt(chainIdInHex)
  const LotteryAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null
  const { runContractFunction: enterLottery } = useWeb3Contract({
    abi: abi,
    contract: LotteryAddress,
    functionName: "enterLottery",
  })
  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contract: LotteryAddress,
    functionName: "getEntranceFee",
  })
  //   const getFee = async () => {
  //     const connection = window.ethereum
  //     const provider = new ethers.providers.Web3Provider(connection)
  //     const LotteryContract = new Contract(LotteryAddress, abi, provider)
  //     console.log(
  //       ethers.utils.formatEther(await LotteryContract.getEntranceFee())
  //     )
  //   }
  const updateUi = async () => {
    const fee = await getEntranceFee()
    console.log(fee)
  }
  useEffect(() => {
    if (isWeb3Enabled) {
      updateUi()
    }
  }, [isWeb3Enabled])

  return (
    <div>
      <button onClick={updateUi}>getEntranceFee</button>
    </div>
  )
}

export default LotteryEntrance
