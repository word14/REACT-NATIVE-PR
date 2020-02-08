import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    // backgroundColor : swatch.secondaryColor,
    flex : 1,
    flexDirection : "row",
    paddingVertical : 15,
    paddingHorizontal : 20
  },
  imageContainer : {
    backgroundColor : "yellow"
  },
  informationContainer : {
    flex : 1,
    marginLeft : 20
  },
  restaurantNameText : {
    fontFamily : "Futura-Medium",
    fontSize : 16,
    lineHeight : 21,
    textAlign : "left",
    color : swatch.primaryBlack,
    marginBottom : 4
  },
  restaurantTypeText : {
    color : swatch.quaternaryGray,
    fontFamily : "AvenirNext-Medium",
    fontSize : 12,
    lineHeight : 16,
    textAlign : "left",
    marginBottom : 4
  },
  restaurantLocationText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 10,
    lineHeight : 14,
    textAlign : "left",
    color : swatch.quaternaryGray,
    marginBottom : 6
  },
  orderNowContainer : {
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "flex-end"
  },
  orderNowText : {
    color : swatch.secondaryColor,
    fontFamily : "AvenirNext-Medium",
    fontSize : 12,
    lineHeight : 16,
    marginRight : 5
  },
  orderNowIcon : {
    height : 12,
    width : 12
  }
});