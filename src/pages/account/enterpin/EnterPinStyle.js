import { StyleSheet, Dimensions } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    alignItems  : "center",
    flex        : 1
  },
  titleText : {
    fontFamily : "Futura-Bold",
    fontSize : 30,
    color : swatch.primaryColor,
    marginBottom : 30,
    marginTop : 74.5
  },    
  otpInputView : {
    height          : 65
  },
  otpInput : {
    backgroundColor : swatch.primaryGray,
    color : swatch.black,
    borderRadius : 6
  },
  saveButton : {
    height : 50,
    backgroundColor : swatch.secondaryColor,
    alignItems : "center",
    position : "absolute",
    bottom : 0,
    width : Dimensions.get("window").width
  },
  saveText : {
    lineHeight          : 50,
    includeFontPadding  : true,
    textAlignVertical   : "center",
    fontFamily : "AvenirNext-Medium",
    fontSize : 16,
    color : swatch.white
  },
  notifView : {
    marginTop : 36.5,
    borderRadius  : 6,
    backgroundColor : swatch.primaryBlack,
    alignItems : "center"
  },
  notifText : {
    color : swatch.white,
    fontFamily : "AvenirNext-Medium",
    fontSize : 16,
    marginRight : 31,
    marginLeft : 31,
    marginBottom : 3,
    marginTop : 3
  }
});