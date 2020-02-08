import React, { Component }         from "react";
import  Reducer                     from "~/core/Reducer";
import {
  BackHandler,
  View,
  Text,
  FlatList
}                                   from "react-native";
import PropTypes                    from "prop-types";
import HistoryDetailPresenter       from "./HistoryDetailPresenter";
import HistoryDetailStyle           from "./HistoryDetailStyle";
import { createNavigationOptions }  from "~/helper/NavigatorHelper";
import lang                         from "~/lang";
//componenet
import GrandTotalComponent          from "~/component/grandtotal/GrandTotalComponent";
import OrderItemComponent       from "~/component/orderitem/OrderItemComponent";

class HistoryDetailPage extends Component {
  presenter                 = new HistoryDetailPresenter(this);

  static navigationOptions  = createNavigationOptions("Title");
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
    //const {}            = this.state;
    const { navigation }  = this.props;
    return (
      <FlatList
        style={HistoryDetailStyle.mainView}
        ItemSeparatorComponent={() => 
          <View style={HistoryDetailStyle.separator}/>
        }
        data={this.presenter.getHistoryDetailComponent()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          if(item == HistoryDetailPresenter.HISTORY_DETAIL_COMPONENT.ORDER_HEADER) {
            return (
              <View style={HistoryDetailStyle.transactionIdView}>
                <View style={HistoryDetailStyle.rowView}>
                  <Text style={HistoryDetailStyle.transactionIdText}>ORD-1234</Text>
                  <Text style={HistoryDetailStyle.dateText}>15 Januari 2015</Text>
                </View>
              </View>
            );
          } else if(item == HistoryDetailPresenter.HISTORY_DETAIL_COMPONENT.ORDER_ITEM) {
            return <OrderItemComponent useCartButton={false}/>;
          } else if(item == HistoryDetailPresenter.HISTORY_DETAIL_COMPONENT.ORDER_ADDITIONAL_INFORMATION) {
            return (
              <View style={HistoryDetailStyle.extraNoteView}>
                <Text style={HistoryDetailStyle.noteText}>{lang("history.detail.note")}</Text>
                <Text style={{ ...HistoryDetailStyle.noteText, marginTop : 5 }}>Please add</Text>
                <View style={HistoryDetailStyle.thinSeparator}/>
                <View style={HistoryDetailStyle.rowView}>
                  <Text style={HistoryDetailStyle.noteText}>{lang("history.detail.dine_in")}</Text>
                  <Text style={HistoryDetailStyle.dineInStatusText}>Yes</Text>
                </View>
              </View>);
          } else if(item == HistoryDetailPresenter.HISTORY_DETAIL_COMPONENT.GRAND_TOTAL) {
            return <GrandTotalComponent/>;
          }
        }}
      />
    );
  }
}

export default Reducer.connect(HistoryDetailPage, HistoryDetailPresenter);