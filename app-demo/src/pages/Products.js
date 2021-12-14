import { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Button} from 'reactstrap';
import axios from 'axios';

import AwesomeImage from "../components/AwesomeImage";
import HoverOpacity from "../components/HoverOpacity";
import withHoverOpacity from "../components/withHoverOpacity";

import { CartContext } from "../contexts/Cart";

const HoverAwesomeImage = withHoverOpacity(AwesomeImage);



class Products extends Component{
    constructor(props){
        super(props);
        this.state={
            products:  []
        };
    }


    render(){
        const {products} = this.state;

        console.log(products);

        return(
            <Container className="pt-3">
                <h2>Products</h2>
                <Row>
                    
                    {products.map(product=>(
                      <Col sm="3">
                        <Card>
                          {/* <CardImg
                            alt=""
                            src={product.image}
                            top
                            width="100%"
                          /> */}
                          {/* <HoverOpacity>
                            <AwesomeImage src={product.image}></AwesomeImage>
                          </HoverOpacity> */}
                          <HoverAwesomeImage src={product.image}></HoverAwesomeImage>
                          <CardBody>
                            <CardTitle tag="h5">
                            {product.name}
                            </CardTitle>
                            <CardText>
                              {product.description}
                            </CardText>
                            <CartContext>
                              {
                                ({addToCart})=>(
                                  <Button onClick={()=>addToCart(product)}>
                                  Add to Cart
                                  </Button>
                                )
                              }
                            </CartContext>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                </Row>
            </Container>
        );
    }

    componentDidMount(){
      //http://localhost:8080/products: start server with node index.js in ./db
      axios.get('http://localhost:8080/products').then(res=>{
        this.setState({
          products: res.data
        });
      })
    }
}

export default Products;