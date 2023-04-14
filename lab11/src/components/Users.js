import styles from './Users.module.css';
import { Component } from 'react';
import User from './User';
class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUser: false,
    };
  }
  componentDidUpdate() {
    if (this.props.users.length === 0) throw new Error('No user provider!');
  }
  toggleUserHandler() {
    this.setState((prevState) => ({
      showUser: !prevState.showUser,
    }));
  }

  render() {
    return (
      <div className={styles.users}>
        <button onClick={this.toggleUserHandler.bind(this)}>
          {this.state.showUser ? 'Hide User' : 'Show User'}
        </button>
        {this.state.showUser && (
          <ul>
            {this.props.users.map((user) => {
              return <User user={user} />;
            })}
          </ul>
        )}
      </div>
    );
  }
}
export default Users;
