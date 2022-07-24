import React, { useState,useEffect } from 'react';
import {  Modal, View, ActivityIndicator, Text, TouchableOpacity, ScrollView, Image, ImageBackground, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Audio } from 'expo-av';
//components
import Screen from './../components/Screen';
//config
import Colors from '../config/Colors';
import LoadingModal from "./common/LoadingModal"
function StationComponent({ data, coverSource }) {
           const [sound, setSound] = React.useState();
           const [play, setPlay] = useState(false)
           const[loading,setloading]=useState(false)
  async function playSound(url,id) {
    //console.log('Loading Sound');
   setPlay(true)
  setloading(true)
  try{
   const { sound } = await Audio.Sound.createAsync(
       {uri:url}
    );
    setSound(sound);
    setloading(false)
    //console.log('Playing Sound');
    await sound.playAsync();
   }
   catch(e)
   {
    console.log(e)
   }
}
const stop=async()=>{
    setPlay(false)
    sound.unloadAsync()
}


  React.useEffect(() => {
    return sound
      ? () => {
         // console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);
    return (
        <View style={{ marginTop: RFPercentage(3), width: '100%', alignSelf: 'center', justifyContent: 'center', alignItems: 'flex-start' }} >
            <ImageBackground style={{ alignSelf: 'center', width: RFPercentage(50), height: RFPercentage(11.1), justifyContent: 'center', alignItems: 'center' }} source={coverSource} >
                {/* empty view for background opacity */}
                <View style={{ borderRadius: RFPercentage(2), borderBottomLeftRadius: RFPercentage(2), position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.3)" }} />
                <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                    <Text style={{ fontFamily: 'Montserrat_500Medium', color: Colors.white, fontSize: RFPercentage(2.2) }} >
                        {data.data.name}
                    </Text>
{
    loading?

                    <TouchableOpacity activeOpacity={0.8} style={{ position: 'absolute', right: 0 }}>
                    <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(7), height: RFPercentage(7) }} source={require('../../assets/images/pr.png')} >
                        <ActivityIndicator color={Colors.primary}></ActivityIndicator>
                        </ImageBackground>
                    </TouchableOpacity>
:                 

                    <TouchableOpacity    activeOpacity={0.8} style={{ position: 'absolute', right: 0 }} >
                        <ImageBackground style={{ justifyContent: 'center', alignItems: 'center', width: RFPercentage(7), height: RFPercentage(7) }} source={require('../../assets/images/pr.png')} >
                        {play ?
                                <TouchableOpacity onPress={() => stop()} >
                                    <FontAwesome5 name="pause-circle" style={{ fontSize: RFPercentage(5) }} color={Colors.white} />
                                </TouchableOpacity>
                                :
                                <TouchableOpacity onPress={()=>playSound(data.data.url,data.id)} >
                                    <Feather name="play-circle" style={{ fontSize: RFPercentage(5) }} color={Colors.white} />
                                </TouchableOpacity>
                            }
                
                        </ImageBackground>
                    </TouchableOpacity>
}
               </View>
            </ImageBackground>
        </View>
    );
}

export default StationComponent;
/**
 *         
 <TouchableOpacity style={{overflow:"hidden"}} onPress={() => stop()} >
                        <Modal  transparent={true} style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
            <View style={{  justifyContent: 'center', alignItems: 'center' }} >
                <View style={{ elevation: 5, width: RFPercentage(10), height: RFPercentage(10), borderRadius: 10, backgroundColor: Colors.purple, justifyContent: 'center', alignItems: 'center' }} >
                    <ActivityIndicator size={RFPercentage(5)} color={Colors.primary} />
                </View>
            </View>
        </Modal>             
                                </TouchableOpacity>



                            */