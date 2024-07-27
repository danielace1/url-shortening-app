import { createContext, useContext, useState, useEffect } from "react";

const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    // Load URLs from localStorage on mount
    const savedUrls = JSON.parse(localStorage.getItem("URLs")) || [];
    setUrls(savedUrls);
  }, []);

  useEffect(() => {
    // Update localStorage whenever URLs change
    localStorage.setItem("URLs", JSON.stringify(urls));
  }, [urls]);

  const addUrl = (originalUrl, shortenedUrl) => {
    setUrls((prevUrls) => [...prevUrls, { originalUrl, shortenedUrl }]);
  };

  return (
    <UrlContext.Provider value={{ urls, addUrl }}>
      {children}
    </UrlContext.Provider>
  );
};

export const useUrls = () => useContext(UrlContext);
