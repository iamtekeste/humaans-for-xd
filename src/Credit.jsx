const React = require("react");

class Credit extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="pablo">
            <h1> Humaaans by</h1>
            <h1><a style={{display: 'inline-block'}} className="" href="https://twitter.com/pablostanley">Pablo Stanley</a></h1>
        </div>
        <p>
          Use the premade people
          illustrations or mix-&-match illustrations to create your own unique
          work.
        </p>
        <p className="tkmadeit">Plugin by ― <a href="https://twitter.com/tkmadeit"> @tkmadeit</a></p>
      </div>
    );
  }
}
module.exports = Credit;
