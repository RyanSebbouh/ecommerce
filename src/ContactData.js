import React, { Component } from 'react';

class ContactData extends Component {
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
                            placeholder="Saisissez votre email" 
                            className="form-input"
                        />
                    </div>

                    {/* Groupe Message */}
                    <div className="form-group">
                        <label>Message : </label>
                        <textarea 
                            placeholder="Saisissez votre message" 
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

export default ContactData;