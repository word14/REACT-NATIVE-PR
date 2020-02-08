import { StyleSheet, Dimensions } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    paddingTop : 25,
    flex : 1
  },
  textInputTitle : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 16,
    color : swatch.primaryBlack,
    marginBottom : 10,
    marginLeft : 20,
    marginRight : 20
  },
  textInputName : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 20,
    color : swatch.primaryBlack,
    borderBottomWidth : 1,
    borderColor : swatch.borderColor,
    marginBottom : 10,
    marginLeft : 20,
    marginRight : 20,
    paddingLeft : 10
  },
  textInputPhone : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 20,
    color : swatch.primaryBlack,
    marginBottom : 10,
    flex : 1
  },
  phoneNumberView : {
    flexDirection : "row",
    borderBottomWidth : 1,
    borderColor : swatch.borderColor,
    marginLeft : 20,
    marginRight : 20
  },
  textInputStatic : {
    marginRight : 20,
    marginLeft : 10,
    fontFamily : "AvenirNext-Medium",
    fontSize : 20,
    color : swatch.primaryBlack
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
  }
});