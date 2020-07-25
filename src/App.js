import React from 'react';
import { connect } from "react-redux";
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature } from './actions/carActions'

const App = (props) => {   

  const addFeatureToCar = (id) => {
    props.addFeature(id)
  }

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.carOnProps} />
        <AddedFeatures car={props.carOnProps} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeaturesOnProps} addFeatureToCar={addFeatureToCar}/>
        <Total car={props.carOnProps} additionalPrice={props.additionalPriceOnProps} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPriceOnProps: state.additionalPrice,
    carOnProps: state.car,
    additionalFeaturesOnProps: state.additionalFeatures
  };
};

export default connect(
  mapStateToProps,
  {
    addFeature,
  }
)(App);
