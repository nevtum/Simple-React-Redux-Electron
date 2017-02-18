import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class TestApp extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>React Redux Electron App</h1>
                <input onClick={this.props.incrementCount} type="button" value="Increment" />
                <span><p>Counter: {this.props.example.count}</p></span>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
  return {
    example: state.ExampleReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
      incrementCount: () => dispatch({ type: "INCREMENT_COUNT" })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestApp);