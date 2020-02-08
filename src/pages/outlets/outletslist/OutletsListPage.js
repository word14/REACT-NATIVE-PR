import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  FlatList,
  Image
}                                   from "react-native";
import PropTypes                    from "prop-types";
import OutletsListPresenter         from "./OutletsListPresenter";
import OutletsListStyle             from "./OutletsListStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
//custom component block
import OutletComponent              from "~/component/outletcontainer/OutletComponent";

class OutletsListPage extends Component {
  presenter                 = new OutletsListPresenter(this);

  static navigationOptions  = createNavigationOptions("For Dinner");
  static propTypes          = {
    navigation  : PropTypes.object
  };

  componentDidMount() {
    this.presenter.getOutlets();
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
    const { outletName, outlets }            = this.state;
    const { navigation }  = this.props;
    const dummiesData     = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ];
    return (
      <View style={OutletsListStyle.mainView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={outlets}
          ItemSeparatorComponent={() => {
            return <View style={OutletsListStyle.separator}/>;
          }}
          renderItem={({ item, index }) => {
            return <OutletComponent outletDetail={item} />;
          }}
        />
      </View>
    );
  }
}

export default Reducer.connect(OutletsListPage, OutletsListPresenter);