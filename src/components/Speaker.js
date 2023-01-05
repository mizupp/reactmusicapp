import React from "react";
import "./navstyles.css"
const Speaker = () => {
    const [scrollTop, setScrollTop] = React.useState(false);
    React.useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 340) {
          setScrollTop(true);
        } else {
          setScrollTop(false);
        }
      });
    }, []);
    const bottomToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    return(
    <>
 
    <div onClick={bottomToTop} id="scrollup" className="notch">
            <div className="speaker"></div>
            <div className="camera"></div>
            {scrollTop}
    </div>

    </>
    );
}

export default Speaker;