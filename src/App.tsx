import * as React from 'react'; // modules
import { Route, RouteComponentProps, Switch } from 'react-router';

import Footer from './Footer/Footer'; // relative imports
import Header from './Header/Header';
import MediaModal from './MediaModal/MediaModal';
import Routes from './Routes';
import './main.scss'; // stylesheets

class App extends React.Component<RouteComponentProps> {
  previousLocation = this.props.location;

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
        <Header />
        <Switch location={isModal ? this.previousLocation : location}>
          <Route path="/" component={Routes} />
        </Switch>
        <Route path="/path" component={MediaModal} />
        <Footer />
      </div>
    );
  }
}

export default App;
