let React = require('react');
let SvgIcon = require('../../svg-icon');

let AvPlayCircleFilled = React.createClass({

  render() {
    return (
      <SvgIcon {...this.props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
      </SvgIcon>
    );
  }

});

module.exports = AvPlayCircleFilled;