const React = require('react');
const formStyle = {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    flexDirection: 'column'
}

    class Form extends React.Component {
      render() {
          const { products } = this.props;
          return (
                  <div>
                      <form style={formStyle} action={`${process.env.LEARNER_API}/update/${learner.firstName}`} method='POST'></form>
                      <h1>Edit Product</h1>
                      <li>Name:{products.name}<input></input></li>
                      <li>Description:{products.description}<input></input></li>
                      <li>Image:{products.img}<input></input></li>
                      <li>Price:{products.price}<input></input></li>
                      <li>Quantity:{products.qty}<input></input></li>
                      <button>Submit</button>
                  </div>
          );
      }
    }
    module.exports = editForm;