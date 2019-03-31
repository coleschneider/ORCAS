import * as React from 'react';
import Idle from 'react-idle';
import { NETWORK_MESSAGES } from 'utils/messages';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default class Notifications extends React.Component {
  idleToast = null;
  networkToast = null;
  idleTimer;
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.addEventListener('online', this.handleNetworkChange);
    window.addEventListener('offline', this.handleNetworkChange);
  }
  handleNetworkChange = ({ type }) => {
    const { style, text } = NETWORK_MESSAGES[type];
    this.networkToast = toast[style](text, {
      autoClose: 5000,
    });
  };

  onIdle = ({ idle }) => {
    if (this.idleToast === null && idle) {
      this.idleToast = toast.warn(
        `Looks like you've been inactive for a while. We make sure to clear personal information after an hour of inactivity.`,
        {
          autoClose: false,
          position: 'bottom-right',
        },
      );
    } else {
      this.onActive()
    }
  }
  onActive = () => {
    toast.update(this.idleToast, {
      autoClose: 3000,
      onClose: () => {
        this.idleToast = null;
      },
    });
  }
  render() {
    return (
      <div>
        <Idle 
          onChange={this.onIdle}
          timeout={1000 * 60 * 5} /* 5 minutes */
          />
        <ToastContainer />
      </div>
    );
  }
}
