import Footer from './Footer';
import Header from './Header';

const index = ({children}) => {
    return (
        <div>
            <Header />
             {children}
            <Footer />
        </div>
    );
};

export default index;