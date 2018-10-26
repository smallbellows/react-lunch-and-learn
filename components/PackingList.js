import React from "react";
import itemsToPack from "../data/packing";

class PackingList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            itemsToPack: []
        }
    }
    componentWillMount() {
        // mocking doing a callout to get data
        this.setState({itemsToPack : itemsToPack});
    }

    render() {
        return(
            <div>
                <h2>Items to Be Packed</h2>

                <ul>
                    {
                        this.state.itemsToPack.map((item) => {
                            return (
                                <li key={item.name}>
                                    <span>
                                        <div>Name: {item.name}</div>
                                        <div>Room: {item.room}</div>
                                        {item.heavy && <div>Heavy</div>}
                                        {item.fragile && <div>Fragile</div>}
                                    </span>
                                    
                                    <button className="button">Pack</button>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default PackingList;