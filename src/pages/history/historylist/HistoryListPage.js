import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  FlatList
}                                   from "react-native";
import PropTypes                    from "prop-types";
import HistoryListPresenter       from "./HistoryListPresenter";
import HistoryListStyle           from "./HistoryListStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";

//component
import TransactionComponent from "~/component/history/transactionlist/TransactionComponent";

class HistoryListPage extends Component {
  presenter                 = new HistoryListPresenter(this);

  static navigationOptions  = createNavigationOptions("History");
  static propTypes          = {
    navigation  : PropTypes.object
  };

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
    const { navigation }  = this.props;
    const dummiesData     = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ];

    return (
      <View style={HistoryListStyle.mainView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          data={dummiesData}
          ItemSeparatorComponent={() => {
            return <View style={HistoryListStyle.separator}/>;
          }}
          renderItem={({ item, index }) => {
            return <TransactionComponent />;
          }}
        />
      </View>
    );
  }
}

export default Reducer.connect(HistoryListPage, HistoryListPresenter);