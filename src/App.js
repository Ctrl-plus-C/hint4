import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { Query, Mutation } from 'react-apollo';
import { nicknamesall, joinnickname } from './queries';
import { ApolloProvider } from "react-apollo";
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


export var client;

class App extends Component {
  constructor(props) {
    super(props);  
    client = new ApolloClient({
      uri: "https://hintfour.herokuapp.com/v1alpha1/graphql"
    });

    this.state = {
      name: ""
  }
}

  render() {
    return (
      <ApolloProvider client={client}>
      <div className="App">
        <h1>ghgjhgh</h1>
          {/* <Query query={nicknamesall}>
          {({ loading, error, data }) => {
            console.log("jhjfdshfhhjfhj");
            console.log(data);
          if (loading) return ('Loading');
          if (error) return (`Error fetching nicknames.`);
          return (
            <div>
              {/* {data.nicknames} */}
              {/* {data.nicknames.map((nickname) => (
                <h3>{nickname.name}</h3>
              ))}
            </div>
          );
          }
        }
          </Query> */}

          {/* <Mutation mutation={joinnickname}>
          {(insert_nicknames, { data }) => (
            <Form onSubmit={e => {
              e.preventDefault();
              console.log(this.state.name);
              insert_nicknames({ variables: this.state });
            }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>nickname</Form.Label>
              <Form.Control type="text" placeholder="Enter nickname" onChange={(e) => this.setState({name: e.target.value})} />
              
            </Form.Group>
          
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          )}
          </Mutation> */}

        </div> 
        </ApolloProvider>
     
    );
  }

}

export default App;
