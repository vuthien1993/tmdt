import ModalHome from "./ModalHome";
import convertMoney from "../../convertMoney";
import { Link } from "react-router-dom";

import "./PopUpDetail.css";
function PopUpDetail(props) {
  return (
    <ModalHome>
      <div className="popup">
        <button class="close-modal" onClick={props.dataDetail.hidenPopUp}>
          &times;
        </button>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6">
              <img src={props.dataDetail.img} alt="img error" />
            </div>
            <div className="col-md-6 col-sm-6 bt2">
              <h5>{props.dataDetail.name}</h5>
              <p>{convertMoney(props.dataDetail.price)} VND</p>
              <p className="scroll">{props.dataDetail.short_desc}</p>
              <button onClick={props.dataDetail.hidenPopUp}>
                <Link to={`/detail/${props.dataDetail.id.$oid}`}>
                  <i className="fa fa-shopping-cart" />
                  <span>View Detail</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </ModalHome>
  );
}

export default PopUpDetail;
