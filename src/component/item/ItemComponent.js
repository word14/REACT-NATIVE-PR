import React, { Component } from "react";
import { withNavigation }   from "react-navigation";
import  Reducer             from "~/core/Reducer";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
}                           from "react-native";
import PropTypes            from "prop-types";
import ItemPresenter        from "./ItemPresenter";
import ItemStyle            from "./ItemStyle";
import lang                 from "~/lang";

//icon
import plusIcon             from "@assets/plus-icon.png";
import minusIcon            from "@assets/minus-icon.png";
import swatch from "~/config/swatch";


class ItemComponent extends Component {
  presenter                 = new ItemPresenter(this);
  static propTypes          = {
    navigation  : PropTypes.object,
    useCartButton : PropTypes.bool
  };
  
  decideButtonType() {
    if(this.state.quantity > 0 || isNaN(this.state.quantity)) {
      return (
        <View style={ItemStyle.plusMinusView}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={ItemStyle.plusMinusButton}
            onPress={() => this.setState({ quantity : parseInt(this.state.quantity) - 1 })}
          >
            <Image source={minusIcon} style={ItemStyle.minusIcon}/>
          </TouchableOpacity>
          <TextInput 
            ref={ref => this.quantityInput = ref}
            style={ItemStyle.quantityInputText}
            value={isNaN(this.state.quantity) ? "" : this.state.quantity.toString()}
            onChangeText={(text) => {
              this.setState({ quantity : parseInt(text) });
            }
            }
            onEndEditing={({ nativeEvent }) => {
              nativeEvent.text == "" ? this.setState({ quantity : 0 }) : "";
            }}
          />
          <TouchableOpacity
            activeOpacity={0.85}
            style={ItemStyle.plusMinusButton}
            onPress={() => this.setState({ quantity : parseInt(this.state.quantity) + 1 })}
          >
            <Image source={plusIcon} style={ItemStyle.plusIcon}/>
          </TouchableOpacity>
        </View>
      );
    } else if(this.state.quantity === 0) {
      return (
        <TouchableOpacity 
          style={ItemStyle.addButtonView}
          activeOpacity={0.85}
          onPress={() => this.setState({ quantity : parseInt(this.state.quantity) + 1 })}
        >
          <Text style={ItemStyle.addText}>Add</Text>
        </TouchableOpacity>
      );
    }
  }

  render() {
    const { quantity }      = this.state;
    const { navigation, useCartButton }    = this.props;
    return (
      <View style={ItemStyle.mainView}>
        <Image style={ItemStyle.imageView} 
          source={{ uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG8spOEJFiGmcXAwZpd93JFg9_BlxOAdnJD-RmV0HwTET3tjqT" }}/>
        <View style={ItemStyle.contentView}>
          <Text style={ItemStyle.itemNameText}>Mayonnaise Shrimp</Text>
          {
            useCartButton ? 
              <View>
                <Text style={ItemStyle.itemPriceText}>89000</Text>
                {
                  this.decideButtonType()
                }          
              </View> : <View> 
                <Text style={ItemStyle.itemPriceText}>1 x 89000</Text>
              </View>
          }
        </View>
      </View>
    );
  }
}

export default Reducer.connect(withNavigation(ItemComponent), ItemPresenter);