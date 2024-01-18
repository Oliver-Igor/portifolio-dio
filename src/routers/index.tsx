import { NavigationContainer } from '@react-navigation/native'

import { BottomTabRouters } from './RouterTab'

export function Routes() {
  return(
    <NavigationContainer>
        <BottomTabRouters/>
    </NavigationContainer>
  )
}