import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

export default (props) => {
    return (
        <Card className="card" onClick={() => props.removeItem(props.item.id)}><CardContent>{props.item.value}</CardContent></Card>
    )
}
