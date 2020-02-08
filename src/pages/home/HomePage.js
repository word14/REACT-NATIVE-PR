import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform
}                                   from "react-native";
import PropTypes                    from "prop-types";
import HomePresenter                from "./HomePresenter";
import HomeStyle                    from "./HomeStyle";
import { 
  createNavigationOptions,
  createBottomTabBarItem 
}                                   from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
import TopMenuItemComponent         from "~/component/homemenu/topmenu/TopMenuItemComponent";
import Carousel                     from "react-native-snap-carousel";
import RestaurantMenuComponent      from "~/component/homemenu/restaurantmenu/RestaurantMenuComponent";
import { ScrollView }               from "react-native-gesture-handler";
import homeIcon                     from "@assets/home-icon.png";
import activeHomeIcon               from "@assets/active-home-icon.png";
import smallLogo                    from "@assets/small-logo.png";
import balanceIcon                  from "@assets/balance-icon.png";

class HomePage extends Component {
  presenter                 = new HomePresenter(this);

  static propTypes          = {
    navigation  : PropTypes.object
  };

  componentDidMount() {
  //   BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
    this.presenter.getData();
  }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
  // }

  // onBackButtonPressed() {
  //   const { navigation } = this.props;
  //   navigation?.pop();
  //   return true;
  // }

  static navigationOptions = createNavigationOptions(
    "",
    navigation => ({
      headerLeft      : <Image style={HomeStyle.smallLogoImage} resizeMode="contain" source={smallLogo}/>,
      headerRight     : (
        <View style={HomeStyle.balanceView}>
          <Image style={HomeStyle.balanceIconImage} source={balanceIcon}/>
          <Text style={HomeStyle.balanceText}>Rp 1.000.000</Text>
        </View>
      ),
      ...createBottomTabBarItem({
        inactiveImage : homeIcon,
        activeImage   : activeHomeIcon,
        label         : lang("main.home")
      })
    })
  );

  // scroll() {
  //   if(this.props.hasLoaded) {
  //     clearTimeout(this.timeout);
  //     this.setState(
  //       { shoppingBenefitComponentScrolled : true },
  //       () => {
  //         this.timeout = setTimeout(
  //           () => {
  //             this.setState({ shoppingBenefitComponentScrolled : false });
  //           },
  //           500
  //         );
  //       }
  //     );
  //   }
  // }

  render() {
    //const {}            = this.state;
    const { navigation }  = this.props;
    const { width } = Dimensions.get("window");
    const { homeBannerData, homeCategoryData } = this.state;
    // const banner = [
    //   {
    //     imageUrl : "https://drive.google.com/uc?id=1AHwqlKoB-wNdfYVed5twFT0jmXCLJkd_"
    //   },
    //   {
    //     imageUrl : "https://drive.google.com/uc?id=1NutHffmwFkvuFcsMtGZuqiS977aLcrjR"
    //   }
    // ];
    return (
      <View>
        <ScrollView>
          <TopMenuItemComponent/>
          <Carousel
            data={homeBannerData || []}
            sliderWidth={width}
            itemWidth={HomeStyle.slideStyle.width + (HomeStyle.slideStyle.marginHorizontal * 2)}
            slideStyle={HomeStyle.slideStyle}
            inactiveSlideOpacity={0.3}
            inactiveSlideScale={1}
            enableMomentum={false}
            renderItem={
              ({ item }) => <Image style={HomeStyle.slideImage} source={{ uri : item?.data?.fullpath }}/>
            }
          />
          {
            homeCategoryData?.map((item, index) => <RestaurantMenuComponent key={index} menuData={
              {
                title : item?.name,
                subTitle : lang("home.restaurant_menu.bring"),
                outlets : item?.outlets
              }
            }/>)
          }
        </ScrollView>
      </View>
    );
  }
}

export default Reducer.connect(HomePage, HomePresenter);