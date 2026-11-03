import { useParams } from 'react-router';
import Products from '../Dataset/Products.json'
import {NavBar} from './NavBar';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { PageNotFound } from './PageNotFound';



export function Product(){
    const {id} = useParams();

    const product = Products.find((p)=>p.id === Number(id));
    if(!product) return <PageNotFound />
   
    return<>
    <NavBar />
    <h1>Product Page</h1>

    {
        product?(
        <div className='info' style={{display:'flex', alignItems:'flex-start'}}>
        <Image src={product.imageUrl}  fluid style={{height:'400px', width:'400px', marginLeft:'10px', borderRadius:'4px', display:'inline-block'}}/>

        <Card style={{ width: '18rem', display:'inline-block', width:'500px', marginLeft:'80px'}} >
        <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{product.description}</Card.Subtitle>
        <p style={{fontWeight:'500'}}>Rating: {product.rating}<i className="bi bi-star-fill ms-1 " style={{color:'gold', fontSize:'20px'}}></i></p>
        <hr style={{border:'1px solid gray'}}/>
        <p style={{color:'green', fontWeight:'bold'}}>Price: ₹ {product.price}</p>
        <p style={{color:'green'}}>inclusive of all taxes</p>



      </Card.Body>
    </Card>
    </div>
    )
    :(<p>Product Not Found</p>)

    }
    </>;
}