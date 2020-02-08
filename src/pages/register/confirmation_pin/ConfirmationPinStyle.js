import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    alignItems  : "center",
    flex        : 1
  },  
  titleText : {
    fontFamily  : "Futura-Bold",
    fontSize    : 25,
    marginTop : 74.5,
    marginBottom : 30,
    color : swatch.primaryColor
  },
  textInput : {
    width : 278,
    height : 36,
    borderRadius : 6,
    backgroundColor : swatch.primaryGray,
    alignItems : "center"
  },
  placeholder : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 20,
    textAlign : "center",
    color : swatch.white
  },
  otpInputView : {
    height          : 65
  },
  otpInput : {
    backgroundColor : swatch.primaryGray,
    color : swatch.black,
    borderRadius : 6
  },
  verifyButton : {
    width : 335,
    height : 36,
    borderRadius : 6,
    backgroundColor : swatch.secondaryColor,
    alignItems : "center",
    justifyContent : "center"
  },
  buttonText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 20,
    color : swatch.white,
    textAlign : "center"
  },
  inputTextView : {
    width : 335,
    height : 36,
    borderRadius : 6,
    backgroundColor : swatch.primaryGray,
    marginBottom : 15,
    alignItems : "center",
    flexDirection : "row"
  },
  line : {
    height          : 24,
    width           : 1,
    backgroundColor : swatch.ternaryGray,
    marginRight     : 5 
  },
  lineText : {
    marginRight : 10,
    marginLeft : 10
  },
  horizontalLine : {
    height : 2,
    width : 335,
    backgroundColor : swatch.borderColor,
    marginBottom : 14
  },
  verificationTextView : {
    flexDirection : "row",
    marginBottom : 14
  },
  secondText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 14,
    color : swatch.primaryColor,
    marginRight : 2
  },
  verificationMainView : {
    bottom : 0,
    position : "absolute",
    alignItems : "center"
  },
  firstText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 14,
    marginRight : 2
  },
  phoneNumber : {
    color : swatch.primaryColor
  },
  phoneNumberMainText : {
    marginBottom : 30
  },
  iconView : {
    position : "absolute",
    left : 15,
    top : 28,
    backgroundColor : swatch.primaryGray,
    borderRadius : 15,
    alignItems : "center",
    alignSelf : "center"
  },
  arrowleftIcon : {
    width : 25,
    height : 25
  },
  sentView : {
    marginTop : 36.5,
    borderRadius  : 6,
    backgroundColor : swatch.primaryBlack,
    alignItems : "center",
    width : 94,
    height : 24
  },
  sentText : {
    color : swatch.white,
    fontFamily : "AvenirNext-Medium",
    fontSize : 16
  }
});