export const UNSUPPORTED_LIST_URLS: string[] = []
export const ABSTRACT_TESTNET_LIST = relayTokenList(11124, true)
export const ZERO_LIST = relayTokenList(11124)
export const BOB_LIST = relayTokenList(60808)
export const CYBER_LIST = relayTokenList(7560)
export const SHAPE_LIST = relayTokenList(360)
export const REDSTONE_LIST = relayTokenList(690)
export const REDSTONE_GARNET_LIST = relayTokenList(17069, true)
export const INK_LIST = relayTokenList(57073)

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [
  ABSTRACT_TESTNET_LIST,
  ZERO_LIST,
  BOB_LIST,
  CYBER_LIST,
  SHAPE_LIST,
  REDSTONE_LIST,
  REDSTONE_GARNET_LIST,
  INK_LIST,
]

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  ...DEFAULT_ACTIVE_LIST_URLS,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

function relayTokenList(chainId: string | number, testnets = false) {
  return `https://api${testnets ? '.testnets.' : '.'}relay.link/tokenlist?chainId=${chainId}`
}
