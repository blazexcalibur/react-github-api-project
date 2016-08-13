var React = require('react');
var $ = require('jquery');
var Link = require('react-router').Link;

var GithubUser = require('./GithubUser');

var Infinite = require('react-infinite');



var Followers = React.createClass({
    getInitialState: function() {
        return {   
                   page: 1,
                   loading: false,
                   followers: []
        };
    },
    fetchData: function(){
        this.setState({loading: true})
        var that = this; // What's this?? Make sure you remember or understand what this line does
        //$.getJSON(`https://api.github.com/users/${this.props.params.username}/followers?access_token=f0c7019be5d7508d20ce07a828837b7cedad5078`)
        $.getJSON(`https://api.github.com/users/${this.props.params.username}/followers?access_token=f0c7019be5d7508d20ce07a828837b7cedad5078&page=${this.state.page}&per_page=50`)
            .then(
                function(followers) {
                    // Why that.setState instead of this.setState??
                    that.setState({
                        followers: that.state.followers.concat(followers),
                        loading: false,
                        page: that.state.page + 1
                    });
                }
            );
    },
    render: function() {
       
        return(
            <div>
            <h3>Followers of {this.props.params.username}</h3>
        <Infinite className="followers-page" 
            isInfiniteLoading={this.state.loading} 
            onInfiniteLoad={this.fetchData} 
            useWindowAsScrollContainer 
            elementHeight={30}
            infiniteLoadBeginEdgeOffset={100} >
            
            
                {this.state.followers.map(function(follower){return <GithubUser key={follower.id} user={follower}/>})}
            
        </Infinite>
        </div>
        );
    }
})

module.exports = Followers;