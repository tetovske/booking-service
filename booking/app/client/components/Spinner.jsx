import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

const Spinner = () => {
    return (
        <div className="d-flex align-items-center justify-content-center py-5">
            <CircularProgress />
        </div>
    );
};

export default Spinner;
