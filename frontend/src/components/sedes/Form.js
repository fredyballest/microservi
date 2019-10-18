import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addSede } from '../../actions/sedes'

export class Form extends Component {
    
    state = {
        name: '',
        barrio: '',
        direccion: ''
    }
    
    static propTypes = {
        addSede: PropTypes.func.isRequired
      };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        
        const { name, barrio, direccion } = this.state;
        const sede = { name, barrio, direccion };
        this.props.addSede(sede);
        this.setState({
          name: "",
          barrio: "",
          direccion: ""
        });
      };

    
    render() {
        const { name, barrio, direccion } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
        <h2>Add Sede</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Barrio</label>
            <input
              className="form-control"
              type="text"
              name="barrio"
              onChange={this.onChange}
              value={barrio}
            />
          </div>
          <div className="form-group">
            <label>Direccion</label>
            <textarea
              className="form-control"
              type="text"
              name="direccion"
              onChange={this.onChange}
              value={direccion}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </div>
        )
    }
}

export default connect(null,{addSede})(Form)