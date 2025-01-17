import {useLocation} from 'react-router-dom';

//import Form from "./Form";

function User(){
  const location = useLocation()

  const {name,password} = location.state || {}
  
    return(
      <div className="user-container" style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '50px',
        padding: '20px',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9'
      }}>
        <table style={{
          width: '50%',
          borderCollapse: 'collapse',
          border: '2px solid black',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
          <thead>
            <tr style={{ backgroundColor: '#f2f2f2' }}>
              <th style={{ padding: '10px', textAlign: 'left', fontSize: '20px' }}>Name</th>
              <th style={{ padding: '10px', textAlign: 'left', fontSize: '20px' }}>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px' }}>{name}</td>
              <td style={{ padding: '10px' }}>{password}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    )
}

export default User