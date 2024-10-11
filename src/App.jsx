import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const handleOnSubmit = (event) => {
    const data = {
      stuName,
      stuAge,
      stuContact,
      gudName,
      gudAddress,
      gudContact
    };

    fetch("http://localhodt:3006/api/student/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        alert(data.message);
      } else {
        alert('Registration failed');
      }
    });

};

return (
  <Container>
    <Row>
      <Col style={{ width: '300px' }}>
        <div >
          <form className='mt-2' method='post' onSubmit={handleOnSubmit}>
            <fieldset className='mt-2 m-lg-3' style={{ width: '300px', padding: '20px', border: '1px solid', borderRadius: '10px', boxSizing: 'border-box' }}>
              <div className='mt-2'>
                <h3>Student Information</h3>
                <hr />
                <div className="mb-1 m-lg-3">
                  <label for="studentName" className="form-label">Name : </label>
                  <input type="text" className="form-control" id="stName" value={stuName} placeholder="Name" />
                </div>
                <div className="mb-1 m-lg-3">
                  <label for="studentAge" className="form-label">Age : </label>
                  <input type="text" className="form-control" id="stAge" value={stuAge} placeholder="Age" />
                </div>
                <div className="mb-1 m-lg-3">
                  <label for="studentContact" className="form-label">Contact : </label>
                  <input type="text" className="form-control" id="stName" value={stuContact} placeholder="Contact" />
                </div>
                <br />
                <h3>Guardian Information</h3>
                <hr />
                <div className="mb-1 m-lg-3">
                  <label for="gudName" className="form-label">Name : </label>
                  <input type="text" className="form-control" id="gudName" value={gudName} placeholder="Name" />
                </div>
                <div className="mb-1 m-lg-3">
                  <label for="gudAddress" className="form-label">Address : </label>
                  <input type="text" className="form-control" id="gudAddress" value={gudAddress} placeholder="Name" />
                </div>
                <div className="mb-1 m-lg-3">
                  <label for="gudContact" className="form-label">Contact : </label>
                  <input type="text" className="form-control" id="gudContact" value={gudContact} placeholder="Name" />
                </div>
                <br />
                <div className='buttons'>
                  <button type="button" className="btn btn-warning" style={{ marginLeft: '30px', marginRight: '50px' }}>Clear</button>
                  <button type="button" className="btn btn-primary">Register</button>
                </div>
                <br />
              </div>
            </fieldset>
          </form>
        </div>
      </Col>
      <Col>
        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Student Id</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>
                  <Button variant="info">View</Button>{' '}
                </td>

              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                  <Button variant="info">View</Button>{' '}
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
                <td>
                  <Button variant="info">View</Button>{' '}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    </Row>
  </Container>
)
}

export default App;
