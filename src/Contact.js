import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div style={{ padding: "20px", backgroundColor: "#e0f7fa" }}>
                <h2>Contactez-nous</h2>
                <form>
                    <label>Email : </label>
                    <input type="email" placeholder="votre@email.com" />
                    <br /><br />
                    <label>Message : </label>
                    <textarea placeholder="Votre message..."></textarea>
                    <br /><br />
                    <button>Envoyer</button>
                </form>
            </div>
        );
    }
}

export default Contact;