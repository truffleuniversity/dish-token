import DISHToken from "./contracts/DISHToken.json";
import DISHNFT from "./contracts/DISHNFT.json";

const options = {
  web3: {
    block: false,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
  contracts: [DISHToken, DISHNFT],
  events: {
  },
  polls: {
    accounts: 1500,
  },
};

export default options;
