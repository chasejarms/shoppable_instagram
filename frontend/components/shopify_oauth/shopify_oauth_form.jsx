import React from 'react';
import requestSecureRandomToken from '../../util/secure_random_token';

class ShopifyOauthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopName: "",
      apiKey: "b99d5e737506a4d4d1f6aa5515281bc5",
      scopes: "read_products",
      redirectURI: "http://localhost:3000/shopify-authentication",
      secureToken: ""
    };
    this.handleShopNameChange = this.handleShopNameChange.bind(this);
    this.redirectToShopifyAuthentication = this.redirectToShopifyAuthentication.bind(this);
    this._formatAuthenticationURL = this._formatAuthenticationURL.bind(this);
  }

  componentDidMount() {
    requestSecureRandomToken()
    .then(resp => this.setState({ secureToken: resp.secure_token }));
  }

  handleShopNameChange(e) {
    e.preventDefault();
    this.setState({
      shopName: e.target.value
    });
  }

  redirectToShopifyAuthentication(e) {
    e.preventDefault();
    let authenticationRequestURL = this._formatAuthenticationURL();
    window.location.assign(authenticationRequestURL);
  }

  render() {
    const { shopName } = this.props;
    const { secureToken } = this.state;
    if (secureToken !== "") {
      return(
        <form>
          <label htmlFor="shop-name">Shop Name</label>
          <br></br>
          <input id="shop-name" type="text" value={shopName} onChange={this.handleShopNameChange}/>
          <br></br>
          <input type="submit" onClick={this.redirectToShopifyAuthentication}/>
        </form>
      );
    } else {
      return(
        <div>Still Loading</div>
      );
    }
  }

  _formatAuthenticationURL() {
    const { shopName, apiKey, scopes, redirectURI, secureToken} = this.state;
    let authenticationURL = "https://";
    authenticationURL += `${shopName}.myshopify.com/admin/oauth/authorize?`;
    authenticationURL += `client_id=${apiKey}`;
    authenticationURL += `&scope=${scopes}`;
    authenticationURL += `&redirect_uri=${redirectURI}`;
    authenticationURL += `&state=${secureToken}`;
    authenticationURL += '&grant_options[]=per-user';
    return authenticationURL;
  }

}

export default ShopifyOauthForm;
