import React, { Component } from "react";
import { 
  View,
  Text,
  TouchableOpacity
}                           from "react-native";
import { Icon }             from "react-native-elements";
import Modal                from "react-native-modal";
import PropTypes            from "prop-types";
import ModalStyle           from "./ModalStyle";

export default class ModalComponent extends Component {

  static propTypes = {
    children  : PropTypes.any,
    title     : PropTypes.string,
    visible   : PropTypes.bool,
    onClose   : PropTypes.func,
    onDismiss : PropTypes.func
  };

  render() {
    const {
      children,
      title,
      visible,
      onClose,
      onDismiss
    } = this.props;
    return (
      <Modal
        isVisible={visible}
        onBackButtonPress={onClose}
        onBackdropPress={onClose}
        onDismiss={onDismiss}
        // onSwipe={onClose}
        style={ModalStyle.modalView}
        // swipeDirection="down"
      >
        <View style={ModalStyle.mainView}>
          <View style={ModalStyle.titleView}>
            <Text style={ModalStyle.titleText}>{title}</Text>
            <TouchableOpacity onPress={onClose} activeOpacity={1} />
          </View>
          {children}
        </View>
      </Modal>
    );
  }
}