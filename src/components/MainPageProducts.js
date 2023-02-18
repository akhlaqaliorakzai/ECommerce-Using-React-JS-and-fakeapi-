import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPageProducts.css'
import {Card,Button} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function MainPageProducts(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Data is loading...</p>;
    }
    return (
        <>
            {data.map((item,i) => (
            <div className='col col-3'>
            <Card className='mb-2 ms-1 me-1 shadow'>
            <Card.Img variant="top" src={data[i].image} className = 'img-responsive' />
            <Card.Body>
                <Card.Title>{data[i].title}</Card.Title>
                <Card.Text>
                {data[i].price+'$'}
                </Card.Text>
                <div class="d-flex justify-content-center">
                <Link to={'product-details'}><Button variant="outline-danger">Details</Button></Link>
                    <Button variant="outline-danger" className='ms-2 me-2'><i class="fa fa-heart-o me-2 fa-lg"></i></Button>
                    <Button variant="outline-danger"><i className='fa fa-shopping-cart me-3 fa-lg'></i></Button>
                </div>
                
            </Card.Body>
            </Card>
            </div>
        
        ))}
        </>
    );
  }
