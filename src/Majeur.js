import React, { useState } from 'react';
import './App.css';
function Majeur() {
    const [birthDate, setBirthDate] = useState("");
    const [age, setAge] = useState(null);

    const calculerAge = (dateNaissance) => {
        const today = new Date();
        const birth = new Date(dateNaissance);

        let age = today.getFullYear() - birth.getFullYear();
        const monthDiff = today.getMonth() - birth.getMonth();

        // Ajustement si l'anniversaire n'est pas encore passé cette année
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
            age--;
        }

        return age;
    };

    const handleChange = (e) => {
        const value = e.target.value;
        setBirthDate(value);

        if (value) {
            setAge(calculerAge(value));
        } else {
            setAge(null);
        }
    };

    return (
        <div>
            <h2>Vérifier si une personne est majeure</h2>

            <label>Date de naissance :</label>
            <input 
                type="date" 
                value={birthDate} 
                onChange={handleChange}
                style={{ marginLeft: "10px" }}
            />

            {age !== null && (
                age >= 18 ? (
                    <div className="resultat-majeur">
                        ✅ Il est majeur, son âge est {age} ans.
                    </div>
                ) : (
                    <div className="resultat-mineur">
                        👶 Il est mineur, son âge est {age} ans.
                    </div>
                )
            )}
        </div>
    );
}

export default Majeur;