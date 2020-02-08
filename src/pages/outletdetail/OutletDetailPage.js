import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  Image,
  Dimensions,
  FlatList
}                                   from "react-native";
import ParallaxScrollView           from "react-native-parallax-scroll-view";
import PropTypes                    from "prop-types";
import OutletDetailPresenter        from "./OutletDetailPresenter";
import OutletDetailStyle            from "./OutletDetailStyle";
import { 
  createNavigationOptions, 
  defaultHeaderStyle 
}                                   from "~/helper/NavigatorHelper";
import lang                         from "~/lang";

//component
import OutletItemComponent          from "~/component/outletitem/OutletItemComponent";
import swatch                       from "~/config/swatch";
import { StyleSheet }               from "react-native";
import ArrowLeftIcon                from "@assets/arrow-left.png";


class OutletDetailPage extends Component {
  presenter                 = new OutletDetailPresenter(this);

  static navigationOptions  = {
    header : null
  };
  static propTypes          = {
    navigation  : PropTypes.object
  };

  static PARALLAX_HEADER_HEIGHT = 165;

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
  }

  onBackButtonPressed() {
    const { navigation } = this.props;
    navigation?.pop();
    return true;
  }

  render() {
    const window = Dimensions.get("window");
    //const {}            = this.state;
    const { navigation }  = this.props;
    return (
      <View style={OutletDetailStyle.mainView}>
        <ParallaxScrollView
          headerBackgroundColor="#333"
          backgroundColor={swatch.primaryGray}
          stickyHeaderHeight={defaultHeaderStyle.height}
          contentBackgroundColor={swatch.primaryGray}
          parallaxHeaderHeight={OutletDetailPage.PARALLAX_HEADER_HEIGHT}
          renderStickyHeader={() => (
            <View style={
              { ...defaultHeaderStyle, 
                justifyContent : "center"
              }
            }>
              <Text 
                style={
                  { 
                    textAlign : "center", 
                    marginTop : 15.5, 
                    fontSize : 16, 
                    fontFamily : "Futura-Medium", 
                    lineHeight : 21, 
                    color : swatch.primaryBlack 
                  }
                }>Penang Bistro</Text>
            </View>
          )}
          renderBackground={() => {
            return <View key="background">
              <Image source={{ uri : "https://i.ytimg.com/vi/P-NZei5ANaQ/maxresdefault.jpg",
                width : window.width,
                height : OutletDetailPage.PARALLAX_HEADER_HEIGHT }}/>
            </View>; 
          }}
          renderFixedHeader={() => (
            <View style={{ position : "absolute" }}>
              <View
                style={
                  { marginTop : 17.5,
                    width : window.width, 
                    height : "100%",
                    flexDirection : "row", 
                    justifyContent : "space-between", 
                    paddingHorizontal : 22,
                    alignItems : "center",
                    paddingBottom : 17
                    //   backgroundColor : swatch.secondaryColor

                  // backgroundColor : "yellow"
                  }}>
                <Image source={ArrowLeftIcon} resizeMode="contain" style={{ width : 16, height : 16, alignSelf : "center" }}/>
                {/* <Text style={styles.fixedSectionText}>
                Right
                </Text> */}
              </View>
            </View>
          )}
        >
          <FlatList
            ListHeaderComponent={() => {
              return <View><View style={OutletDetailStyle.headerView}>
                <Text style={OutletDetailStyle.headerRestaurantNameText}>Penang Bistro</Text>
                <Text style={OutletDetailStyle.headerRestaurantCuisine}>Malaysian Food</Text>
                <Text style={OutletDetailStyle.headerRestaurantLocation}>Tanjung Duren, Jakarta Barat</Text>
              </View><View style={OutletDetailStyle.separator}/></View>;
            }}
            data={[ "Best Sellers", "Appetizer & Soup", "Recommended in Town" ]}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => 
              <View style={OutletDetailStyle.separator}/>
            }
            renderItem={({ item, index }) => {
              return <OutletItemComponent categoryName={item}/>;
            }}  
          />
        </ParallaxScrollView>
        <View style={OutletDetailStyle.bottomView}>
          <View style={OutletDetailStyle.grandTotalQuantityView}>
            <Text style={OutletDetailStyle.grandTotalText}>800000000</Text>
            <Text style={OutletDetailStyle.quantityText}>2 items</Text>
          </View>
          <View style={OutletDetailStyle.continueView}>
            <Text style={OutletDetailStyle.continueText}>Continue</Text>
          </View>
        </View>
      </View>
        

    );
  }
}



export default Reducer.connect(OutletDetailPage, OutletDetailPresenter);

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "black"
  },
  background : {
    position : "absolute",
    top : 0,
    left : 0,
    width : window.width,
    height : OutletDetailPage.PARALLAX_HEADER_HEIGHT
  },
  stickySection : {
    height : 60,
    width : 300,
    justifyContent : "flex-end"
  },
  stickySectionText : {
    color : swatch.black,
    fontSize : 20,
    margin : 10
  },

  fixedSectionText : {
    color : "#999",
    fontSize : 20
  },
  parallaxHeader : {
    alignItems : "center",
    flex : 1,
    flexDirection : "column",
    paddingTop : 100
  },
  sectionSpeakerText : {
    color : "white",
    fontSize : 24,
    paddingVertical : 5
  },
  sectionTitleText : {
    color : "white",
    fontSize : 18,
    paddingVertical : 5
  },
  rowText : {
    fontSize : 20
  }
});

