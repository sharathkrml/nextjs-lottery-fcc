import { ConnectButton } from "web3uikit"
const Headers = () => {
  return (
    <div>
      Decentralized Lottery
      <ConnectButton moralisAuth={false} />
    </div>
  )
}

export default Headers
