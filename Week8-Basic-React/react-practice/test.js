class Hello extends React.Component {
  static defaultProps = {
    from: 'Joel'
  };

  render() {
    return (
      <p>
        Hi {this.props.to} from {this.props.from}
      </p>
    );
  }
}
