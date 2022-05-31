const React = require('react');

const storePage = {
    backgroundColor: 'lemonchiffon',
    height: '150vh'
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
  const productPage = {
      display:'flex',
      justifyContent:'space-around',
  }
  const productDetail = {
    width: '50vw',
    height: '500px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between'
  }
  const imgContainer = {
    width: '50vw',
    height: '500px',
    alignSelf:'center',
    padding: '10px',
    display:'flex',
    justifyContent:'center',
  }
 const detailInfo = {
     paddingLeft:'50px',
 }
 const controlButtom = {
     display:'flex',
     justifyContent:'space-between',
     width:'30vw',
     border:'solid black 1px',
     fontSize:'20px'
 }

    class View extends React.Component {
      render() {
          const product = this.props.product;
          const descs = product.description.split(';');
          const productDetails = (descs) => { 
                return (
                    descs.map((desc) => {
                        return(<p>{desc}</p>)  
                    }))
                }
          return (          
                <div style={storePage}>
                    <nav style={nav}>
                        <div style={logo}></div>
                        <h1 style={head}>Chi Store</h1>
                        <a href="/product/new">Create a New Products</a>
                    </nav>
                    <div style={productPage}> 
                        <div style={imgContainer} >
                        <img src={product.img}></img>
                        </div>
                        <div style={productDetail}>
                                <h1>{product.name}</h1>
                                <h2>Price: ${product.price}</h2>    
                                <p>Quantity Remaining: {product.qty>0? product.qty:"OUT OF STOCK"}</p>
                                <div>
                                <p>Details: </p>
                                <div style={detailInfo}>{productDetails(descs)}</div>
                                </div>
                            <div style={controlButtom}>
                                <li><a href={'/product'}>Back Home</a></li> 
                                <li><a href={`/product/edit/${product.name}`}>Edit</a></li> 
                                <li><a href={`/product/delete/${product.name}`}>Delete</a></li>                       
                            </div>
                        </div> 
                    </div>
                </div>
          );
      }
    }
    export default View;