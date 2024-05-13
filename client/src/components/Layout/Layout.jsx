import React from 'react'
import { Helmet } from "react-helmet";
import Header from './Header';
import { Toaster } from 'react-hot-toast';
import Footer from './Footer';

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
     <div>
        <Helmet>
        <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>
        <Header/>
        <Toaster/>
        <main style={{ minHeight: "50vh" }}>{children}</main>
        <Footer/>
     </div>
    </>
  )
}

Layout.defaultProps = {
    title: "The BGS Energy",
    description: "welcome to BGS Energy",
    keywords: "top-product, trending-product",
    author: "BGS Energy",
  };
  

export default Layout