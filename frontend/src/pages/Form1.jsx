import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

function Form1() {
  return (
    <main className="PageFormulaire">
      <Logo />
      <section className="Main">
        <div className="TitleContainer">
          <p>Votre relooking total en 5 minutes</p>
        </div>
        <form className="Form">
          <div className="QuestionContainer">
            <div className="Question">
              <p className="Ask">
                Combien de temps réservez-vous à votre routine maquillage ?
              </p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p>Je ne me maquille pas</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="MinutesMax">5 minutes max</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="Minutes">10 minutes</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="Minutes">15 minutes</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="MinutesOuPlus">20 minutes ou plus</p>
            </div>
          </div>
          <div className="QuestionContainer">
            <div className="Question">
              <p className="Ask">Quel est votre problème principal ?</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="Acn">Acné</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="Rougeurs">Rougeurs</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="PeauSChe">Peau sèche</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="TChes">Tâches</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="CheveuxSecs">Cheveux secs</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="CheveuxGras">Cheveux gras</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p>Aucun problème particulier</p>
            </div>
          </div>
          <div className="QuestionContainer">
            <div className="Question">
              <p className="Ask">
                Utilisez-vous un SPF (protection solaire) actuellement ?
              </p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="Oui">Oui</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="Non">Non</p>
            </div>
          </div>
          <div className="QuestionContainer">
            <div className="Question">
              <p className="Ask">Quel est votre budget beauté ?</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="20EurosParMois">20 euros par mois</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="Entre20Et35EurosParMois">
                Entre 20 et 35 euros par mois
              </p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="De3560EurosParMois">De 35 à 60 euros par mois</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="De60100EurosParMois">De 60 à 100 euros par mois</p>
            </div>
            <div className="Label">
              <input type="radio" className="Input" />
              <p className="100EurosParMois">100 euros par mois</p>
            </div>
          </div>
          <div className="QuestionContainer">
            <div className="Question">
              <p className="Ask">Quel âge avez-vous ?</p>
            </div>
            <div className="Label">
              <div className="Input2">
                <select name="age" id="age" className="Input2">
                  <option value="0">Age</option>
                  <option value="1">18</option>
                  <option value="2">19</option>
                  <option value="3">20</option>
                </select>
              </div>
            </div>
          </div>
          <div className="QuestionContainer">
            <div className="Question">
              <p className="Ask">Prenez maintenant un selfie.</p>
            </div>
          </div>
          <NavLink className="Button" to="/image1">
            PRENEZ-VOUS EN PHOTO
          </NavLink>
        </form>
      </section>
    </main>
  );
}

export default Form1;
