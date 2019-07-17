import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import '../App.scss';

const mapStateToProps = state => ({
    email: state.email,
    city: state.city,
    adultNumber: state.adultNumber,
    childrenNumber: state.childrenNumber,
  });
  

const Store = ({ dispatch, email, city, adultNumber, childrenNumber }) => (
    <div className="store" id="Store">
        <h1>Store</h1>
    <form>
        <div class="form-group" >
            <label for="Email">Email address</label>
            <input type="email" class="form-control" id="Email" placeholder="jean.dupond@orange.com" onChange={(e) => dispatch({
              type: 'SAVE_USER_EMAIL', email: e.target.value})} />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
        <label for="selectCity">Select City</label>
        <select class="form-control" id="selectCity" onClick={(e) => dispatch({
              type: 'SAVE_CITY', city: e.target.value})}>
            <option>Reims</option>
            <option>Nante</option>
            <option>Orléan</option>
            <option>Toulouse</option>
            <option>Lyon</option>
        </select>
        </div>
          
        <div class="form-group">
          <label for="adultsNumber">Nombre d'adultes</label>
          <input type="number" className="number" name="adultsNumber" id="adultsNumber" placeholder="Exemple 2" onChange={(e) => dispatch({
              type: 'SAVE_ADULT_NUMBER', adultNumber: e.target.value})}/>
        </div>
        <div class="form-group">
          <label for="childrensNumber">Nombre d'enfants</label>
          <input type="number" className="Number" name="childrensNumber" id="childrensNumber" placeholder="Exemple 2" onChange={(e) => dispatch({
              type: 'SAVE_CHILDREN_NUMBER', childrenNumber: e.target.value})}/>
        </div>
        <button type="submit" class="btn btn-primary" onChange={(e) => {
            e.preventDefault();
            //e.stopPropagation();
            axios.post(`${process.env.REACT_APP_API_URL}/circus/store`, {
              email: email,
              city: city,
              adult: adultNumber,
              children: childrenNumber,
            })
          }}>Submit</button>
        </form>
    </div>
);

export default connect(mapStateToProps)(Store);
