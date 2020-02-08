import React                        from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";

import HomePage                 from "~/pages/home/HomePage";
import ProfilePage                  from "~/pages/profile/ProfilePage";
import RegisterPage                 from "~/pages/register/RegisterPage";
import PinPage                      from "~/pages/register/pin/PinPage";
import ConfirmationPinPage          from "~/pages/register/confirmation_pin/ConfirmationPinPage";
import LoginPage                from "~/pages/login/LoginPage";
import VerificationOtpPage      from "~/pages/login/verificationotp/VerificationOtpPage";
import OutletsListPage          from "~/pages/outlets/outletslist/OutletsListPage";
import OutletsSearchPage        from "~/pages/outlets/outletssearch/OutletsSearchPage";
import CheckoutDonePage         from "~/pages/checkoutdone/CheckoutDonePage";
import AccountPage              from "~/pages/account/AccountPage";
import HistoryListPage          from "~/pages/history/historylist/HistoryListPage";
import HistoryDetailPage        from "~/pages/history/historydetail/HistoryDetailPage";
import EditAccountPage          from "~/pages/account/editaccount/EditAccountPage";
import ChangeLanguageAccountPage from "~/pages/account/changelanguageaccount/ChangeLanguageAccountPage";
import EnterPinPage             from "~/pages/account/enterpin/EnterPinPage";
import CheckoutPage             from "~/pages/checkout/CheckoutPage";
import DonePage                 from "~/pages/done/DonePage";
import PayPage                  from "~/pages/pay/PayPage";
import TransferPage             from "~/pages/transfer/TransferPage";
import MyQrPage                 from "~/pages/myqr/MyQrPage";
import OutletDetailPage         from "~/pages/outletdetail/OutletDetailPage";
import OrderPage                from "~/pages/order/OrderPage";

export const config = {
  initialRouteName : "LoginPage"
};

const MainPage     = {
  HomePage,
  OrderPage,
  AccountPage
};

export const route = {
  MainPage : {
    screen            : createBottomTabNavigator(MainPage),
    navigationOptions : ({ navigation }) => {
      const currentRoute = navigation.state.routes[navigation.state.index];
      return MainPage[currentRoute.key].navigationOptions({ navigation });
    }
  },
  RegisterPage,
  LoginPage,
  VerificationOtpPage,
  OutletsListPage,
  CheckoutDonePage,
  AccountPage,
  OutletsSearchPage,
  HistoryListPage,
  HistoryDetailPage,
  EditAccountPage,
  ChangeLanguageAccountPage,
  CheckoutPage,
  OutletDetailPage,
  EnterPinPage,
  DonePage,
  PayPage,
  TransferPage,
  MyQrPage,
  PinPage,
  ConfirmationPinPage
};
 
