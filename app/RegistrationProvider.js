import { RegistrationProvider } from '../app/components/registerationPage/RegistrationContext';

function MyApp({ Component, pageProps }) {
  return (
    <RegistrationProvider>
      <Component {...pageProps} />
    </RegistrationProvider>
  );
}

export default MyApp;
