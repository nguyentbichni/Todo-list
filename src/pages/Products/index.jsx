import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import history from '../../util/history';

import { getProductList } from '../../redux/actions';
import { Button } from 'react-bootstrap';

function Products(props) {
  const { productList, getList } = props;
  useEffect(() => {
    getList({
      page: 1,
      limit: 5,
    });
  }, []);

  const renderProductList = () => {
    return productList.map((product, productIndex) => (
      <>
      <li
        key={`product-${product.id}-${productIndex}`}
        className="list-group-item d-flex align-items-center justify-content-between"
      >
        <div>{product.name}</div>
        <button className="btn btn-outline-primary" onClick={() => history.push(`/product/${product.id}`)}>
          Chi tiết
        </button>
      </li>
    </>
    ))
  }
  return (
    <div className="p-4">
      Product List
      <ul className="list-group mt-2" style={{ width: 500 }}>
        {renderProductList()}
      </ul>
      <nav aria-label="Page navigation example">
      <ul className="pagination mt-5">
        <li  className="page-item"><Button className="page-link">Previous</Button></li>
        <li key="1" className="page-item"><Button className="page-link">1</Button></li>
        <li key="2" className="page-item"><Button className="page-link" id="2">2</Button></li>
        <li className="page-item"><Button className="page-link">Next</Button></li>
      </ul>
    </nav>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { productList } = state.productReducer;
  return {
    productList,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getList: (params) => dispatch(getProductList(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);