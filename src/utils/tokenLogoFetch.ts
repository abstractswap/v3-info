import { DEFAULT_LIST_OF_LISTS } from 'constants/lists'
import store from 'state'

class TokenLogoLookup {
  private dict: { [key: string]: string[] | undefined } = {}
  private initialized = false

  initialize() {
    const dict: { [key: string]: string[] | undefined } = {}

    DEFAULT_LIST_OF_LISTS.forEach((list) => {
      console.log(list)
      const listData = store.getState().lists.byUrl[list]
      console.log(listData)
      if (!listData) {
        return
      }
      listData.current?.tokens.forEach((token) => {
        if (token.logoURI) {
          const lowercaseAddress = token.address.toLowerCase()
          const currentEntry = dict[lowercaseAddress + ':' + token.chainId]
          if (currentEntry) {
            currentEntry.push(token.logoURI)
          } else {
            dict[lowercaseAddress + ':' + token.chainId] = [token.logoURI]
          }
        }
      })
    })
    this.dict = dict
    this.initialized = true
  }
  getIcons(address?: string | null, chainId: number | null = 1) {
    if (!address) return undefined

    if (!this.initialized) {
      this.initialize()
    }

    return this.dict[address.toLowerCase() + ':' + chainId]
  }
}

export default new TokenLogoLookup()
