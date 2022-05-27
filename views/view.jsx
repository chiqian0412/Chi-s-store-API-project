const React = require('react');

    class View extends React.Component {
      render() {
          const product = this.props.product;
          console.log(product)
          return (
                      
                <div>
                    <h1 
                    style={{backgroundColor:'green', fontSize:'50px',
                     width:'300px', height:'100px',}}>
                         Chi Store</h1>
                    <div>
                        <img src={product.img}></img>
                        <div>
                            <li>
                                <h2>{product.name}</h2>
                                <h2>{product.price}</h2>
                            </li>  
                            <a href={`${process.env.LEARNER_API}`}>Back Home</a>
                            <a href="/product//edit">Edit</a>
                        </div>  
                    </div>
                </div>
          );
      }
    }
    module.exports = View;