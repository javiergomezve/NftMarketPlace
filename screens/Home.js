import { View, SafeAreaView, FlatList } from 'react-native';
import React, { Fragment, useState } from 'react';

import { COLORS, NFTData } from '../constants';
import { HomeHeader, FocusedStatusBar, NFTCard } from '../components';

const Home = () => {
    const [nftData, setNftData] = useState(NFTData);

    const handleSearch = value => {
        if (!value.length) return setNftData(NFTData);

        const filteredData = NFTData.filter(item =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        if (filteredData.length) {
            setNftData(filteredData);
        } else {
            setNftData(NFTData);
        }
    };

    return (
        <Fragment>
            <FocusedStatusBar backgroundColor={COLORS.primary} />
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ zIndex: 0 }}>
                        <FlatList
                            data={nftData}
                            keyExtractor={item => item.id}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => <NFTCard data={item} />}
                            ListHeaderComponent={
                                <HomeHeader onSearch={handleSearch} />
                            }
                        />
                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            zIndex: -1,
                        }}
                    >
                        <View
                            style={{
                                height: 300,
                                backgroundColor: COLORS.primary,
                            }}
                        />
                        <View
                            style={{ flex: 1, backgroundColor: COLORS.white }}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </Fragment>
    );
};

export default Home;
