import React from 'react';
import { Badge } from "react-bootstrap"

function SevBadge(props) {
    const sevColor = (sev) => {
        if (sev >= 0.75) {
            return "danger"
        } else if (sev < 0.75 && sev >= 0.5) {
            return "warning"
        } else if (sev < 0.5 && sev >= 0.25) {
            return "primary"
        } else {
            return "success"
        }
    }

    const sev = props.severity / 100
    return (
        <Badge variant={sevColor(sev)} >
            {sev}
        </Badge >
    )
}

export default SevBadge