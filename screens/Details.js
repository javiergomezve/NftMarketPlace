import React, { Fragment } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StatusBar,
    FlatList,
    Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {
    CircleButton,
    DetailsBid,
    DetailsDescription,
    FocusedStatusBar,
    RecButton,
    SubInfo,
} from '../components';
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants';

const DetailsHeader = ({ data, navigation }) => {
    return (
        <View
            style={{
                width: '100%',
                height: 373,
            }}
        >
            <Image
                source={data.image}
                resizeMode="cover"
                style={{ width: '100%', height: '100%' }}
            />

            <CircleButton
                imgUrl={assets.left}
                handlePress={() => navigation.goBack()}
                left={15}
                top={StatusBar.currentHeight + 10}
            />

            <CircleButton
                imgUrl={assets.heart}
                right={15}
                top={StatusBar.currentHeight + 10}
            />
        </View>
    );
};

const Details = ({ route, navigation }) => {
    const { data } = route.params;

    const secondColorForGradient =
        Platform.OS === 'ios' ? 'transparent' : '#ffffff';

    return (
        <Fragment>
            <FocusedStatusBar backgroundColor={COLORS.primary} />
            <SafeAreaView
                style={{
                    flex: 1,
                }}
            >
                <LinearGradient
                    colors={[
                        'transparent',
                        secondColorForGradient,
                        secondColorForGradient,
                    ]}
                    style={{
                        width: '100%',
                        position: 'absolute',
                        bottom: 0,
                        paddingVertical: SIZES.font,
                        justifyContent: 'center',
                        alignItems: 'center',
                        // backgroundColor: 'rgba(25,255,255,0.5)',
                        zIndex: 1,
                    }}
                >
                    <RecButton
                        minWidth={170}
                        fontSize={SIZES.large}
                        {...SHADOWS.dark}
                    />
                </LinearGradient>

                <FlatList
                    keyExtractor={item => item.id}
                    data={data.bits}
                    renderItem={({ item }) => <DetailsBid bid={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: SIZES.extraLarge * 3,
                    }}
                    ListHeaderComponent={() => (
                        <React.Fragment>
                            <DetailsHeader
                                data={data}
                                navigation={navigation}
                            />
                            <SubInfo />
                            <View
                                style={{
                                    padding: SIZES.font,
                                }}
                            >
                                <DetailsDescription data={data} />

                                {data.bids.length > 0 && (
                                    <Fragment>
                                        <Text
                                            style={{
                                                fontSize: SIZES.font,
                                                fontFamily: FONTS.semiBold,
                                                color: COLORS.primary,
                                            }}
                                        >
                                            Current bids
                                        </Text>

                                        <FlatList
                                            keyExtractor={item => item.id}
                                            data={data.bids}
                                            renderItem={({ item }) => (
                                                <DetailsBid bid={item} />
                                            )}
                                            showsVerticalScrollIndicator={false}
                                        />
                                    </Fragment>
                                )}
                            </View>
                        </React.Fragment>
                    )}
                />
            </SafeAreaView>
        </Fragment>
    );
};

export default Details;
