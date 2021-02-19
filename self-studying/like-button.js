class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
    };
  }

  render() {
    return (
      <button
        type="submit"
        onClick={() => {
          this.setState({ liked: true });
        }}
      >
        {this.state.liked === true ? "Liked" : "Like"}
      </button>
    );
    // e(
    //   "button",
    //   {
    //     onClick: () => {
    //       this.setState({ liked: true });
    //     },
    //     type: "submit",
    //   },
    //   this.state.liked === true ? "Liked" : "Like"
    // );
  }
}

ReactDOM.render(<div><LikeButton /><LikeButton /><LikeButton /><LikeButton /></div>, document.querySelector("#root"));
