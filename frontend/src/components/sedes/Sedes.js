
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getSedes, deleteSede } from '../../actions/sedes'


export class Sedes extends Component {

    static propTypes = {
        sedes: PropTypes.array.isRequired,
        getSedes: PropTypes.func.isRequired,
        deleteSede: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.props.getSedes()
    }

    render(){
        return(
            <Fragment>
        <h2>Sedes Transito</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Barrio</th>
              <th>Direccion</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.sedes.map(sede => (
              <tr key={sede.id}>
                <td>{sede.id}</td>
                <td>{sede.name}</td>
                <td>{sede.barrio}</td>
                <td>{sede.direccion}</td>
                <td>
                <button
                    onClick={this.props.deleteSede.bind(this, sede.id)}

                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    sedes: state.sucur.sedes
})

export default connect(mapStateToProps, {getSedes,deleteSede})(Sedes)