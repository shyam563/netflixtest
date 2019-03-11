import React, {
  Component
} from 'react';

class CEComponent extends Component {
  render() {
    return React.createElement('div', null, `Hello world from create element `);
  }
}

export default CEComponent;