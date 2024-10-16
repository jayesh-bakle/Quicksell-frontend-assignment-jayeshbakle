import Card from "../../Card/Card";
import StatusState from "./StatusState";
import ColHeaderIcon from "../../DashBoardLayout/HeaderIcon";
const Status = (props) => {
  const { data, sortingOption, userName } = props;

  return (
    <>
      {Object.keys(data).map((status) => {
        let tickets = data[status];

        if (sortingOption === "title") {
          tickets = tickets
            .slice()
            .sort((a, b) => (a.title < b.title ? -1 : 1));
        } else if (sortingOption === "priority") {
          
          tickets = tickets.slice().sort((a, b) => b.priority - a.priority);
        }
        return (
          <div key={status} className="items">
            <h3 className="colHeader">
              <div className="colHeaderTitle">
                <StatusState status={status} /> {status}{" "}
                <span className="length"> {data[status].length}</span>
              </div>
              <div className="colHeaderIcon">
                <ColHeaderIcon />
              </div>
            </h3>
            {tickets.map((ticket) => (
              <Card
                key={ticket.id}
                ticket={ticket}
                userName={userName}
                section={"status"}
              />
            ))}
          </div>
        );
      })}
    </>
  );
};

export default Status;
