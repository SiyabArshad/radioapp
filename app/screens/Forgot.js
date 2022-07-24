import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView, StyleSheet } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize';

//components
import Screen from './../components/Screen';
import MyAppButton from './../components/common/MyAppButton';
import InputField from './../components/common/InputField';

//config
import Colors from '../config/Colors';
import app from "../../firebase"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,getAuth,deleteUser,updateProfile,sendEmailVerification,sendPasswordResetEmail} from "firebase/auth"

function Forgot(props) {
    const auth=getAuth(app)
    const socialMediaLinks = [
        {
            imageSource: require('../../assets/images/fb.png'),
            // onPress: Pass onpress here
        },
        {
            imageSource: require('../../assets/images/apple.png'),
            // onPress:
        },
        {
            imageSource: require('../../assets/images/google.png'),
            // onPress:
        },
    ]

    const [indicator, showIndicator] = useState(false);

    const [inputField, SetInputField] = useState([
        {
            placeholder: "Email",
            value: "",
        }
    ]);

    const handleChange = (text, i) => {
        let tempfeilds = [...inputField];
        tempfeilds[i].value = text;
        SetInputField(tempfeilds);

    };

    const handleLogin = () => {
        showIndicator(true);
        let tempfeilds = [...inputField];

        if (tempfeilds[0].value === "") {
            alert("Please fill all the feilds");
            showIndicator(false);
            return true;
        }

       // props.navigation.navigate("HomeScreen")
       try {
        // API INTEGRATION WILL COME HERE
//alert("insides")
        sendPasswordResetEmail(auth,tempfeilds[0].value).then(()=>{
            showIndicator(false); 
            alert('Email has been sent to your registerd account for password reset.')
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            showIndicator(false);
            alert(errorMessage)  
        })  
        }
     catch (error) {
        alert("try again later");
    }

        showIndicator(false);
    };

    return (
        <Screen style={styles.screen}>

            {/* Logo */}
            <Image style={{ marginTop: RFPercentage(4), width: RFPercentage(9), height: RFPercentage(9) }} source={require('../../assets/images/radio.png')} />

            <Text style={{ color: Colors.primary, fontSize: RFPercentage(4.5), fontFamily: 'Montserrat_700Bold', marginTop: RFPercentage(2) }} >
                Reset Password
            </Text>
            <ScrollView style={{ flex: 1, width: '100%' }} >
                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>

                    {/* Input field */}
                    <View style={{ marginTop: RFPercentage(5.2), justifyContent: 'center', alignItems: 'center', width: '100%', alignSelf: 'center' }}>
                        {inputField.map((item, i) => (
                            <View key={i} style={{ marginTop: i == 0 ? RFPercentage(2) : RFPercentage(2), alignSelf: 'center' }} >
                                <InputField
                                    placeholder={item.placeholder}
                                    placeholderColor={Colors.darkGrey}
                                    placeholderAtCenter={false}
                                    height={RFPercentage(6.8)}
                                    backgroundColor={Colors.white}
                                    borderWidth={RFPercentage(0.3)}
                                    // borderColor={Colors.black}
                                    secure={item.secure}
                                    borderRadius={RFPercentage(1.4)}
                                    color={Colors.black}
                                    fontSize={RFPercentage(2)}
                                    handleFeild={(text) => handleChange(text, i)}
                                    value={item.value}
                                    width={"92%"}
                                />
                            </View>
                        ))}
                    </View>

                    {/* Button */}
                    <View style={{ width: "100%", alignItems: "center", marginTop: RFPercentage(7) }}>
                        <MyAppButton
                            title="SEND EMAIL"
                            onPress={() => handleLogin()}
                            gradient={true}
                            bold={false}
                            borderColor={Colors.primary}
                            color={Colors.white}
                            fontFamily={"Montserrat_600SemiBold"}
                            fontSize={RFPercentage(2.2)}
                            borderRadius={RFPercentage(30)}
                            width={"60%"}
                        />
                    </View>
                    <View style={{ marginTop: RFPercentage(5.8), flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: Colors.black, fontSize: RFPercentage(1.8) }} >
                            Don't have an account?
                        </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("SignupScreen")} activeOpacity={0.8} style={{ marginLeft: RFPercentage(0.6) }} >
                            <Text style={{ color: '#EF3F27', fontWeight: 'bold', fontFamily: 'Montserrat_600SemiBold', fontSize: RFPercentage(1.8) }} >
                                Signup
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: Colors.white
    }
})

export default Forgot;