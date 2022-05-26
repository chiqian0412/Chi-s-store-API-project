const React = require('react');

    class Form extends React.Component {
      render() {
          const { products } = this.props;
          return (
                  <div>
                      <h1>Create Product</h1>
                      <li>Name<input></input></li>
                      <li>Description<input></input></li>
                      <li>Image<input></input></li>
                      <li>Price<input></input></li>
                      <li>Quantity<input></input></li>
                      <button>Add</button>
                  </div>
          );
      }
    }
    module.exports = Form;