let React = require('react');
let {Link} = require('react-router');

let Examples = React.createClass({
  render: function () {
    return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <ol>
          <li>
            <Link to='/?location=Yambol'>Yambol</Link>
          </li>
          <li>
            <Link to='/?location=Rio'>Rio, Brasil</Link>
          </li>
        </ol>
      </div>
    )
  }
});

module.exports = Examples;
