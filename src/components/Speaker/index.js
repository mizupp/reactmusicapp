import React, {useRef} from "react";
import "../NavBar/navstyles.css"
const Speaker = () => {
   
//     const [scrollTop, setScrollTop] = React.useState(false);
//     const divRef = useRef(null);
//     React.useEffect(() => {
//       window.addEventListener("scroll", () => {
//         if (window.pageYOffset > 340) {
//           setScrollTop(true);
//         } else {
//           setScrollTop(false);
//         }
//       });
//     }, []);

//     const bottomToTop = () => {
//       divRef.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     };

    return(
    <>
 
    {/* <div onClick={bottomToTop} id="scrollup" className="notch">
            <div className="speaker"></div>
            <div className="camera"></div>
            {scrollTop}
    </div> */}
    <div className="notch">
            <div className="speaker"></div>
            <div className="camera"></div>
    </div>
    </>
    );
}

export default Speaker;