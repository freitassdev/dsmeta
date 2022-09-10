import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/requests";
import './styles.css';
import axios from 'axios';
import { toast } from "react-toastify";
type Props = {
    saleId: Number;
}

function handleClick(id :Number) {
    axios(`${BASE_URL}/sales/${id}/notification`).then(r => {
        toast.info("SMS enviado com sucesso")
    })
}
function NotificationButton( {saleId} : Props ) {

    return (
            <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
                <img src={icon} alt="Notificar" />
            </div>
    )
}

export default NotificationButton;