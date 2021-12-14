import { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardBody, CardText, CardTitle, CardSubtitle, Button} from 'reactstrap';
import axios from 'axios';

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
                          <CardImg
                            alt=""
                            src={product.image}
                            top
                            width="100%"
                          />
                          <CardBody>
                            <CardTitle tag="h5">
                            {product.name}
                            </CardTitle>
                            <CardText>
                              {product.description}
                            </CardText>
                            <Button>
                              Add to Cart
                            </Button>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                </Row>
            </Container>
        );
    }

    componentDidMount(){
      axios.get('http://localhost:8080/products').then(res=>{
        this.setState({
          products: res.data
        });
      })
    }
}

export default Products;