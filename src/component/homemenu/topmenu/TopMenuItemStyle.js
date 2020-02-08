import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    flexDirection : "row",
    justifyContent : "space-between",
    marginTop : 15.5,
    marginRight : 20,
    marginLeft : 20
  },
  topMenuButton : {
    backgroundColor : swatch.primaryGray,
    borderRadius : 16,
    width : 60,
    height : 60,
    padding : 19
  },
  topMenuImage : {
    width : 22,
    height : 22
  },
  topMenuText : {
    marginTop : 5,
    fontFamily : "AvenirNext-Medium",
    fontSize : 14,
    color : swatch.primaryBlack,
    textAlign : "center"
  }
});