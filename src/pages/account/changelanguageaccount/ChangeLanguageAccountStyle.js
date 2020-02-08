import { StyleSheet, Dimensions } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    flex : 1
  },
  secondView : {
    flexDirection : "row",
    paddingLeft : 20
  },
  thirdView : {
    flexDirection : "row",
    height : 50,
    flex : 1,
    borderBottomWidth : 1,
    borderColor : swatch.borderColor
  },  
  languageIconImage : {
    width : 16.1,
    height : 16.1,
    marginRight : 15,
    marginTop : 17
  },
  checkIconImage : {
    top : 17,
    position : "absolute",
    width : 16.1,
    height : 16.1,
    right : 15
  },
  changeLanguageText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 16,
    color : swatch.primaryBlack,
    lineHeight          : 50,
    includeFontPadding  : true,
    textAlignVertical   : "center"
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