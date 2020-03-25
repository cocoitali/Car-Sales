import React from 'react';
import { connect } from "react-redux";
import { buyItem } from '../actions'

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick ={props.buyItem} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => ({ additionalFeatures: state.additionalFeatures });

export default  connect(
  mapStateToProps,
  { buyItem }  
)(AdditionalFeature)
