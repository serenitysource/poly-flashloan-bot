import { ERC20Token } from "./constants/addresses";

export const renderInterval = 1 * 1000;

// interval of price check (ms)
export const interval = 10 * 1000;

export const loanAmount = 5000;
export const diffAmount = 50; // Not enough amount to return loan

//export const chainId = 1;// Ethereum
//export const chainId = 56;// Binance Smart Chain
export const chainId = 137; // Polygon

export const explorerURL = "https://polygonscan.com";

// Token pair the bot trading
export const baseTokens = [
  ERC20Token.DAI,
  ERC20Token.WETH,
  ERC20Token.USDC,
  ERC20Token.USDT,
  ERC20Token.WMATIC,
  ERC20Token.LINK,
];

export const tradingTokens = [
  ERC20Token.DAI,
  ERC20Token.WETH,
  ERC20Token.USDC,
  ERC20Token.USDT,
  ERC20Token.WMATIC,
  ERC20Token.LINK,
];

/**
 * @type {string} public flashloan contract address
 * Polyscan: https://polygonscan.com/address/0x568a23ad22041683468cd1d3a6968d7e7dc20d40
 * if you have deployed your own contract, you can use it instead of the default one
 */
export const flashloanAddress: string =
  "0x8311bcA90818330AA228DA17aA8fB7a0bBBaF97C";
// "0x2d889d8190859e75d015E4B4573fECB06bb49bd6"; removed comments
// "0x26e87cadD175CCef952FE34dF5C509e1fa2Fe4e7"; swap commented !!!
// "0x0AeF2be906387AfE12A6708c69A86230f540833C"; added emit before swap
// "0x8311bcA90818330AA228DA17aA8fB7a0bBBaF97C"; my deployment has verified source -- active now !!!
// "0x568a23AD22041683468CD1D3a6968D7E7dC20D40";

// protocols the bot will use
export const protocols =
  "POLYGON_SUSHISWAP,POLYGON_QUICKSWAP,POLYGON_APESWAP,POLYGON_JETSWAP,POLYGON_WAULTSWAP,POLYGON_UNISWAP_V3";

export const gasLimit = 15000000;
export const gasPrice = 30; // gwei

export const routeParts = [
  [10000],
  [8000, 2000],
  [5000, 4000, 1000],
  [5000, 3000, 1000, 1000],
  [3000, 2000, 2000, 2000, 1000],
  [2000, 2000, 2000, 2000, 1000, 1000],
];
