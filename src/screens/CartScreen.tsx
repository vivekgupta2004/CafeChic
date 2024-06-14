import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useStore } from '../store/store';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { COLORS, SPACING } from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
import EmptyListAnimation from '../components/EmptyListAnimation';
import PaymentFooter from '../components/PaymentFooter';
import CartItem from '../components/CartItem';


const CartScreen = ({navigation,route}:any) => {
  const CartList = useStore((state: any) => state.CartList);
  const CartPrice = useStore((state: any) => state.CartPrice);
  const incrementCartItemQuantity = useStore((state: any) => state.incrementCartItemQuantity);
  const decreaseCartItemQuantity = useStore((state: any) => state.decreaseCartItemQuantity);
  const calculateCardPrice = useStore((state: any) => state.calculateCardPrice);
  const tabBarHeight = useBottomTabBarHeight();
  console.log("CartList", CartList.length);

  const buttonPressHandler =()=>{
    navigation.push('Payment')
  }
 
  
  

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={styles.ScrollViewFlex}>
        <View style={[styles.ScrollViewInnerView, { marginBottom: tabBarHeight }]}>
          <View style={styles.ItemContainer}>
            <HeaderBar title='Cart' />
            {CartList.length == 0 ? (<EmptyListAnimation title={'Cart is Empty'} />) :
              (
                <View style={styles.ListItemContainer}>
                  {CartList.map((data: any) => (
                    <TouchableOpacity onPress={() => { }} key={data.id}>
                      <CartItem
                       id ={data.id}
                       name= {data.name}
                       imagelink_square={data.imagelink_square}
                       special_ingredient={data.special_ingredient}
                       roasted={data.roasted}
                       prices={data.prices}
                       type={data.type}
                       incrementCartItemQuantityHandler={() => {}}
                       decreaseCartItemQuantityHandler={() => {}}
                      />

                    </TouchableOpacity>

                  ))}
                </View>

              )}
          </View>
          {CartList.length != 0 ? <PaymentFooter
          buttonPressHandler={buttonPressHandler}
          buttonTitle='Pay' price={{ price: CartPrice, currency: '$' }} /> : <></>}

        </View>


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

  },
  ScrollViewInnerView: {
    flex: 1,
    justifyContent: 'space-between',

  },
  ItemContainer: {
    flex: 1
  },
  ListItemContainer: {
    paddingHorizontal: SPACING.space_20,
    gap: SPACING.space_20,

  }
})
export default CartScreen
