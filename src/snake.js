class Square extends React.Component {
  render() {
    return (
      <div className={"square " + (this.props.value === 1 ? "snakeSquare" : "backgroundSquare")}></div>
    );
  }
}

class Snake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(30).fill(0).map(() => Array(50).fill(0))
    };
  }

  componentDidMount() {
    this.changeSquareColour(1, 0);
  }

  createRow(row) {
    return (
      <div className="row">{row.map(square => <Square value={square} />)} </div>
    );
  }

  changeSquareColour(x, y) {
    this.state.grid[x][y] = 1;
    this.setState(this.state);
   }

  render() {
    return (
      <div className="background">
        {this.state.grid.map(row => this.createRow(row))}
      </div>
    );
  }
}

ReactDOM.render(
  <Snake />,
  document.getElementById('snake')
);
