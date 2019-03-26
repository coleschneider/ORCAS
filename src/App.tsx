import * as React from 'react'; // modules
import { Route, RouteComponentProps, Switch } from 'react-router';

import Footer from 'Components/Footer/Footer'; // relative imports
import Header from 'Components/Header/Header';
import MediaModal from 'Components/MediaModal/MediaModal';
import Routes from './Routes';
import 'stylesheets/main.scss'; // stylesheets

class App extends React.Component<RouteComponentProps> {
  previousLocation = this.props.location;
  state = {
    showScroller: false,
  };
  componentDidMount() {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    if (nextProps.history.action !== 'POP' && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }
  render() {
    const { location } = this.props;

    const isModal = !!(location.state && location.state.modal);
    return (
      <div>
        <Header setHeaderScroll={isGreater => this.setState({ showScroller: isGreater })} />
        <Switch location={isModal ? this.previousLocation : location}>
          <Route path="/" component={Routes} />
        </Switch>
        <Route path="/path" component={MediaModal} />
        <Footer showScroller={this.state.showScroller} />
      </div>
    );
  }
}

export default App;
