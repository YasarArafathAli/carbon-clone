import { Col, Row } from 'antd';
import React from 'react';
import "./styles.scss"
import Co2e from '../../../../assets/icons/co2e.svg';
import Manufacturer from '../../../../assets/icons/manufacturer.svg';
import Brand from '../../../../assets/icons/brand_1.svg';
import Modal from '../../../../shared/components/Modal';
import ProductImg from "../../../../assets/images/product_img1.png"
type Props = {
  visible: boolean;
  closeModal: () => void 
};

const ProductInfoModal = ({ visible, closeModal }: Props) => {
  return (
    <Modal
    visible={visible}
    width={500}
    closeModal={closeModal}
    okText="View Product"
    cancelText="Cancel"
    >

    <div className="product-info-modal-wrapper ">
      <Row>
       <Col span={24} className="product-info" >
        <Row>
          <Col span={6}>
          <img className='product-img' src={ProductImg}  alt="" />
          </Col>
          <Col span={18}>
            <div className='product-title'>
              <h3>Canadian Drink</h3>
              <p className="emissions-info">
                  <span className='icon-co2e' />
                  <span className="card-info">
                    45 CO<sub>2</sub>e
                  </span>
                </p>
            </div>
          </Col>
        </Row>
        </Col>
        <div className="additional-info">
                <p>
                  <span className='icon-manufacturer' />
                  <span className="card-info">Brampton Manuf....nd Sales Centre</span>
                </p>
                <p>
                  <span className='icon-brand' />
                  <span className="card-info">Sprite</span>
                </p>
              </div>
        <Col  className="additional-title" span={24}>
          <h5>Additional information</h5>
        </Col>
       <Col className="additional-desc" span={24}>
          <p >Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam. Vestibulum at neque hendrerit, mollis dolor at, blandit justo. Integer ac interdum purus. In placerat lorem non quam pulvinar molestie ac eget lacus. Proin mollis lobortis porttitor. Nam in fringilla felis. Nunc non magna maximus, pulvinar justo ut, pulvinar lacus. Vivamus semper ex vel felis lobortis, nec feugiat erat pulvinar. Cras eu sem sed tellus sodales pellentesque nec id libero. Vestibulum tincidunt, ipsum vitae finibus tempus, orci mi iaculis lacus, id faucibus erat leo ac nisl. Nullam vel pulvinar nisi, ac fringilla urna.</p>
        </Col>
      </Row>
    </div>
    </Modal>
  );
};

export default ProductInfoModal;
