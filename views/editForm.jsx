const React = require('react');
const headStyle = {
    backgroundColor: 'lightskyblue',
    width: '400px',
}
const formStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    flexDirection: 'column'
}
const inputStyle = {
    padding: '0.25rem',
    margin: '0.125rem',
    borderRadius: '5px'
}

    class editForm extends React.Component {
      render() {
          const product = this.props.product;
          console.log(product)
          return (
                  <div>
                      <h1 style={headStyle}>Edit Product</h1>
                      <div>
                <form style={formStyle} action={`/product/${product.name}`} method='Put'>
                <input style={inputStyle} type="text"   name="name"      placeholder='Name' defaultValue={product.name} />
                <input style={inputStyle} type="text"   name="description" placeholder='Description' defaultValue={product.description} />
                <input style={inputStyle} type="text"   name="img"       placeholder='Image link' defaultValue={product.img} />
                <input style={inputStyle} type="number" name="price" placeholder='Price' defaultValue={product.price} />
                <input style={inputStyle} type="number" name="qty"   placeholder='Quantity' defaultValue={product.qty} />
                <input style={inputStyle} type="submit" defaultValue="Edit product" />
                </form>
            </div>
                  </div>
          );
      }
    }
    module.exports = editForm;