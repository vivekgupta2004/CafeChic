import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/theme';
import { useStore } from '../store/store'
import { ScreenContainer } from 'react-native-screens';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';

const DetailsScreen = ({ navigation, route }: any) => {
  console.log("route =", route.params);
  const ItemofIndex = useStore((state:any) =>
    route.params.type == "Coffee" ? state.CoffeeList : state.BeanList)[route.params.index];

  const BackHandler =() =>{
   navigation.pop();
  }
  
  return (
    <View style={styles.ScreenContainer}>
    <StatusBar backgroundColor={COLORS.primaryBlackHex}/>
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.ScrollViewFlex} >

      <ImageBackgroundInfo
      EnableBackHandler={true}
      imagelink_portrait={ItemofIndex.imagelink_portrait}
      type={ItemofIndex.type}
      id={ItemofIndex.id}
      favourite={ItemofIndex.favourite}
      name={ItemofIndex.name}
      special_ingredient={ItemofIndex.special_ingredient}
      ingredients={ItemofIndex.ingredients}
      average_rating={ItemofIndex.average_rating}
      rating_count={ItemofIndex.rating_count}
      rosted={ItemofIndex.rosted}
      BackHandler={BackHandler}
      ToggleFavourite={()=>{}}
      />

    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    

  },
  ScreenContainer:{
    flex:1,
    backgroundColor:COLORS.primaryBlackHex
  },
  ScrollViewFlex:{
    flexGrow:1,
    
  }
})
export default DetailsScreen
