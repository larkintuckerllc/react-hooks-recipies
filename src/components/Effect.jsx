import React, { Component }  from 'react';

const API = 'https://jsonplaceholder.typicode.com/posts';

export default class Effect extends Component {
  state = {
    error: false,
    loading: true,
    posts: [],
  };

  async componentDidMount() {
    try {
      const response = await window.fetch(API);
      const json = await response.json();
      this.setState({
        loading: false,
        posts: json,
      });
    } catch (err) {
      this.setState({
        error: true,
        loading: false,
      });
    }
  }

  render() {
    const { error, loading, posts } = this.state;
    if (loading) {
      return <div>Loading</div>;
    }
    if (error) {
      return <div>Error</div>;
    }
    return (
      <div>
        <h3>Effect</h3>
        <div style={{ height: 200, overflow: 'auto' }}>
          {posts.map(post => <div key={post.id}>{post.title}</div>)}
        </div>
      </div>
    );
  }
}
