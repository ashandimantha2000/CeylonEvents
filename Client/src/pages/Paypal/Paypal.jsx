import PaypalComp from '../../components/PaypalComp/PaypalComp'
import { useState, useEffect } from "react";

function Paypal() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
  
    if (!token) {
      window.location.href = "/login";
    } else {
      setIsAuthorized(true);
    }
  }, []);
  if (!isAuthorized) {
    return null; 
  }

  return (
    <div>
      <PaypalComp />
    </div>
  )
}

export default Paypal