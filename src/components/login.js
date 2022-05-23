import { useState, useEffect } from "react";
import "../app.css";
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const initialValues = { username: "", email: "", password: "", Confirmpassword:"",PhoneNumber:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    // props.history.push('/chart_data')
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.PhoneNumber) {
      errors.PhoneNumber = "Phone number is required!";
    } else if (values.PhoneNumber.length < 10) {
        errors.PhoneNumber = "incurrect phone number";
      }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.Confirmpassword){
        errors.Confirmpassword = "Confirm password is required";
      } 
      else if (values.Confirmpassword !== values.password) {
        errors.Confirmpassword = "password is not matched";
      }
      else {
        navigate('/chart_data');
      }
    return errors;
  };

  return (
    <div className="main" >
      <div className="side_img" >
        <img src="https://www.slidexpress.com/wp-content/uploads/2018/10/angular-reactive-chart-hero.jpg" />
      </div>
      <div className="App-header">
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <h1>Create an account</h1>
            <div className="ui-form">
              <div className="field">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p style={{color:"red"}}>{formErrors.email}</p>
              <div className="field">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>
              <p style={{color:"red"}} >{formErrors.username}</p>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p style={{color:"red"}}>{formErrors.password}</p>
              <div className="field">
                <label>Confirm your Password</label>
                <input
                  type="password"
                  name="Confirmpassword"
                  placeholder="Confirm your Password"
                  value={formValues.Confirmpassword}
                  onChange={handleChange}
                />
              </div>
              <p style={{color:"red"}}>{formErrors.Confirmpassword}</p>
              <div className="field">
                <label>Phone number</label>
                <input
                  type="number"
                  name="PhoneNumber"
                  placeholder="Phone number"
                  value={formValues.PhoneNumber}
                  onChange={handleChange}
                />
              </div>
              <p style={{color:"red"}} >{formErrors.PhoneNumber}</p>
              <button  className="fluid-button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;