import React, { Component } from 'react';

class SmurfForm extends Component {
  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={() => this.props.addSmurf(this.props.addedSmurf)}>
          <input
            onChange={this.props.handleAdd}
            placeholder="name"
            value={this.props.addedSmurf.name}
            name="name"
          />
          <input
            onChange={this.props.handleAdd}
            placeholder="age"
            value={this.props.addedSmurf.age}
            name="age"
          />
          <input
            onChange={this.props.handleAdd}
            placeholder="height"
            value={this.props.addedSmurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
