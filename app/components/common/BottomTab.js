import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../../config/Colors';

function BottomTab({ props }) {

    return (
        <View style={{ borderColor: Colors.grey, borderWidth: RFPercentage(0.1), borderTopLeftRadius: RFPercentage(3), borderTopRightRadius: RFPercentage(3), flexDirection: 'row', alignItems: 'center', position: 'absolute', justifyContent: 'center', bottom: 0, width: "100%", height: RFPercentage(7), backgroundColor: Colors.white }}>
            <View style={{ width: "80%", flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', }} >

                <TouchableOpacity onPress={() => props.navigation.navigate("LessonsScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3.4), height: RFPercentage(3.4) }} source={require('../../../assets/images/cal.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("ChatScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3.4), height: RFPercentage(3.4) }} source={require('../../../assets/images/mes.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("HomeScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3.4), height: RFPercentage(3.4) }} source={require('../../../assets/images/home.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("TranslationScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3.4), height: RFPercentage(3.4) }} source={require('../../../assets/images/pet.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate("ProfileScreen")} activeOpacity={0.8} style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <Image style={{ width: RFPercentage(3.4), height: RFPercentage(3.4) }} source={require('../../../assets/images/acc.png')} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default BottomTab;