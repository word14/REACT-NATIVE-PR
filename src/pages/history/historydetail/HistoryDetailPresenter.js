import  Presenter          from "~/core/Presenter";

export default class HistoryDetailPresenter extends Presenter {

  static HISTORY_DETAIL_COMPONENT = {
    ORDER_HEADER : "order_id",
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

  getHistoryDetailComponent() {
    return [
      HistoryDetailPresenter.HISTORY_DETAIL_COMPONENT.ORDER_HEADER,
      HistoryDetailPresenter.HISTORY_DETAIL_COMPONENT.ORDER_ITEM,
      HistoryDetailPresenter.HISTORY_DETAIL_COMPONENT.ORDER_ADDITIONAL_INFORMATION,
      HistoryDetailPresenter.HISTORY_DETAIL_COMPONENT.GRAND_TOTAL
    ];
  }
}