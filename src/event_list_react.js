class Event extends React.Component{
  render(){
    return (
      <li>{this.props.text}</li>
    );
  }
}

class EventList extends React.Component{
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  _fetchEvents(){
    $.ajax({
      method: 'GET',
      url: 'http://localhost:3000/api/events',
      success: (data) => this.setState({data})
    });
  }

  componentWillMount(){
    this._fetchEvents();
  }

  _getEvents(){
    return this.state.data.map((event) => {
      return(
        <Event text={event.name} />
      );
    });
  }

  render() {
    const events = this._getEvents();
    return (
      <div className="eventBox">
        {events}
      </div>
    );
  }

  // polling starts here, after render

  // componentDidMount(){
  //   this._timer = setInterval(
  //     () => this._fetchEvents(),
  //     5000
  //   );
  // }
  //
  // componentWillUnmount(){
  //   clearInterval(this._timer);
  // }

  // 5,000 milliseconds = 5 seconds
}

ReactDOM.render(
  <EventList />,
  document.getElementById('event-list')
);
