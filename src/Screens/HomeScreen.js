import React from 'react';
import {Carousel, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeScreen = () => {

    return(
        <>

        <div>
            <marquee>VTU Results 2024 out - Check Exam results here !!!!
                <Link to='/result/loginPage'>Click here....</Link> Best of Luck !!!
            </marquee>
        </div>

        <div>
        <Carousel>
           <Carousel.Item>
             <img height='550px'
               className="d-block w-100"
               src="IMAGES/img1.jpg"
               alt="First slide"
             /> 
            </Carousel.Item>
 
             <Carousel.Item>
              <img height='550px'
                className="d-block w-100"
                src="IMAGES/imd3.jpg"
                alt="Second slide"
              />
             </Carousel.Item>

             <Carousel.Item>
              <img height='550px'
                className="d-block w-100"
                src="IMAGES/img4.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img height='550px'
      className="d-block w-100"
      src="IMAGES/img5.jpg"
      alt="First slide"
    /> 
  </Carousel.Item>

  <Carousel.Item>
    <img height='550px'
      className="d-block w-100"
      src="IMAGES/img2.jpg"
      alt="First slide"
    /> 
  </Carousel.Item>
</Carousel>
<br></br>

 <div>
      <Row>
        <Col>
        <h3><Link to='/about'>Vision</Link></h3>
        <p className='p-style'>To become an outstanding Technological University at the cutting edge of Science and Technology 
            that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology 
            oinnovation for Industry and Society.</p>

            <Link to='/about' className='btn btn-warning' >Read More</Link>
            
        </Col>

        <Col>
        <h3><Link to='/about'>Mission</Link></h3>
        <p className='p-style'> To plan the development of technical education, to establish value-based and need-based education and 
            training in engineering and technology, with a view to generate qualified and competent manpower,
             responsive to technological and societal needs.</p>

           
             <Link to='/about' className='btn btn-warning' >Read More</Link>

        </Col>

        <Col>
        <h3><Link to='/about'>Mandate</Link></h3>
        <p className='p-style'>The Visvesvaraya Technological University has been established by the Government of 
            the Karnataka in order to Promote planned and sustainable development of technical education consistent 
            with state and national policies.<br/>
           *Design need based programs that ensure adequate human resource of the right kind.<br/>
            *Establish objective evaluation and certification systems for students,programs and institutions.
           *Collaborate with national and international institutions R&D establishments organizations like AICTE,
            MHRD, UGC, etc.industry and user agencies.</p>

            <Link to='/about' className='btn btn-warning' >Read More</Link>
        </Col>
      </Row>
 </div>
        </div>
    
        </>
    )
}
export default HomeScreen