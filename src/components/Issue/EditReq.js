import React, { Component } from 'react'  
import _ from 'lodash';
import { connect } from 'react-redux';
import { getRequest, editRequests } from '../../actions/requests';
// import PropTypes from "prop-types";
import RequestForm from './RequestForm';

export class EditReq extends Component {
    

    componentDidMount() {
        this.props.getRequest(this.props.match.params.id);
      }
    onSubmit = formValues => {
        this.props.editRequests(this.props.match.params.id, formValues);
    };  
    render() {
        return (
            <div className='ui container'>
                <h2 style={{ marginTop: '2rem' }}>Edit Request Section</h2>
                <RequestForm
                initialValues={_.pick(this.props.request, 'status')}                
                enableReinitialize={true}
                onSubmit={this.onSubmit}
                />                
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    request: state.requests[ownProps.match.params.id],
    
  });
  
  export default connect(
    mapStateToProps,
    { getRequest, editRequests }
  )(EditReq);

// export default EditReq