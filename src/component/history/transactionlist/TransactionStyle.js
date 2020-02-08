import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    flex : 1,
    flexDirection : "column",
    paddingHorizontal : 20,
    paddingVertical : 10
  },
  rowView : {
    flex : 1,
    flexDirection : "row"
  },
  transactionTypeText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 14,
    lineHeight : 19,
    color : swatch.primaryBlack,
    textAlign : "left"
  },
  transactionValueText : {
    right : 0,
    position : "absolute",
    fontSize : 14, 
    lineHeight : 19,
    fontFamily : "AvenirNext-Medium"
  },
  grayText : {
    marginTop : 4,
    fontSize : 12,
    fontFamily : "AvenirNext-Medium",
    color : swatch.quaternaryGray,
    textAlign : "left"
  },
  seeMoreContainer : {
    flexDirection : "row",
    alignItems : "center",
    right : 0,
    position : "absolute"
  },
  seeMoreText : {
    fontSize : 12,
    lineHeight : 16,
    fontFamily : "AvenirNext-Medium",
    color : swatch.secondaryColor,
    marginRight : 5
  },  
  seeMoreIcon : {
    height : 12,
    width : 12
  }

});