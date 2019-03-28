import { toast } from 'react-toastify';
import * as _ from 'lodash';
export const NETWORK_MESSAGES = {
  offline: {
    text:
      "Experiencing connection problems? The app will still work offline, but you won't be viewing the most recent version",
    style: 'warn',
  },
  online: {
    text: "You're back online",
    style: 'success',
  },
};

export const NetworkNotification = (type, opts = {}) =>
  toast(
    NETWORK_MESSAGES[type],
    _.defaults(
      {
        // className: 'network-msg container',
        // bodyClassName: 'network-msg content',
        // progressClassName: 'network-msg progress'
      },
      opts,
    ),
  );
