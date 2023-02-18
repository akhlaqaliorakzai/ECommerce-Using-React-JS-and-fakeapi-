import 'bootstrap/dist/css/bootstrap.min.css';
import MainPageProducts from './MainPageProducts';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
export default function Categories(){
    return(
        
            <div className='col col-3'>
                <ul className='text-decoration-none list-unstyled bg-white p-4 ms-2 rounded border border-danger shadow'>
                    <li><a href='' className='text-decoration-none text-danger p-2 navLinks'>Men's Collection<i className='fa fa-male ms-2 fa-lg '></i></a></li>
                    <li><a href='' className='text-decoration-none text-danger p-2 navLinks'>Women's Collection<i className='fa fa-female ms-2 fa-lg '></i></a></li>
                    <li><a href='' className='text-decoration-none text-danger p-2 navLinks'>Child's Collection<i className='fa fa-child ms-2 fa-lg '></i></a></li>
                </ul>
            </div>
        
    )
}