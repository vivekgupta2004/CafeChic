import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/theme';

const DetailsScreen = ({navigation,route}:any) => {
  console.log("route =", route.params);
  
  return (
    <View>
      <Text style={styles.container}>DetailsScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    color:COLORS.primaryBlackHex

  }
})
export default DetailsScreen
