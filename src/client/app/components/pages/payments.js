import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { updateRequest } from '../../actions/userActions';

class PaymentsPageObject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
	    <button onClick={()=>{this.props['CreateGame'](this.props.initialRequest);}}>Create Game</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialRequest: state.initialRequest,
    session: state.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
	CreateGame: (request) => {
      dispatch(updateRequest(null, request));
    }
  };
};

const Payments = connect(mapStateToProps, mapDispatchToProps)(PaymentsPageObject);

export default Payments;
