import React from 'react'
import Header from './Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



function Login() {
  return (
    <>
       
    <div className="row">
    <div className="col-md-6 mb-4">
    <div>

  
    <p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
            </svg>  &nbsp;
        56 reviews  &nbsp;
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
            </svg>
            &nbsp; .        verified   &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-star" viewBox="0 0 16 16">
                    <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.178.178 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.178.178 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.178.178 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.178.178 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.178.178 0 0 0 .134-.098L7.84 4.1z"/>
                     <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                     </svg>. &nbsp; superhost
        </p>
        <p>
        We offer affordable accommodation options that cater to students' budgets. We understand the financial constraints that students may face, and we strive to provide cost-effective living arrangements without compromising on quality and comfort.

        </p>
        <p>
        Our hostel is strategically located near the university campus, providing students with easy access to academic buildings, libraries, and other university facilities. This proximity saves students time and commuting costs, allowing them to focus on their studies and actively participate in university life.

        </p>
        
        <p>
        We are committed to providing quality accommodation that aligns with the needs and preferences of university students. Our goal is to create a supportive and enriching living environment that complements the academic journey of our residents.

        </p>
        <hr/>
</div>
    </div>

    <div className="col-md-6 mb-4">
    <Card style={{ width: '25rem', borderRadius: '15px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }}>
            <Card.Body>
                    <Card.Title className="text-center">Check in</Card.Title>
                    <hr/>
                    <Card.Text>
                    
                    
                    </Card.Text>
                    <div className="row">
                    <div className="col-md-6 mb-4">
                    <h6>Prices of rooms at this hostel</h6>
                    <p>Single Room: </p>
                    <p>Double Rooms:</p>
                    Total:
                    </div>

                    <div className="col-md-6 mb-4">
                            <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-graph-up" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
</svg></p>
                         
                            
                 <p>UGX. 1000000</p>
                 <p>UGX. 870000</p>
                 <hr/>
                 ########
                    </div>
                    </div>
                    <div class="d-grid gap-2  mx-auto">
                    <button class="btn btn-primary" type="button">Button</button>
                    </div>
                   

            </Card.Body>
    </Card>


    </div>
    </div>         



</> 


  )
}

export default Login
