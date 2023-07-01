import InventoryCard from "./InventoryCard";
import { BsCart4, BsCartX } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
interface Props {
  icon: JSX.Element;
  color: string;
  title: string;
  data: number;
}
const InventoryStats = () => {
  const productTitle: Props[] = [
    {
      icon: <BsCart4 size={100} color="white" />,
      color: "violet",
      title: "Total Products",
      data: 25,
    },
    {
      icon: <RiMoneyDollarCircleLine size={100} color="white" />,
      color: "green",
      title: "Total Store Value",
      data: 25,
    },
    {
      icon: <BsCartX size={100} color="white" />,
      color: "red",
      title: "Out of Stock",
      data: 25,
    },
    {
      icon: <TbCategory size={100} color="white" />,
      color: "blue",
      title: "All Categories",
      data: 25,
    },
  ];
  return (
    <div>
      <h1 className="font-bold ms-4">Inventory Stats</h1>
      <div className="d-flex m-3">
        {productTitle.map((item) => {
          return (
            <InventoryCard
              key={item.title}
              icon={item.icon}
              color={item.color}
              title={item.title}
              data={item.data}
            />
          );
        })}
      </div>
      <hr
        className=" ms-4 me-4"
        style={{ border: "none", height: "5px", backgroundColor: "blue" }}
      ></hr>
    </div>
  );
};

export default InventoryStats;
