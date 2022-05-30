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
    class Form extends React.Component {
      render() {
        //   const product = this.props.product;
          return (
            <div>
                <h1 style={headStyle}>Create a New Product</h1>
                <form style={formStyle} action='/product' method='POST'>
                <input style={inputStyle} type="text"   name="name"         placeholder='Product Name'  />
                <input style={inputStyle} type="text"   name="description"  placeholder='Description' />
                <input style={inputStyle} type="text"   name="img"        placeholder='Image link' />
                <input style={inputStyle} type="number" name="price"        placeholder='Price' />
                <input style={inputStyle} type="number" name="qty"     placeholder='Quantity' />
                <input style={inputStyle} type="submit" defaultValue="Create product" />
                </form>
            </div>
                   
          );
      }
    }
    module.exports = Form;