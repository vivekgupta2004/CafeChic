import { ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import { useStore } from '../store/store'
import { ScreenContainer } from 'react-native-screens';
import ImageBackgroundInfo from '../components/ImageBackgroundInfo';
import PaymentFooter from '../components/PaymentFooter';

const DetailsScreen = ({ navigation, route }: any) => {
  console.log("route =", route.params.type);
  const ItemofIndex = useStore((state: any) =>
    route.params.type == 'Coffee' ? state.CoffeeList : state.BeanList)[route.params.index];

  const BackHandler = () => {
    navigation.pop();
  }

  const addToFavoriteList = useStore((state: any) => state.addToFavoriteList);
  const deleteFromFavoriteList = useStore((state: any) => state.deleteFromFavoriteList);

  const ToggleFavourite = (favourite: boolean, type: string, id: string) => {
    favourite ? deleteFromFavoriteList(type, id) : addToFavoriteList(type, id)

  }
  const addToCart = useStore((state: any) => state.addToCart);
  const calculateCartPrice = useStore((state: any) => state.calculateCartPrice);

  const addToCarthandler = ({ id, index, name, roasted, imagelink_square, special_ingredient, type, price }: any) => {
    addToCart({ id, index, name, roasted, imagelink_square, special_ingredient, type, prics: [{ ...price, quantity: 1 }] });
    calculateCartPrice();
    navigation.navigate('Cart')
  }

  const [price, setPrice] = useState(ItemofIndex.prices[0])

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
            <TouchableWithoutFeedback onPress={() => { setFullDesc(prev => !prev) }}>
              <Text style={styles.DescriptionText}>{ItemofIndex.description}</Text>

            </TouchableWithoutFeedback>)
            : (
              <TouchableWithoutFeedback>
                <Text style={styles.DescriptionText} numberOfLines={3}>{ItemofIndex.description}</Text>
              </TouchableWithoutFeedback>
            )}

          <Text style={styles.InfoTitle}>Size</Text>
          <View style={styles.SizeOutContainer}>
            {
              ItemofIndex.prices.map((data: any) => (
                <TouchableOpacity
                  onPress={() => {
                    setPrice(data)
                  }}
                  key={data.size}
                  style={[styles.SizeBox, {
                    borderColor: data.size == price.size ? COLORS.primaryOrangeHex : COLORS.primaryDarkGreyHex
                  }]} >
                  <Text style={[styles.SizeText, {
                    fontSize: ItemofIndex.type == "bean" ? FONTSIZE.size_14 : FONTSIZE.size_16,
                    color: data.size == price.size ? COLORS.primaryOrangeHex : COLORS.secondaryLightGreyHex
                  },]}>{data.size}</Text>
                </TouchableOpacity>

              ))
            }
          </View>
        </View>
        <PaymentFooter price={price} buttonPressHandler={() => {
          addToCarthandler({
            id: ItemofIndex.id,
            index: ItemofIndex.index,
            name: ItemofIndex.name,
            roasted: ItemofIndex.roasted,
            imagelink_square: ItemofIndex.imagelink_square,
            special_ingredient:ItemofIndex.special_ingredient,
            type:ItemofIndex.type,
            price: price,
          })
        }} buttonTitle='Add to Cart' />

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex
  },
  ScrollViewFlex: {
    flexGrow: 1,
    justifyContent: 'space-between',

  },
  FooterInfoArea: {
    padding: SPACING.space_20


  },
  InfoTitle: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_16,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_10,

  },
  DescriptionText: {
    letterSpacing: 0.5,
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_14,
    color: COLORS.primaryWhiteHex,
    marginBottom: SPACING.space_30,
  },
  SizeOutContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SPACING.space_20

  },
  SizeBox: {
    flex: 1,
    backgroundColor: COLORS.primaryDarkGreyHex,
    alignItems: 'center',
    justifyContent: 'center',
    height: SPACING.space_24 * 2,
    borderRadius: BORDERRADIUS.radius_10,
    borderWidth: 2,

  },
  SizeText: {
    fontFamily: FONTFAMILY.poppins_medium,


  },

})
export default DetailsScreen
