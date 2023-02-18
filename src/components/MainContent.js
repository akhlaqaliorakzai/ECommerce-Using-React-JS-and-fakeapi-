import Categories from "./Categories";
import MainPageProducts from "./MainPageProducts";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MainContent(){
    return(
        <>
        <div className='row'>
            <Categories/>
            <MainPageProducts/>
        </div>
        </>
    )
}