import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import '../src/style.css'

// Next.jsでは必要ない
// import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
