import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { FormRow, Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useNavigate } from 'react-router-dom';

const initialState = {
  usernname: '',
  email: '',
  password: '',
  isMember: true,
};
// if possible prefer local state

const Register = () => {
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  // redux toolkit and useNavigate later

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, isMember } = values;
    if (!email || !password || (!isMember && !username)) {
      toast.error('Please Fill Out All Fields');
      return;
    }

    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ username, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {!values.isMember && (
          <FormRow
            type='text'
            name='username'
            vlaue={values.username}
            handleChange={handleChange}
          />
        )}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading ? 'loading...' : 'submit'}
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
