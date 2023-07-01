interface Props {
  icon: JSX.Element;
  color: string;
  title: string;
  data: number;
}
const InventoryCard = ({ icon, color, title, data }: Props) => {
  return (
    <div
      key={title}
      className="rounded pt-4 pb-4 mx-2"
      style={{
        marginBottom: 5,
        display: "flex",
        width: "25%",
        justifyContent: "space-evenly",
        background: color,
      }}
    >
      {icon}
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3 style={{ color: "white" }}>{title}</h3>
        <h1 style={{ color: "white", fontWeight: "bold" }}>{data}</h1>
      </div>
    </div>
  );
};

export default InventoryCard;
