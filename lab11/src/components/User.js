import styles from './User.module.css';
import { Component } from 'react';
class User extends Component {
  render() {
    return <li className={styles.user}>{this.props.user.name}</li>;
  }
}
export default User;
