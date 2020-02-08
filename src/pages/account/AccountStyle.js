import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    paddingLeft : 20,
    paddingTop : 20
  },
  iconImage : {
    width : 16,
    height : 16
  },  
  accountBackgroundView : {
    backgroundColor : swatch.primaryColor,
    width : 335,
    height : 75,
    borderRadius : 8,
    flexDirection : "row",
    paddingTop : 10,
    paddingLeft : 15,
    marginRight : 20,
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
  },
  editMainView : {
    flexDirection : "row",
    height : 50,
    paddingTop : 16
  },
  editView : {
    borderBottomWidth : 1,
    borderBottomColor : swatch.borderColor,
    marginLeft : 15,
    flex : 1
  },
  editText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 16,
    color : swatch.primaryBlack
  },
  versionText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 12,
    color : swatch.secondaryGray,
    marginTop : 26
  },
  mainViewModal : {
    flexDirection : "row",
    justifyContent : "space-between",
    paddingLeft : 20,
    marginBottom : 15
    // paddingRight : 20
  },
  noButton : {
    width : 120,
    height : 30,
    backgroundColor : swatch.semiWhite,
    borderRadius : 6,
    marginRight : 5,
    alignItems : "center"
  },
  yesButton : {
    width : 120,
    height : 30,
    backgroundColor : swatch.secondaryColor,
    borderRadius : 6,
    marginRight : 20,
    alignItems : "center"
  },
  noText : {
    lineHeight          : 30,
    includeFontPadding  : true,
    textAlignVertical   : "center",
    color : swatch.secondaryColor,
    fontSize : 16,
    fontFamily : "AvenirNext-Medium"
  },
  yesText : {
    lineHeight          : 30,
    includeFontPadding  : true,
    textAlignVertical   : "center",
    color : swatch.white,
    fontSize : 16,
    fontFamily : "AvenirNext-Medium"
  }
});