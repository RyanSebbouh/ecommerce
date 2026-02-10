import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            // On utilise la classe CSS définie plus haut
            <div className="contact-card">
                <h2>Contactez-nous</h2>
                
                <form>
                    {/* Groupe Email */}
                    <div className="form-group">
                        <label>Email : </label>
                        <input 
                            type="email" 
                            placeholder="ryansebbouh2@gmail.com" 
                            className="form-input"
                        />
                    </div>

                    {/* Groupe Message */}
                    <div className="form-group">
                        <label>Message : </label>
                        <textarea 
                            placeholder="Yo c'est moi" 
                            className="form-input"
                            rows="4" // Pour donner un peu de hauteur au textarea
                        ></textarea>
                    </div>

                    <button className="btn-envoyer">Envoyer</button>
                </form>
            </div>
        );
    }
}

export default Contact;