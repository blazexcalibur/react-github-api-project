var React = require('react');
var $ = require('jquery');
var Link = require('react-router').Link;

var Repos = React.createClass({
    getInitialState: function() {
        return {
            repos: []
        };
    },
    componentDidMount: function(){
        var that = this; // What's this?? Make sure you remember or understand what this line does
        
        //$.getJSON(`https://api.github.com/users/${this.props.params.username}/followers?access_token=f0c7019be5d7508d20ce07a828837b7cedad5078`)
        $.getJSON(`https://api.github.com/users/${this.props.params.username}/repos?access_token=f0c7019be5d7508d20ce07a828837b7cedad5078`)
            .then(
                function(repos) {
                    // Why that.setState instead of this.setState??
                    that.setState({
                        repos: repos
                    });
                }
            );
    },
    renderStat: function(repo) {
        return (
            <li key={repo.id} className="repo-info__stat">
                <a className="repo_url" href={repo.html_url}> {repo.full_name}</a>
                <p className="stargazers"> {repo.stargazers_count} &#9733;
                </p>
            </li>
        );
    },
    render: function() {
        if (!this.state.repos) {
                return <div>LOADING REPOS...</div>
            }
            return (
                <ul className="repo-info__stats">
                    {this.state.repos.map(this.renderStat)}              
                </ul>
            )
    }
})

module.exports = Repos;