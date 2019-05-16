import React from 'react';
import axios from 'axios';

export default class MahasiswaList extends React.Component {
  state = {
    id: '',
    name: '',
    gender: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
    this.setState({ name: event.target.value });
    this.setState({ gender: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      id: this.state.name
      name: this.state.name
      gender: this.state.name
    };

    axios.post(`https://my-json-server.typicode.com/kreautz/latihan-pwa-api/db`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <label>
            Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <label>
            Gender:
            <input type="text" name="gender" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}