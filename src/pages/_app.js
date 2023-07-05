import { AuthProvider } from '@/context/AuthProvider';
import { EventProvider } from '@/context/EventProvider'
import { UserProvider } from '@/context/UserProvider';
import '@/styles/globals.css'
import { ThemeProvider } from "@material-tailwind/react";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GoogleOAuthProvider clientId="338157192481-o2dsck2qt1ljb5cj4cdfdt2tbgo4ud1s.apps.googleusercontent.com">
        <AuthProvider>
          <EventProvider>
            <UserProvider>
              <Component {...pageProps} />
            </UserProvider>
          </EventProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
      <ToastContainer />
    </>
  )
}
