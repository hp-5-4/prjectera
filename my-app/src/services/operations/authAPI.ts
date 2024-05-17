import { setLoading, setToken, setUser } from "../../slices/authSlice";
import { apiConnector } from "../apiConnector";
import { Dispatch } from 'redux';
import { useNavigate } from 'react-router-dom';

const OTP_API = "http://localhost:5000/api/users/send-otp";
const SIGNUP_API = "http://localhost:5000/api/users/signup";
const LOGIN_API = 'http://localhost:5000/api/users/login';

export function sendOtp(email: string, navigate: ReturnType<typeof useNavigate>) {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", OTP_API, { email });

      console.log("OTP Response", response);

      if (!response.data.success) {
        throw new Error(response.data.message || 'Failed to send OTP');
      }

      navigate("/verify-email");
    } catch (error) {
      console.error('Send OTP Error:');
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function signUp(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  otp: string,
  navigate: ReturnType<typeof useNavigate>
) {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
      });

      console.log(response);

      if (!response.data.success) {
        throw new Error(response.data.message || 'Signup failed');
      }
      navigate("/login");
    } catch (error) {
      console.error('Signup Error:', error);
      navigate("/signup");
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function login(email: string, password: string, navigate: ReturnType<typeof useNavigate>) {
  return async (dispatch: Dispatch) => {
    dispatch(setLoading(true));
    try {
      const response = await apiConnector('POST', LOGIN_API, { email, password });

      console.log('LOGIN API RESPONSE:', response);

      if (!response.data.success) {
        throw new Error(response.data.message || 'Login failed');
      }

      const userImage = response.data.user.image
        ? response.data.user.image
        : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`;

      dispatch(setToken(response.data.token));
      dispatch(setUser({ ...response.data.user, image: userImage }));
      localStorage.setItem('token', JSON.stringify(response.data.token));
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/dashboard/my-profile');
    } catch (error) {
      console.error('LOGIN API ERROR:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };
}

export function logout(navigate: ReturnType<typeof useNavigate>) {
  return (dispatch: Dispatch) => {
    dispatch(setToken(null));
    dispatch(setUser(null));

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/");
  };
}
