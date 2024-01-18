import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainScreen } from '../screens/MainScreen';
import { SkillScreen } from '../screens/SkillScreen';
import { MaterialCommunityIcons, AntDesign} from '@expo/vector-icons';

const { Screen, Navigator } = createBottomTabNavigator();

export function BottomTabRouters() {
  return (

    <Navigator>
        <Screen 
        name="Perfil" 
        component={MainScreen} 
        options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
            <AntDesign name="idcard" color={color} size={size}/>)
        }}/>
        <Screen 
        name="Skill" 
        component={SkillScreen} 
        options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
            <AntDesign name="tool" color={color} size={size}/>)
        }}
        />
    </Navigator>
  );
}