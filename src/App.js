import classes from './App.module.scss';
//import Header from './components/Header/Header';
//import Movies from './components/Container/Movies/Movies';
import MovieModalForm from './components/MovieForm/MovieModalForm';
import AppTab from './components/AppTab/AppTab';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className={classes.app__wrapper}>
        {/* <Header /> */}
        {/* <Movies /> */}
        <MovieModalForm />
        <AppTab />
      </div>
    </ApolloProvider>
  );
}

export default App;
