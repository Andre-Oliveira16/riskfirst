import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getBusinesses } from './actions/businesses';
import Header from './controls/Header/Header';
import List from './screens/List/List';
import Item from './screens/Item/Item';
import './App.css';

class App extends Component {
  screens = {
    LIST: 'LIST',
    ITEM: 'ITEM',
  };

  state = { currentScreen: this.screens.LIST, currentClient: {} };

  componentDidMount() {
    this.props.getBusinesses();
  }

  onListElementClick = elementId => () => {
    const currentClient = this.props.clients.find(({ id }) => id === elementId);
    currentClient.nearbyPlaces = this.props.clients.filter(({ id, address }) => (
      address.country === currentClient.address.country && id !== currentClient.id
    ));
    this.setState({ currentScreen: this.screens.ITEM, currentClient });
  };

  renderScreen() {
    switch(this.state.currentScreen) {
      case this.screens.LIST:
        return <List clients={this.props.clients} onClick={this.onListElementClick} />;
      case this.screens.ITEM:
        return <Item {...this.state.currentClient} />
      default:
        return null;
    }
  }

  goBackToList = () => this.setState({ currentScreen: this.screens.LIST, currentClient: {} });

  render() {
    return (
      <div className="App">
        <Header onClick={this.goBackToList} />
        { this.renderScreen() }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { clients = [] } = state.businesses;

  return { clients };
};

const mapDispatchToProps = dispatch => ({
  getBusinesses: () => dispatch(getBusinesses())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
