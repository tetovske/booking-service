import React from "react";
import ReactDOM from 'react-dom'

import ForUser from "./ForUsers/TableOfExperts";
import MyDashboard from "./MyDashboard/MyDashboard";
import ForExperts from "./ForExperts/Experts";
import Footer from "../components/Footer";
import MyPickers from "../components/MyPickers";

class App extends React.Component{
    render() {
        return (
            <>
                <div className="card-group">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-header">
                                <div className="card-header-title">
                                    Experts Dashboard
                                </div>
                            </div>
                            <hr/>
                            <ForUser />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-header">
                                <div className="card-header-title">
                                    My Dashboard
                                </div>
                            </div>
                            <hr/>
                            <MyDashboard />
                        </div>
                    </div>
                </div>
                {/*Проверка юзверя*/}
                <div className="container">
                    <ForExperts/>
                </div>
                <Footer />
            </>
        );
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById('root')
    app && ReactDOM.render(
        <div className="container-fluid">
            <App />
        </div>
        , app)
});

// window.onload = () => {
//     const app = document.getElementById('root')
//     app && ReactDOM.render(
//         <div className="container">
//             <App />
//         </div>
//         , app)
// };
