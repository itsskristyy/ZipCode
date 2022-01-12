import React from 'react';

class Navbar extends React.Component {
  render(){
    return (
      <div>
      <nav className = "NavbarItems">
        <h1 style={styles.barlogo}> Zip Code Search </h1>
        </nav>
        <div style = {styles.buttonreset}>
        <button onClick={() => window.location.reload(false)}>Click to reload!</button>
        </div>
        </div>


    )
  }

}

export default Navbar;



const styles = {
    barlogo:{
        fontFamily:"Open Sans",
        textAlign: 'center',
        backgroundColor: '#000000',
        color: 'white',
        fontSize: "30px",
        paddingTop: "50px",
        paddingBottom: "50px",
         marginTop: 0,
     },

     buttonreset:{
       display: "flex",
          justifyContent: "center",
          alignItems: "center"
     },


}
