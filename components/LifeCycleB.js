import React, { Component } from 'react';
class LifeCycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'silpa',
    };
    console.log('lifecycleB constructor');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('LifeCycleB getDerivedStateFromProps');
    return null;
  }
  componentDidMount() {
    console.log('LifecycleB componentdidmount');
  }
  render() {
    console.log('lifecycleB render');
    return <div>LifeCycleB</div>;
  }
}
export default LifeCycleB;
