import * as React from 'react';
import IdleTimer from 'react-idle-timer';
import { NETWORK_MESSAGES, NetworkNotification } from 'utils/messages';
import { ToastContainer, toast, ToastType } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Notifications extends React.Component {
  idleToast = null;
  networkToast = null;
  idleTimer = null;
  constructor(props) {
    super(props);
    this.onActive = this._onActive.bind(this);
    this.onIdle = this._onIdle.bind(this);
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

  _onActive() {
    toast.update(this.idleToast, {
      autoClose: 3000,
      onClose: () => {
        this.idleToast = null;
        this.idleTimer.reset();
      },
    });
  }

  _onIdle() {
    if (this.idleToast === null) {
      const lastActive = this.idleTimer.getLastActiveTime();
      this.idleToast = toast.warn(
        `Looks like you've been inactive for a while. We make sure to clear personal information after an hour of inactivity.`,
        {
          autoClose: false,
          position: 'bottom-right',
        },
      );
    }
  }
  render() {
    return (
      <div>
        <IdleTimer
          ref={ref => {
            this.idleTimer = ref;
          }}
          element={document}
          onActive={this.onActive}
          onIdle={this.onIdle}
          debounce={250}
          timeout={1000 * 60}
        />
        <ToastContainer style={{}} />
      </div>
    );
  }
}
