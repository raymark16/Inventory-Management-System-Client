interface Props {
  label: string;
  type: string;
  changeValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  accept?: string;
  placeholder: string;
}

const InputComponent = (props: Props) => {
  return (
    <div className="d-flex flex-column mb-3">
      <label>{props.label}</label>
      <input
        style={{ height: "37px", borderRadius: "5px" }}
        onChange={props.changeValue}
        autoComplete="off"
        name={props.name}
        accept={props.accept}
        placeholder={props.placeholder}
        required
        type={props.type}
      />
    </div>
  );
};

export default InputComponent;
