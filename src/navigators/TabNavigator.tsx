import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Homescreen from '../screens/Homescreen'
import CartScreen from '../screens/CartScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import { COLORS } from '../theme/theme'
import { BlurView } from '@react-native-community/blur'
import CustomIcon from '../components/CustomIcon'

const Tab =createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
        tabBarHideOnKeyboard:true,
        headerShown:false,
        tabBarShowLabel:false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground:()=>(
            <BlurView overlayColor='' blurAmount={15} style={styles.blurViewStyles}/>
        )
        
        }}>
        <Tab.Screen name='Home' component={Homescreen} options={{
            tabBarIcon:({focused, color,size})=>(
                <CustomIcon name='home' size={25} color={focused?COLORS.primaryOrangeHex:COLORS.primaryGreyHex} />
            )
        }}></Tab.Screen>
        <Tab.Screen name='Cart' component={CartScreen} options={{
            tabBarIcon:({focused, color,size})=>(
                <CustomIcon name='cart' size={25} color={focused?COLORS.primaryOrangeHex:COLORS.primaryGreyHex} />
            )
        }} ></Tab.Screen>
        <Tab.Screen name='Favorite' component={FavoriteScreen} options={{
            tabBarIcon:({focused, color,size})=>(
                <CustomIcon name='like' size={25} color={focused?COLORS.primaryOrangeHex:COLORS.primaryGreyHex} />
            )
        }}></Tab.Screen>
        <Tab.Screen name='History' component={OrderHistoryScreen} options={{
            tabBarIcon:({focused, color,size})=>(
                <CustomIcon name='bell' size={25} color={focused?COLORS.primaryOrangeHex:COLORS.primaryGreyHex} />
            )
        }}></Tab.Screen>

    </Tab.Navigator>
    
  )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBarStyle:{
       height:80,
       position:'absolute',
       backgroundColor:COLORS.primaryBlackRGBA,
       borderBottomWidth:0,
       elevation:0,
       borderTopColor:'trasparant'
    },
    blurViewStyles:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0
    }
    
})