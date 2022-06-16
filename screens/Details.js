import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Image,
    StatusBar,
    FlatList,
} from 'react-native';

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

    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
            <FocusedStatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                transLucent={false}
            />

            <View
                style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                    paddingVertical: SIZES.font,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'rgba(25,255,255,0.5)',
                    zIndex: 1,
                }}
            >
                <RecButton
                    minWidth={170}
                    fontSize={SIZES.large}
                    {...SHADOWS.dark}
                />
            </View>

            <FlatList
                keyExtractor={item => item.id}
                data={data.bits}
                renderItem={({ item }) => <DetailsBid bid={item} />}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
                ListHeaderComponent={() => (
                    <React.Fragment>
                        <DetailsHeader data={data} navigation={navigation} />
                        <SubInfo />
                        <View
                            style={{
                                padding: SIZES.font,
                            }}
                        >
                            <DetailsDescription data={data} />

                            {data.bids.length > 0 && (
                                <Text
                                    style={{
                                        fontSize: SIZES.font,
                                        fontFamily: FONTS.semiBold,
                                        color: COLORS.primary,
                                    }}
                                >
                                    Current bid
                                </Text>
                            )}
                        </View>
                    </React.Fragment>
                )}
            />
        </SafeAreaView>
    );
};

export default Details;
