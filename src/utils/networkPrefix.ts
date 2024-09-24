import { AbstractTestnetNetworkInfo, NetworkInfo } from 'constants/networks'

export function networkPrefix(activeNewtork: NetworkInfo) {
  const isAbstract = activeNewtork === AbstractTestnetNetworkInfo
  if (isAbstract) {
    return '/'
  }
  const prefix = '/' + activeNewtork.route.toLocaleLowerCase() + '/'
  return prefix
}
