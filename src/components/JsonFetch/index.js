import React from "react";
import useJsonFetch from "../../hooks/useJsonFetch";

const JsonFetch = (props) => {
    const [data, loading, error] = useJsonFetch(props.url);

    return (
        <div className="item">
            <p>url: {props.url}</p>
            <p>data: {data}</p>
            <p>error: {error}</p>
            <p>loading: {loading ? "true" : "false"}</p>
        </div>
    );
};

export default JsonFetch;