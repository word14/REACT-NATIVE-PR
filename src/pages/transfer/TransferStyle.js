import { StyleSheet, Dimensions } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    alignItems : "center",
    flex : 1,
    paddingTop : 20
  },
  secondaryMain : {
    flex : 1
  },  
  balanceView : {
    borderBottomWidth : 1,
    borderBottomColor : swatch.borderColor,
    paddingBottom : 10,
    marginBottom : 10
  },
  balanceText : {
    fontFamily : "AvenirNext-Medium",
    fontSize   : 14
  },
  amountText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 14,
    position : "absolute",
    right : 0
  },
  amountTransferText: {
    fontFamily : "AvenirNext-Medium",
    fontSize : 16,
    marginBottom : 10
  },
  amountTransferTextInput: {
    fontSize : 40,
    fontFamily : "AvenirNext-DemiBold"
  },
  amountTransferView : {
    flexDirection : "row"
  },
  rpText : {
    fontSize : 40,
    fontFamily : "AvenirNext-DemiBold",
    color : swatch.secondaryGray
  },
  confirmButton : {
    backgroundColor : swatch.secondaryGray,
    alignItems : "center",
    height : 50,
    width : Dimensions.get("window").width,
    position : "absolute",
    bottom : 0
  },
  confirmText : {
    color : swatch.white,
    lineHeight          : 50,
    includeFontPadding  : true,
    textAlignVertical   : "center"
  }
});