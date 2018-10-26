import React from "react";
import PackingList from "./PackingList";
import Packed from "./Packed";

class Home extends React.Component {

    
    render() {
        return(
            <div>
                <header className="pageHeader">
                    <h1>Welcome to React Lunch &amp; Learn</h1>
                    <h4>aka Sara wrote an app for packing instead of packing...</h4>
                </header>
                
                <section className="content">
                    <div>
                        <PackingList />
                    </div>
                    <div>
                        <Packed />
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;