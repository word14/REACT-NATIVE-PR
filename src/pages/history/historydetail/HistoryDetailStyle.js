import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    flex : 1, 
    flexDirection : "column",
    backgroundColor : swatch.primaryGray
  },
  transactionIdView : {
    flex : 1,
    paddingHorizontal : 20,
    paddingVertical : 12,
    backgroundColor : swatch.white
  },
  transactionIdText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 14,
    lineHeight : 19,
    textAlign : "left",
    color : swatch.quaternaryGray
  },
  dateText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 14,
    lineHeight : 19,
    color : swatch.quaternaryGray,
    right : 0,
    position : "absolute"
  },
  separator : {
    height : 10
  },
  rowView : {
    flex : 1, 
    flexDirection : "row"
  },
  extraNoteView : {
    flex : 1, 
    paddingTop : 15, 
    paddingBottom : 13, 
    paddingLeft : 20, 
    paddingRight : 20, 
    backgroundColor : swatch.white
  },
  thinSeparator : {
    height : 1, 
    marginTop : 15, 
    marginBottom : 13, 
    flex : 1, 
    backgroundColor : swatch.primaryBlack 
  },
  noteText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 14,
    textAlign : "left",
    lineHeight : 19,
    color : swatch.primaryBlack
  },
  dineInStatusText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 14,
    lineHeight : 19,
    color : swatch.primaryBlack,
    right : 0,
    position : "absolute"
  }
 
});