import { StyleSheet, Dimensions } from "react-native";
import swatch         from "~/config/swatch";


const { width } = Dimensions.get("window");
export default StyleSheet.create({
  mainView : {
    flexDirection : "column",
    flex : 1,
    alignItems : "center"
  },
  qrcodeView: {
    padding : 20,
    borderRadius : 15,
    borderWidth : 1,
    borderColor : swatch.borderColor,
    elevation         : 2,
    shadowColor       : swatch.primaryBlack,
    shadowOffset      : {
      width           : 0,
      height          : 2
    },
    shadowRadius      : 10,
    shadowOpacity     : 0.6,
    backgroundColor : swatch.white,
    marginTop : width/4
  },
  stepView : {
    marginTop : width/6,
    marginLeft : 20,
    marginLeft : -30
  },
  firstStepView : {
    flexDirection : "row",
    marginBottom : 10
  },
  stepText : {
    fontFamily : "AvenirNext-Medium",
    fontSize : 16,
    color : swatch.black,
    marginBottom : 10
  },
  smallPayIconImage : {
    width : 11.9,
    height : 18
  },
  payText: {
    fontFamily : "AvenirNext-Medium",
    fontSize : 16,
    color : swatch.secondaryColor
  }
});