import Done from "../../../images/Done.svg"
import Cancelled from "../../../images/Cancelled.svg"
import Todo from "../../../images/To-do.svg"
import Backlog from "../../../images/Backlog.svg"
import InProgress from "../../../images/in-progress.svg"
import './StatusState.css'
const StatusState=({status})=>{
    const statusIcons = {
        "Done": <img src={Done} alt="Done" />,
        "Cancelled": <img src={Cancelled} alt="Cancelled" />,
        "Todo": <img src={Todo} alt="Todo" />,
        "Backlog": <img src={Backlog} alt="Backlog" />,
        "In progress": <img src={InProgress} alt="In progress" />,
      };

    return (
        <>
        <span className="statusIcon">
        {statusIcons[status]}
        </span>
        </>
    )
}
export default StatusState;