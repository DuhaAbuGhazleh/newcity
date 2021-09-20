import React, { Component } from 'react'
import { Card,Col, } from 'react-bootstrap';

export class Restaurant extends Component {
    render() {
        return (
            <div class="row row-cols-1 row-cols-md-4">
            <div class="col mb-4">
              <div class="card">
                <img src={this.props.image_url} class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Name of Restaurant:{this.props.name}</h5>
                  <p class="card-text">Price:{this.props.price}.</p>
                  <p class="card-text">Rating:{this.props.rating}.</p>
                  <p class="card-text">URL: {this.props.url}.</p>
                </div>
              </div>
            </div>
            </div>





        )
    }
}

export default Restaurant

          
{/* <div class="card-deck">
<div class="card">
  <img src={this.props.image_url} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Name of Restaurant:{this.props.name}</h5>
    <p class="card-text">Price:{this.props.price}.</p>
    <p class="card-text">Rating:{this.props.rating}.</p>
  </div>
  <div class="card-footer">
    <small class="text-muted">URL: {this.props.url}.</small>
  </div>
</div>
         
   </div>       */}