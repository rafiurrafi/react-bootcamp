const higherOrderFunction = (Component) => {
  return class extends Component {
    render() {
      if (this.props.author) return <Component {...this.props} />;
      else return <h1>FucK!!</h1>;
    }
  };
};
export default higherOrderFunction;
