import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";

export default (props) => {
    return (
        <Card className="card" onClick={() => props.removeItem(props.item.id)}><CardContent>{props.item.value}</CardContent></Card>
    )
}
