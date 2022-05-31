const React = require('react');

const storePage = {
  backgroundColor: 'lemonchiffon',
  height: '300vh'
}
const logoURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ9uYhL-JwK13AqhufH7xQGZz0ZsIup1EgDg&usqp=CAU';
const logo = {  
  backgroundImage: `url(${logoURL})`,
  backgroundSize: 'cover',
  border: 'solid palevioletred 10px',
  height: '100px',
  width: '100px',
  borderRadius: '50%',
  fontSize: '100px',
  alignSelf: 'center',
}
const nav = {
  backgroundColor: 'lightseagreen',
  display: 'flex',
  justifyContent: 'space-between',
  height:'150px'
  
}
const head = {
  fontSize: '70px'
}
const productsStyle = {
  display: 'grid',
  gap:'10px',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyContent:' space-around',
  padding:'20px',
}
const singleProduct = {
  backgroundColor:'lightblue',
  borderRadius: '10px',
  width:'30vw',
  height: '500px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}
const img = {
  width: '25vw',
  height: '350px',
  borderRadius: '20px',
  padding: '10px',
}

    class Index extends React.Component {
      render() {
          const { products } = this.props;
          return (
                  <div style={storePage}>
                      <nav style={nav}>
                        <div style={logo}></div>
                        <h1 style={head}>Chi Store</h1>
                        <a href="/product/new">Create a New Products</a>
                      </nav>
                      <div style={productsStyle}>
                          {products.map((product, i) => {
                              return ( 
                                  <div style={singleProduct} key = {i}>
                                      <img style={img} src={product.img}></img>
                                      <h2><a href={`/product/${product.name}`}>{product.name}</a></h2> 
                                      <h3>Price: ${product.price}</h3>  
                                  </div>
                              );
                          })}
                      </div>
                  </div>
          );
      }
    }
    module.exports = Index;
    // export default Index;