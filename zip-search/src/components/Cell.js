import React from 'react'


export default function Cell(props){
    return (
        <div style={styles.cellStyle}>
            <p style={styles.titleStyle}>{props.info.LocationText}</p>
            <ul style={styles.tableStyle}>
                {Object.keys(props.info).map((k) => <li key={k} style={styles.rowStyle}>{`${k}: ${props.info[k]}`}</li>)}
            </ul>

        </div>
    )



}

const styles = {
    cellStyle:{
        width: "100%",
        textAlign: "center",
        fontFamily:"sans-serif",
        margin: "1 rem"

    },
    titleStyle:{
        fontFamily:"sans-serif",
        fontSize: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        backgroundColor: "#7D7D7D",
        color: "white"
    },
    tableStyle:{
        paddingRight: "300px"
    },
    rowStyle:{



    }

}