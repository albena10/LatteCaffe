import React from 'react';
import Header from "./header/header";
import Sec1 from "./main/sec1/sec1"
import Sec2 from "./main/sec2/sec2"
import Sec3 from "./main/sec3/sec3"
import Sec4 from "./main/sec4/sec4"
import Sec5 from "./main/sec5/sec5"
import Sec6 from "./main/sec6/sec6"
import Footer from "./footer/footer"

const App = () => {
    return (
        <div>
            <Header />
            <Sec1 />
            <Sec2 />
            <Sec3 />
            <Sec4 />
            <Sec5 />
            <Sec6 />
            <Footer />
        </div>
    );
};

export default App;