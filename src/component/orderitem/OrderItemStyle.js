import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    paddingHorizontal : 20, 
    paddingVertical : 15, 
    flex : 1, 
    flexDirection : "column", 
    backgroundColor : swatch.white
  },
  separator : {
    height : 15,
    backgroundColor : "white"
  }
});