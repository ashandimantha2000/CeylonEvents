import CreateComp from '../components/Event/CreateComp/CreateComp'
import { useState, useEffect } from "react";

function Create() {
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
        <CreateComp />
    </div>
  )
}

export default Create