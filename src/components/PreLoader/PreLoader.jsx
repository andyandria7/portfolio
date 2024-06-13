import { useEffect } from "react"
import "./PreLoader.css"
import { preLoaderAnim } from "../../animations";

const PreLoader = () => {
  useEffect(()=>{
    preLoaderAnim()
  },[]);
  return (
    <>
      <div className="preloader">
        <div className="texts-container">
          <span>Bienvenue</span>
          <span>Dans</span>
          <span>Le</span>
          <span>Portfolio</span>
          <span>D'</span>
          <span>Andy</span>
        </div>
      </div>
    </>
  )
}

export default PreLoader