import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({

  mainView : {
    flex : 1, 
    flexDirection : "column", 
    backgroundColor : swatch.primaryGray
  },
  payButton : {
    height  : 50,
    backgroundColor : swatch.secondaryColor,
    justifyContent : "center"
  },
  payText : {
    fontSize :  16,
    fontFamily : "AvenirNext-Medium",
    lineHeight : 22,
    color : swatch.white,
    textAlign : "center"
  },
  separator : {
    height : 10
  },
  extraNoteView : {
    flex : 1,
    paddingTop : 15,
    paddingHorizontal : 20,
    paddingBottom : 10,
    backgroundColor : swatch.white
  },
  noteTextInput : {
    backgroundColor : swatch.primaryGray,
    borderRadius : 6,
    minHeight : 68,
    flex : 1,
    paddingVertical : 5,
    paddingHorizontal : 10,
    fontSize : 14,
    lineHeight : 19,
    fontFamily : "AvenirNext-Medium"
  },
  rowView : {
    flex : 1, 
    flexDirection : "row",
    marginTop : 10,
    alignItems : "center"
  },
  dineInText : {
    flex : 1,
    fontFamily : "AvenirNext-Medium",
    fontSize : 14,
    textAlign : "left",
    lineHeight : 19,
    color : swatch.primaryBlack
  },
  switchButton : {
    flex : 1,
    alignItems : "flex-end"
  }
});