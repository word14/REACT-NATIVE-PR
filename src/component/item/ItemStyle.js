import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    flex : 1, 
    flexDirection : "row", 
    backgroundColor : swatch.white 
  },
  imageView : { 
    height : 65, 
    width : 65, 
    borderRadius : 8 
  },
  contentView : {
    marginLeft : 15, 
    flex : 1, 
    flexDirection : "column", 
    backgroundColor : swatch.white
  },
  itemNameText : {
    fontFamily : "Futura-Medium",
    fontSize : 14,
    textAlign : "left",
    lineHeight : 19,
    color : swatch.primaryBlack,
    marginBottom : 4
  },
  itemPriceText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 12,
    textAlign : "left",
    lineHeight : 16,
    color : swatch.quaternaryGray,
    marginBottom : 5.5
  },
  plusMinusView : { 
    flex : 1, 
    flexDirection : "row", 
    height : 25, 
    alignSelf : "flex-end", 
    backgroundColor   : swatch.white,
    borderBottomWidth : 0,
    elevation         : 2,
    shadowColor       : swatch.primaryGray,
    shadowOffset      : {
      width           : 0,
      height          : 2
    },
    shadowRadius      : 2,
    shadowOpacity     : 1,
    width : 74
  },
  quantityInputText : { 
    flex : 1,
    width : 35,
    fontFamily : "AvenirNext-Medium",
    fontSize : 10,
    lineHeight : 14,
    textAlign : "center"
  },
  minusIcon : {
    width  : 9,
    height : 2
  },
  plusIcon : {
    width : 9, 
    height : 9 
  },
  addButtonView : { 
    flex : 1, 
    flexDirection : "row", 
    height : 25, 
    alignSelf : "flex-end", 
    alignItems : "center",
    backgroundColor   : swatch.secondaryColor,
    paddingHorizontal : 25,
    paddingTop :   4.25,
    paddingBottom : 4.5,
    borderRadius : 4,
    width : 74
  },
  addText : {
    color : swatch.white,
    fontSize : 12,
    lineHeight : 16,
    textAlign : "center",
    fontFamily : "AvenirNext-Medium"
  },
  plusMinusButton : {
    paddingHorizontal : 5, 
    alignContent : "center", 
    justifyContent : "center" 
  }
});