import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../theme/theme';
import { useStore } from '../store/store'
import { ScreenContainer } from 'react-native-screens';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';

const DetailsScreen = ({ navigation, route }: any) => {
  console.log("route =", route.params);
  const ItemofIndex = useStore((state: any) =>
    route.params.type == "Coffee" ? state.CoffeeList : state.BeanList)[route.params.index];

  const BackHandler = () => {
    navigation.pop();
  }

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList);

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id)

  }

  const [fullDesc, setFullDesc] = useState(false);

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
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
          roasted={ItemofIndex.roasted}
          BackHandler={BackHandler}
          ToggleFavourite={ToggleFavourite}
        />

        <View style={styles.FooterInfoArea}>
          <Text style={styles.InfoTitle}>Description</Text>
          {fullDesc ? (
            <TouchableWithoutFeedback onPress={()=> {setFullDesc(prev => !prev)}}>
              <Text style={styles.DescriptionText}>{ItemofIndex.Decription}</Text>

            </TouchableWithoutFeedback>)
            : (
              <TouchableWithoutFeedback>
                <Text style={styles.DescriptionText} numberOfLines={3}>{ItemofIndex.Decription}</Text>
              </TouchableWithoutFeedback>
            )}
        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {


  },
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
  ScrollViewFlex: {
    flexGrow: 1,

  },
  FooterInfoArea:{

  },
  InfoTitle:{

  },
  DescriptionText:{
    
  }
})
export default DetailsScreen
