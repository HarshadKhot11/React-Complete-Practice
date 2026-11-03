// import { NavLink, useSearchParams } from "react-router";
// import Products from "../Dataset/Products.json";
// import { useState } from "react";
// import { Container } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// export function Filter() {
//   const [searchParams, setSearchParams] = useSearchParams();
//   let [text, setText] = useState("");
//   let searchingPrice = searchParams.get("price");

//   const FilterItems = Products.filter(
//     (p) =>
//       p.title.toLowerCase().includes(text.toLowerCase()) &&
//       Number(searchingPrice) >= p.price,
//   );

//   return (
//     <>
//       <Container>
//         <label htmlFor="category">Category</label>
//         <input
//           list="Categorys"
//           id="selectedCategory"
//           onChange={(e) => setSearchParams({ categorys: e.target.value })}
//         />

//         <datalist name="Category" id="Categorys">
//           {[...new Set(Products.map((p) => p.category))].map((category, i) => {
//             return (
//               <option key={i} value={category}>
//                 {category}
//               </option>
//             );
//           })}
//         </datalist>

//         <label htmlFor="price">Price</label>
//         <input
//           type="range"
//           max={1000}
//           onChange={(e) => setSearchParams({ price: e.target.value })}
//         />
//       </Container>

//       <input
//         type="search"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       {FilterItems.length < 1 && "Search not found"}

//       <div className="main-products p-3">
//         <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="g-3">
//           {FilterItems.map((p) => (
//             <Col key={p.id}>
//               <Card style={{ width: "18rem", height: "414px" }}>
//                 <Card.Img
//                   variant="top"
//                   style={{ width: "100%", height: "200px" }}
//                   src={p.imageUrl}
//                 />
//                 <Card.Body>
//                   <Card.Title>{p.title}</Card.Title>
//                   <Card.Text style={{ fontFamily: "system-ui sans-serif" }}>
//                     {p.description}
//                   </Card.Text>
//                 </Card.Body>

//                 <Card.Footer className="text-center">
//                   <Button variant="primary">
//                     <NavLink
//                       to={`/product/${p.id}`}
//                       className="text-white nav-link"
//                     >
//                       Add To Cart
//                     </NavLink>
//                   </Button>
//                 </Card.Footer>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </>
//   );
// }



import { NavLink, useSearchParams } from "react-router";
import Products from "../Dataset/Products.json";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function Filter() {
  let [text, setText] = useState("");
  let [category,setCategory] = useSearchParams();
  let [price,setPrice] = useSearchParams();

 
  const getSearchCategory = category.get('category');
  let getPrice = price.get('Price');

  const FilterItems = Products.filter(
    (p) =>
      p.title.toLowerCase().includes(text.toLowerCase()) &&
       (!getSearchCategory || p.category === getSearchCategory) ||
      Number(!getPrice || (getPrice) >=p.price)

  );

  

  return (
    <>
      <Container>
       <aside>
        <br />
        <input
        type="search"
        value={text}
        placeholder="Search Item ..."
        onChange={(e) => setText(e.target.value)}
      />
    
      <input list="category"
      id="selectedCategory" 
       placeholder="Category"
       onChange={(e)=>setCategory({category:e.target.value})} />

      <datalist id="category">
        {[...new Set(Products.map((p)=>p.category))].map((category,i)=>{
          return(
              <option key={i} value={category}>{category}</option>
          )
})}

      </datalist>

    

      <br /><br />

        <label htmlFor="price">Price</label>
        <input
          type="range"
          max={1000}
          onChange={(e)=>{setPrice({Price:e.target.value})}}
        />

       </aside>
        
      </Container>

      {FilterItems.length < 1 && "Search not found"}

      <div className="main-products p-3">
        <Row xs={1} sm={2} md={3} lg={4} xxl={6} className="g-3">
          {FilterItems.map((p) => (
            <Col key={p.id}>
              <Card style={{ width: "18rem", height: "414px" }}>
                <Card.Img
                  variant="top"
                  style={{ width: "100%", height: "200px" }}
                  src={p.imageUrl}
                />
                <Card.Body>
                  <Card.Title>{p.title}</Card.Title>
                  <Card.Text style={{ fontFamily: "system-ui sans-serif" }}>
                    {p.description}
                  </Card.Text>
                </Card.Body>

                <Card.Footer className="text-center">
                  <Button variant="primary">
                    <NavLink
                      to={`/product/${p.id}`}
                      className="text-white nav-link"
                    >
                      Add To Cart
                    </NavLink>
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}
