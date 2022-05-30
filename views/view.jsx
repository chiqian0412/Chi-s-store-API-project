const React = require('react');
const headStyle = {backgroundColor:'green', 
                    fontSize:'50px',
                    width:'300px', 
                    height:'100px'};
    class View extends React.Component {
      render() {
          const product = this.props.product;
          return (
                      
                <div>
                    <h1 style={headStyle}>Chi Store</h1>
                    <ul>
                                <div>  
                                   <div>
                                    <img src={product.img}></img>
                                </div>
                                <div>
                                    {/* <li> */}
                                        <h2>{product.name}</h2>
                                        <h2>Price: {product.price}</h2>
                                        <p>{product.description}</p>
                                        <p>Quantity Remaining: {product.qty>0? product.qty:"OUT OF STOCK"}</p>
                                    {/* </li>   */}
                                    <li><a href={'/product'}>Back Home</a></li> 
                                    <li><a href={`/product/${product.name}/edit`}>Edit</a></li> 
                                    <li><a href={`/product/${product.name}/delete`}>Delete</a></li> 
                                </div>
                                </div>  
                            
                     </ul>
                </div>
          );
      }
    }
    // module.exports = View;
    export default View;