import React, { useEffect, useState } from 'react';

/* class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count
    }
  }

  componentDidMount() {
    this.uid = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 10 * 1000)
  }

  componentWillUnmount() {
    clearInterval(this.uid)
  }

  render() {
    const css = {
          backgroundColor: '#ccc',
          fontSize: '34px'
        };
    return (
      <div>
        <div style={css}>{this.state.count}</div>
        <button onClick={() => this.setState({
          count: this.state.count + this.props.step
        })}>Click Me</button>
      </div>
    )
  }
} */

export default ({ count: propsCount, step }) => {
  const [count, setCount] = useState(propsCount);

  useEffect(() => {
    document.title = count;
  })

  return (
      <div>
        <div>{count}</div>
        <button onClick={() => setCount(count + step)}>Click Me</button>
      </div>
    )
}
