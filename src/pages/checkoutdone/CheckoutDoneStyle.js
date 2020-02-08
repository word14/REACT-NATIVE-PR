import { StyleSheet } from "react-native";
import swatch         from "~/config/swatch";

export default StyleSheet.create({

  mainView : {
    flex : 1,
    flexDirection : "column"
  },
  doneText : {
    marginTop : 133.5,
    marginBottom : 33.5,
    textAlign : "center",
    fontSize : 30,
    lineHeight : 39,
    fontFamily : "Futura-Bold",
    color : swatch.primaryGreen
  },
  doneIcon : {
    alignSelf : "center",
    width : 216.3,
    height : 216.3,
    marginBottom : 33.4
  },
  informationText : {
    marginHorizontal : 80,
    fontSize : 16,
    lineHeight : 22,
    textAlign : "center",
    fontFamily : "AvenirNext-Medium",
    color : swatch.primaryBlack
  },
  backToHomeButton : {
    height : 50,
    backgroundColor : swatch.secondaryColor,
    alignItems : "center",
    justifyContent : "center"
  },
  backToHomeText : {
    color : swatch.white,
    fontSize : 16,
    lineHeight : 22,
    fontFamily : "AvenirNext-Medium"
  }
});