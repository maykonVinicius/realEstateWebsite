import Navigation from "@/features/common/modules/Navigation";
import Footer from "@/features/common/modules/Footer";

const DefaultLayout = ({children}) => {
    return(
        <>
          <Navigation />
            {children}
          <Footer />  
        </>
    )
}

export default DefaultLayout;