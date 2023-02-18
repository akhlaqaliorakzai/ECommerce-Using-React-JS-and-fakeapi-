import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Card} from 'react-bootstrap'
import {useState,useEffect} from 'react'
import './Cart.css'
export default function Cart(){
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
    return(
        <>
            <table className='m-5 shadow'>
                <thead className="text-secondary">
                    <th className='p-3'>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                    <th></th>
                </thead>
                <tbody>
                    <td className='p-3'><img src={data.image}/></td>
                    <td><input type='number' min='0' className='form form-control w-25'/></td>
                    <td>${data.price}</td>
                    <td> <Button variant="outline-danger" className='ms-2 me-2'><i class="fa fa-heart-o me-2 fa-lg"></i></Button></td>
                    <td><Button variant="outline-danger me-5">Remove</Button></td>
                </tbody>
            </table>
            <Card style={{ width: '18rem' }} className='m-5 shadow'>
                <Card.Body>
                <Card.Title>Total Price : {}    </Card.Title>
                <div className="d-flex justify-content-center">
                    <Button variant="danger">Make Purchase!</Button>
                </div>
                </Card.Body>
            </Card>
        </>
    )
}



   