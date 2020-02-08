import  Presenter          from "~/core/Presenter";

export default class CheckoutPresenter extends Presenter {

  static CHECKOUT_COMPONENT = {
    ORDER_ITEM   : "order_item",
    ORDER_ADDITIONAL_INFORMATION : "order_note",
    GRAND_TOTAL : "grand_total"
  }

  constructor(component) {
    super(component);
    component.state = {};
  }

  static mapDispatchToProps(dispatch) {
    return {};
  }

  static mapStateToProps(state) {
    return {};
  }

  getCheckoutComponent() {
    return [
      CheckoutPresenter.CHECKOUT_COMPONENT.ORDER_ITEM,
      CheckoutPresenter.CHECKOUT_COMPONENT.ORDER_ADDITIONAL_INFORMATION,
      CheckoutPresenter.CHECKOUT_COMPONENT.GRAND_TOTAL
    ];
  }
}