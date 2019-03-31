import { toast } from 'react-toastify';
import * as _ from 'lodash';
export const NETWORK_MESSAGES = {
  offline: {
    style: 'warn',
    text:
      "Experiencing connection problems? The app will still work offline, but you won't be viewing the most recent version",
  },
  online: {
    style: 'success',
    text: "You're back online",
  },
};
