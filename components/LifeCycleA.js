import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';
class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'silpa',
    };
    console.log('lifecycleA constructor');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleA getDerivedStateFromProps');
    return null;
  }
  componentDidMount() {
    console.log('LifecycleA componentdidmount');
  }
  render() {
    console.log('lifecycle render');
    return (
      <div>
        <div>LifeCycleA</div>
        <LifeCycleB />
      </div>
    );
  }
}
export default LifeCycleA;
