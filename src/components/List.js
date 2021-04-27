import Table from 'react-bootstrap/Table'

function List(props) {
    return (
      <>
        <h2>Employees</h2>
        <Table striped bordered hover variant="success">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Birthday</th>
              <th>E-Mail</th>
              <th>Password</th>
              <th>About</th>
            </tr>
          </thead>
          <tbody>
            {props.list.map(user => {
              return (
                <tr>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.gender}</td>
                  <td>{user.birthday}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.about}</td>
                </tr>)
            })}
          </tbody>
        </Table>
      </>
    )
  }
  export default List;