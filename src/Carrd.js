import react from 'react';
import { CCard,CCardBody , CCardTitle,CCardText,CButton} from '@coreui/react';
import "./Carrd.css";
import GetDate from "./GetDate";
const Carrd=({props})=>{

return(
  <div class="cardC my-2 mx-2 card" style={{width: '18rem'}}>
                      <div class="card-body">
                          <h5 class="card-title">{props}</h5>
                          <p class="card-text"><GetDate/></p>
                      </div>
                  </div>

);
}
export default Carrd;
