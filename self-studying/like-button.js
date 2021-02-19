class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      value: "./image/heart-outline.png",
    };
  }
  onClick = () => {
    if (this.state.liked === false) {
      this.setState({ liked: true, value: "./image/heart-full.png" });
    } else this.setState({ liked: false, value: "./image/heart-outline.png" });
  };
  render() {
    return (
 
        <img class="heart" src={this.state.value} onClick={this.onClick}/>
  
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

ReactDOM.render(
  <div>
    <LikeButton />
    <LikeButton />
    <LikeButton />
    <LikeButton />
  </div>,
  document.querySelector("#root")
);
