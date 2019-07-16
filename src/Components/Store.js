import React from 'react';
import '../App.css';


const Store = () => (
    <div className="store">
        <h1>Store</h1>
    <form>
        <div class="form-group" >
            <label for="Email">Email address</label>
            <input type="email" class="form-control" id="Email" placeholder="jean.dupond@orange.com" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
        <label for="selectCity">Select City</label>
        <select class="form-control" id="selectCity">
            <option>Reims</option>
            <option>Nante</option>
            <option>Orléan</option>
            <option>Toulouse</option>
            <option>Lyon</option>
        </select>
        </div>
          
        <div class="form-group">
          <label for="adultsNumber">Nombre d'adultes</label>
          <input type="email" name="adultsNumber" id="adultsNumber" placeholder="Exemple 2" />
        </div>
        <div class="form-group">
          <label for="childrensNumber">Nombre d'enfants</label>
          <input type="email" name="childrensNumber" id="childrensNumber" placeholder="Exemple 2" />
        </div>
        </form>
    </div>
);

export default Store;
