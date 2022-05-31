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
                                  
                                  <div key = {i}>
                                      <img src={product.img}></img>
                                      <h2>Price: {product.price}</h2>
                                      <h3><a href={`/product/${product.name}`}>{product.name}</a></h3> 
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