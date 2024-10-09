import "./HeaderIcon.css"
import ThreeDots from "../../images/3 dot menu.svg"
import Plus from "../../images/add.svg"
const HeaderIcon = () => {
  return (
    <>
      <div className="colHeaderIcon">
        <img src={Plus} alt="Plus" height={25} width={25}/>
        <img src={ThreeDots} alt="ThreeDots" height={25} width={25}/>
      </div>
    </>
  );
};
export default HeaderIcon;
