var React = require('react');
var $ = require('jquery');
var Link = require('react-router').Link;

var GithubUser = React.createClass({
    render: function() {
         if (!this.props.user) {
            return (<div className="follower-page">LOADING...</div>);
        }
        var follower = this.props.user;
        return (
            <li className="followers">
                <Link to={"/user/"+ this.props.user.login}>
                    <img className="followers_icon" src={this.props.user.avatar_url}/> 
                        <div className="followers_link">{this.props.user.login}</div>
                </Link>
            </li>
        )
    }
})

module.exports = GithubUser;