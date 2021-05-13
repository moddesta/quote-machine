import React from 'react';
import { FacebookButton } from 'react-social';
 
class FacebookBtn extends React.Component {
  render() {
    let url = "https://github.com";
    return (
      <FacebookButton url={url} appId={446303049780425}>
        {"Share"}
      </FacebookButton>
    );
  }
}
  export default FacebookBtn;