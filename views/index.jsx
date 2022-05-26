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
                                      <img src={product.img}></img>
                                      <li>
                                      The{' '}
                                      <a href={`/product/${i}`}>
                                          {product.name}
                                      </a>{' '}
                                      is {product.price} dollar<br></br>
                                      quantity is {product.qty}
                                      <br />
                                      </li>
                                  </div>
                              );
                          })}
                      </ul>
                  </div>
          );
      }
    }
    module.exports = Index;