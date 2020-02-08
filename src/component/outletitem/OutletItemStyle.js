import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    flex : 1,
    flexDirection : "column",
    backgroundColor : swatch.white
  },
  categoryNameText : {
    fontSize : 14,
    lineHeight : 19,
    textAlign : "left",
    paddingVertical : 10,
    fontFamily : "Futura-Medium",
    color : swatch.primaryBlack
  },
  categoryNameView : {
    paddingHorizontal : 20
  },
  separator : {
    height : 1, 
    backgroundColor : swatch.primaryGray
  }
  
  
});