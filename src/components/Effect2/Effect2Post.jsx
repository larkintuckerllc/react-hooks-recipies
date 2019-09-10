import PropTypes from 'prop-types';
import React, { Component }  from 'react';

const API = 'https://jsonplaceholder.typicode.com/posts';

export default class Effect extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired, 
  };

  state = {
    error: false,
    loading: true,
    post: null,
  };

  loadPost = async (id) => {
    try {
      if (typeof id !== 'string' || id === '') {
        throw new Error();
      }
      this.setState({
        loading: true,
      });
      const response = await window.fetch(`${API}/${id}`);
      const json = await response.json();
      this.setState({
        loading: false,
        post: json,
      });
    } catch (err) {
      this.setState({
        error: true,
        loading: false,
      });
    }
  };

  componentDidMount() {
    const { id } = this.props;
    this.loadPost(id);
  }

  componentDidUpdate({ id: prevId }) {
    const { id } = this.props;
    if (id === prevId)  {
      return;
    }
    this.loadPost(id);
  }

  render() {
    const { error, loading, post } = this.state;
    if (loading) {
      return <div>Loading</div>;
    }
    if (error) {
      return <div>Error</div>;
    }
    return (
      <div>
        {post.title}
      </div>
    );
  }
}
