import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  modalView : {
    marginLeft    : 48,
    marginRight   : 48
  },
  mainView : {
    width                 : "100%",
    borderRadius          : 6,
    backgroundColor       : swatch.white
  },
  titleView : {
    paddingLeft           : 20,
    marginTop             : 20,
    marginBottom : 25
  },
  closeIcon : {
    fontSize              : 20,
    color                 : swatch.orange
  },
  titleText : {
    fontFamily  : "AvenirNext-Medium",
    fontSize    : 14
  }
});