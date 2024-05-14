import { ImageBackground, ImageProps, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import GradientBGIcon from './GradientBGIcon';
import { COLORS, FONTSIZE, SPACING } from '../theme/theme';

interface ImageBackgroundInfoProps {
    EnableBackHandler: boolean;
    imagelink_portrait: ImageProps;
    type: string;
    id: string;
    favourite: boolean;
    name: string;
    special_ingredient: string;
    ingredients: string;
    average_rating: number;
    rating_count: string;
    rosted: string;
    BackHandler?: any;
    ToggleFavourite: any;

}

const ImageBackgroundInfo: React.FC<ImageBackgroundInfoProps> = ({
    EnableBackHandler,
    imagelink_portrait,
    type,
    id,
    favourite,
    name,
    special_ingredient,
    ingredients,
    average_rating,
    rating_count,
    rosted,
    BackHandler,
    ToggleFavourite,
}) => {



    return (
        <View>
            <ImageBackground style={styles.ItemBackgroundImage} source={imagelink_portrait}>
                {EnableBackHandler ? (
                    <View style={styles.ImageHeaderBarContainerWithBack}>
                        <TouchableOpacity onPress={()=>BackHandler()}>
                            <GradientBGIcon name='left' color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_18} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <GradientBGIcon name='like' color={COLORS.primaryRedHex} size={FONTSIZE.size_18} />
                        </TouchableOpacity>
                    </View>
                ) : <>
                    <View style={styles.ImageHeaderBarContainerWithOutBack}>

                        <TouchableOpacity>
                            <GradientBGIcon name='like' color={COLORS.primaryRedHex} size={FONTSIZE.size_18} />
                        </TouchableOpacity>
                    </View></>}
            </ImageBackground>
        </View>
    )
}

export default ImageBackgroundInfo

const styles = StyleSheet.create({
    ItemBackgroundImage: {
        width: '100%',
        aspectRatio: 20 / 25,
        justifyContent: 'space-between',
    },
    ImageHeaderBarContainerWithBack: {
        padding: SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    ImageHeaderBarContainerWithOutBack: {
        padding: SPACING.space_30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
})