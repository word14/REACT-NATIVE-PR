import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    alignItems  : "center",
    flex        : 1
  },  
  titleText : {
    fontFamily  : "Futura-Bold",
    fontSize    : 30,
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
  loginButton : {
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
  registerTextView : {
    flexDirection : "row",
    marginBottom : 14
  },
  secondText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 14,
    color : swatch.primaryColor
  },
  registerMainView : {
    bottom : 0,
    position : "absolute",
    alignItems : "center"
  },
  firstText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 14,
    marginRight : 2
  }
});