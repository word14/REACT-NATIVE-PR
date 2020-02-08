import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    flex : 1,
    flexDirection : "column",
    backgroundColor : swatch.primaryGray
  },
  separator : {
    height : 10
  },
  bottomView : {
    height : 49.5,
    backgroundColor : swatch.white,
    borderTopWidth : 1,
    borderColor : swatch.primaryGray,
    flexDirection : "row"
  },
  continueView : {
    height : "100%",
    position : "absolute",
    right : 0,
    justifyContent : "center",
    backgroundColor : swatch.secondaryColor,
    paddingVertical : 14,
    paddingHorizontal : 29
  },
  continueText : {
    fontFamily : "AvenirNext-Medium",
    color : swatch.white,
    fontSize : 16,
    lineHeight : 22,
    textAlign : "center"
  },
  grandTotalQuantityView : {
    flex : 1,
    justifyContent : "space-evenly",
    flexDirection : "column",
    paddingLeft : 20,
    paddingVertical : 7
  },
  grandTotalText : {
    fontFamily : "AvenirNext-Medium",
    color : swatch.primaryBlack,
    fontSize : 14,
    lineHeight : 19,
    textAlign : "left"
  },
  quantityText : {
    fontSize : 10,
    lineHeight : 14,
    textAlign : "left",
    fontFamily : "AvenirNext-Medium",
    color : swatch.quaternaryGray
  },
  headerRestaurantNameText : {
    lineHeight : 25,
    fontFamily : "Futura-Medium",
    color : swatch.primaryBlack,
    fontSize : 18,
    textAlign : "left"
  },
  headerRestaurantCuisine : {
    marginTop : 3,
    lineHeight : 19,
    fontFamily : "AvenirNext-Medium",
    color : swatch.quaternaryGray,
    fontSize : 14,
    textAlign : "left"
  },
  headerRestaurantLocation : {
    marginTop : 3,
    lineHeight : 16,
    fontFamily : "AvenirNext-Medium",
    color : swatch.quaternaryGray,
    fontSize : 12,
    textAlign : "left"
  },
  headerView : {
    backgroundColor : swatch.white, 
    flex : 1, 
    flexDirection : "column", 
    paddingHorizontal : 20, 
    paddingTop : 11, 
    paddingBottom : 15
  }
});