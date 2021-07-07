import React from 'react';
import { connect } from "react-redux";
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeature, deleteFeature, chooseCar } from './actions/carActions'
import { cars } from "./reducers/carReducer"
import { Switch, Route, useHistory } from 'react-router-dom';

const App = (props) => { 
  const history = useHistory()  

  const addFeatureToCar = (id) => {
    props.addFeature(id)
  }

  const deleteFeatureFromCar = (id) => {
    props.deleteFeature(id)
  }

  const chooseCarToShow = car => {
    props.chooseCar(car)
    history.push("/car")
  }

  return (
    

    <Switch>
      <Route path="/car">
        <div className="boxes">
          <div className="box">
            <Header car={props.carOnProps} />
            <AddedFeatures car={props.carOnProps} deleteFeatureFromCar={deleteFeatureFromCar}/>
          </div>
          <div className="box">
            <AdditionalFeatures additionalFeatures={props.additionalFeaturesOnProps} addFeatureToCar={addFeatureToCar}/>
            <Total car={props.carOnProps} additionalPrice={props.additionalPriceOnProps} />
          </div>
        </div>
      </Route>
      <Route path="/">
        <div class="tile is-parent">
        {cars.map((car, index) => (
              <article class="tile is-child notification is-info" onClick={() => chooseCarToShow(index)}>
                <p class="title">{car.car.name}</p>
                <figure class="image is-4by3">
                  <img src={car.car.image}/>
                </figure>
              </article>
            ))
          }
        </div>
      </Route>
    </Switch>


        
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
    deleteFeature,
    chooseCar
  }
)(App);
