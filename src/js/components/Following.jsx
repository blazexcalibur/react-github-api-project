var React = require('react');
var $ = require('jquery');
var Link = require('react-router').Link;

var GithubUser = require('./GithubUser');

var Following = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function(){
        
        var that = this; // What's this?? Make sure you remember or understand what this line does
        
        //$.getJSON(`https://api.github.com/users/${this.props.params.username}/followers?access_token=f0c7019be5d7508d20ce07a828837b7cedad5078`)
        $.getJSON(`https://api.github.com/users/${this.props.params.username}/following?access_token=f0c7019be5d7508d20ce07a828837b7cedad5078`)
            .then(
                function(followers) {
                    // Why that.setState instead of this.setState??
                    that.setState({
                        followers: followers
                    });
                }
            );
    },
    render: function() {

        if (!this.state.followers) {
            return <div>LOADING FOLLOWING...</div>
            }
        return(
        <div className="following-page">
            <h3>Following of {this.props.params.username}</h3>
            <ul>
                {this.state.followers.map(function(follower){return <GithubUser key={follower.id} user={follower}/>})}
            </ul>
        </div>
        );
    }
})

module.exports = Following;