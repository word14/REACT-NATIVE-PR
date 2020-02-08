import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({
  mainView : {
    marginLeft : 20
  },
  itemImage : {
    width : 120,
    height : 120,
    borderRadius : 8
  },
  restaurantName : {
    fontFamily : "Futura-Medium",
    fontSize : 12,
    color : swatch.primaryBlack,
    marginTop : 5
  },
  restaurantCategory : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 10,
    color : swatch.quaternaryGray,
    marginTop : 2
  },
  restaurantLocation : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 8,
    color : swatch.quaternaryGray,
    marginTop : 2
  }
});