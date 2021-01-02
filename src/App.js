import './App.scss';
import Movies from './components/Movies/Movies';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        My project
        <Movies />
      </div>
    </ApolloProvider>
  );
}

export default App;
