const React = require('react');

    class Index extends React.Component {
      render() {
          const { products } = this.props;
          return (
                  <div>
                      <h1>Chi Store</h1>
                      <nav>
                        <a href="/product/new">Create a New Products</a>
                      </nav>
                      <ul>
                          {products.map((product, i) => {
                              return (
                                <div>  
                                  <div>
                                      <img src={product.img}></img>
                                      <li>
                                      The{' '}
                                          {product.name}
                                      {' '}
                                      is {product.price} dollar<br></br>
                                      quantity is {product.qty}
                                      <br />
                                      </li>
                                  </div>
                                  <div>
                                      <li><a href={`/product/${product.name}`}>Detail</a></li>
                                      {/* <li><a href={`/product/${product.name}/edit`}>Edit</a></li>
                                      <li><a href={`/product/${i}/delete`}>Delete</a></li> */}
                                  </div>
                                </div>  
                              );
                          })}
                      </ul>
                  </div>
          );
      }
    }
    module.exports = Index;
    // export default Index;