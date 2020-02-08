import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    flex : 1,
    paddingHorizontal : 20,
    paddingVertical : 10,
    backgroundColor : swatch.white
  },
  rowView : {
    flex : 1,
    flexDirection : "row"
  },
  grandTotalText : {
    fontFamily : "AvenirNext-Bold",
    fontSize : 16,
    lineHeight : 22,
    color : swatch.primaryBlack,
    textAlign : "left"
  },
  grandTotalAmountText : {
    fontFamily : "AvenirNext-Bold",
    fontSize : 16,
    lineHeight : 22,
    color : swatch.primaryBlack,
    right : 0,
    position : "absolute"
  }
});