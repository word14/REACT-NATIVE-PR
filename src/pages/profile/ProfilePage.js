import React, { Component } from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"; //import icon bisa googling dngan keyword : "react native icon"

class ProfilePage extends Component {
    static navigationOptions = ({ navigation }) => ({
      title   : "Home",
      headerTitleStyle : Platform.OS == "android" ? 
        {
          //ini setting agar title di android bisa ditengah
          alignSelf       : "center",
          textAlign       : "center",
          justifContent   : "center",
          position        : "absolute",
          left            : 0,
          right           : 0 
        } : {},
      headerLeft : () => {
        return (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="leftcircle" size={32}>
            </AntDesign>
          </TouchableOpacity>
        );
      }
    });

    render() {
      return (
        <View>
          <Text>Kevin Tamvan</Text>
        </View>
      );
    }
}

export default ProfilePage;