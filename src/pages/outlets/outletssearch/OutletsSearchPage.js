import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity
}                                     from "react-native";
import PropTypes                      from "prop-types";
import OutletsSearchPresenter         from "./OutletsSearchPresenter";
import OutletsSearchStyle             from "./OutletsSearchStyle";
import { 
  createNavigationOptions, 
  createCustomNavigationOptions 
}                                     from "~/helper/NavigatorHelper";
import lang                           from "~/lang";
//custom component block
import OutletComponent                from "~/component/outletcontainer/OutletComponent";
import SearchIcon                     from "@assets/search-icon.png";

class OutletsListPage extends Component {
  presenter                 = new OutletsSearchPresenter(this);

  static navigationOptions  = createCustomNavigationOptions(
    navigation => {
      return (
        <View style={OutletsSearchStyle.searchView}>
          <TouchableOpacity 
            style={OutletsSearchStyle.touchView} 
            activeOpacity={1} 
            onPress={() => this.searchTextInput.focus()}
          >
            <Image source={SearchIcon} style={OutletsSearchStyle.searchIcon}/>
          </TouchableOpacity>
          <TextInput
            ref={ref => this.searchTextInput = ref}
            placeholder={"Search Restaurant"}
            style={OutletsSearchStyle.searchTextInput}
            onChangeText={navigation.getParam("onChangeText", () => {})}
          >
          </TextInput>
        </View>
      );
    },
    () => ({
      headerRight : null
    })
  );

  static propTypes          = {
    navigation  : PropTypes.object
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackButtonPressed.bind(this));
    this.presenter.getOutlets();
    this.props.navigation.setParams({ onChangeText : (value) => this.presenter.getOutlets(value) });
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
    const { outlets }             = this.state;
    const { navigation }          = this.props;

    return (
      <View style={OutletsSearchStyle.mainView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={outlets}
          ItemSeparatorComponent={() => {
            return <View style={OutletsSearchStyle.separator}/>;
          }}
          renderItem={({ item, index }) => {
            return <OutletComponent outletDetail={item} />;
          }}
        />
      </View>
    );
  }
}

export default Reducer.connect(OutletsListPage, OutletsSearchPresenter);