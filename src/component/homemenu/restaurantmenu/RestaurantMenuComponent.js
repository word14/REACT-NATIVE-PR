import React, { Component } from "react";
import { withNavigation }   from "react-navigation";
import  Reducer             from "~/core/Reducer";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList
}                           from "react-native";
import PropTypes            from "prop-types";
import RestaurantMenuPresenter       from "./RestaurantMenuPresenter";
import RestaurantMenuStyle           from "./RestaurantMenuStyle";
import lang                 from "~/lang";
import ctaIcon              from "@assets/cta-icon.png";
import RestaurantMenuItemComponent from "~/component/homemenu/restaurantmenu/restaurantmenuitem/RestaurantMenuItemComponent";

class RestaurantMenuComponent extends Component {
  presenter                 = new RestaurantMenuPresenter(this);

  static propTypes          = {
    navigation  : PropTypes.object,
    menuData : PropTypes.object
  };

  render() {
    //const {}            = this.state;
    const { navigation, menuData }  = this.props;
    const temps = [
      {
        imageUrl : "https://drive.google.com/uc?id=1RUb0n1mIJwNrsZoIt_JAuCG55awcn-2Z"
      },
      {
        imageUrl : "https://drive.google.com/uc?id=1dFl2PDKyEWEbKnq4_2jYZ7V5j12LohII"
      },
      {
        imageUrl : "https://drive.google.com/uc?id=14aH1Rvegjc4x1aWJF7rdOrRVrSEIuvFB"
      },
      {
        imageUrl : "https://drive.google.com/uc?id=1w1Lj1UCiW6QN363Gj6lw6v2HkY78jJV1"
      }
    ];
    return (
      <View style={RestaurantMenuStyle.mainView}>
        <View style={RestaurantMenuStyle.headerView}>
          <Text style={RestaurantMenuStyle.headerText}>{menuData?.title}</Text>
          <TouchableOpacity style={RestaurantMenuStyle.seeMoreButton}>
            <Text style={RestaurantMenuStyle.seeMoreText}>{lang("home.restaurant_menu.see_more")}</Text>
            <Image source={ctaIcon} style={RestaurantMenuStyle.ctaIconImage} />
          </TouchableOpacity>
        </View>
        <Text style={RestaurantMenuStyle.secondaryHeaderText}>{menuData.subTitle}</Text>
        <FlatList 
          data={menuData?.outlets || []}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item, index) => `${index}`}
          // onScroll={e => this.scroll()}
          renderItem={
            ({ item }) => <RestaurantMenuItemComponent data={item}/>
          }
        />
      </View>
    );
  }
}

export default Reducer.connect(withNavigation(RestaurantMenuComponent), RestaurantMenuPresenter);