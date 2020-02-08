import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
  },  
  seeMoreButton : {
    flexDirection : "row",
    position : "absolute",
    right : 20,
    height : 16 
  },
  ctaIconImage : {
    width : 12,
    height : 12,
    marginTop : 2
  },
  headerText : {
    fontFamily : "Futura-Medium",
    fontSize : 16,
    color : swatch.primaryColor,
    lineHeight          : 16,
    includeFontPadding  : true,
    textAlignVertical   : "center"
  },
  seeMoreText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 12,
    color : swatch.secondaryColor,
    marginRight : 5
    // lineHeight          : 16,
    // includeFontPadding  : true,
    // textAlignVertical   : "center"
  },
  secondaryHeaderText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 12,
    color : swatch.primaryBlack,
    marginTop : 2,
    marginBottom : 10,
    marginLeft : 20
  },
  headerView : {
    marginTop : 31,
    marginLeft : 20
  }
});