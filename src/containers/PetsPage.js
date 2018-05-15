import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchPets } from '../actions';
import PetsNew from './PetsNew';
import PetsShow from './PetsShow';
import PetsList from '../components/PetsList';

class PetsPage extends Component {

  componentDidMount() {
    this.props.fetchPets();
  }

  render() {
     const { match, pets } = this.props;
     return (
       <div>
         <PetsList pets={pets} />
         <Switch>
           <Route path={`${match.url}/new`} component={PetsNew} />
           <Route path={`${match.url}/:petId`} component={PetsShow}/>
           <Route exact path={match.url} render={() => (
             
             )}/>
           </Switch>
         </div>
       );
     }
 };
const mapStateToProps = (state, ownProps) => {
  const pet = state.pets.find(pet => pet.id == ownProps.match.params.petId)

  if (pet) {
    return { pet }
  } else {
    return {movie: {} }
  }
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);
