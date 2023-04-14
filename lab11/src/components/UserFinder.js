import styles from './UserFinder.module.css';
import React, { Component } from 'react';
import UserContext from './store/UserContext';
import Users from './Users';
import ErrorBoundary from './ErrorBoundary';
class UserFinder extends Component {
  static contextType = UserContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
    };
  }
  componentDidMount() {
    this.setState({ filteredUsers: this.context.users });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchTerm != prevState.searchTerm)
      this.setState({
        filteredUsers: this.context.users.filter((item) =>
          item.name.includes(this.state.searchTerm)
        ),
      });
  }
  inputChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <div className={styles.finder}>
          <input
            type='text'
            onChange={this.inputChangeHandler.bind(this)}
          ></input>
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </React.Fragment>
    );
  }
}
export default UserFinder;
