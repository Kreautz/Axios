import React from 'React';
import axios from 'axios';

export default class MahasiswaList extends React.component {
    state = {
        mahasiswa : []
    }

    componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/kreautz/latihan-pwa-api/db`)
          .then(res => {
            const mahasiswa = res.data;
            this.setState({ mahasiswa });
          })
      }
    
      render() {
        return (
          <ul>
            { this.state.persons.map(mahasiswa => <li>{mahasiswa.name}</li>)}
          </ul>
        )
      }
}