import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  accountBackgroundView : {
    backgroundColor : swatch.primaryColor,
    width : 335,
    height : 75,
    borderRadius : 8,
    flexDirection : "row",
    paddingTop : 10,
    paddingLeft : 15,
    // marginRight : 20,
    marginBottom : 25
  },
  accountNameText : {
    fontFamily : "Futura-Medium",
    color : swatch.white,
    fontSize : 18
  },
  accountPhoneText : {
    fontFamily : "AvenirNext-Medium",
    color : swatch.white,
    fontSize : 16,
    marginTop : 6
  },
  accountImageView : {
    width : 55,
    height : 55,
    borderRadius : 55 / 2,
    backgroundColor : swatch.white,
    marginRight : 15
  }
});