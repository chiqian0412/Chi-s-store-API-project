const React = require('react');

    class Index extends React.Component {
      render() {
          const { products } = this.props;
          return (
                  <div>
                      <h1>Chi's Makeup Store</h1>
                      <nav>
                        <a href="/products/new">Create a New Products</a>
                      </nav>
                      <ul>
                          {products.map((product, i) => {
                              return (
                                  <li>
                                      The{' '}
                                      <a href={`/products/${i}`}>
                                          {product.name}
                                      </a>{' '}
                                      is {product.price} <br></br>
                                      {product.qty}
                                      <br />
                                  </li>
                              );
                          })}
                      </ul>
                  </div>
          );
      }
    }
    module.exports = Index;