import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Button} from 'react-bootstrap'
import {useState,useEffect} from 'react'

export default function ProductDetails(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      fetch('https://fakestoreapi.com/products/1')
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
            <div>
                <Card className='mb-2 ms-1 me-1 shadow  border border-danger  ms-5 me-5'>
                <Card.Img variant="top" src={data.image} className = 'img-responsive w-100 mb-3' />
                <Card.Body className='bg-danger text-white'>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                    Price: {data.price+'$'}
                    </Card.Text>
                    <Card.Text>
                    {data.description}
                    </Card.Text>
                    <Card.Text>
                    Ratings: {/*data.rating.rate*/}<br/>
                    Quantity: {/*data.rating.count*/}
                    </Card.Text>
                    <div class="d-flex justify-content-center">
                        <Button variant="outline-light" className='ms-2 me-2'><i class="fa fa-heart-o me-2 fa-lg"></i></Button>
                        <Button variant="outline-light"><i className='fa fa-shopping-cart me-3 fa-lg'></i></Button>
                    </div>
                    
                </Card.Body>
                </Card>
            </div>
    );
  }
