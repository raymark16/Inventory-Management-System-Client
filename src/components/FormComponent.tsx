import InputComponent from "./InputComponent";
interface CustomElements extends HTMLFormControlsCollection {
  username: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  phone: HTMLInputElement;
}

interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}
interface Props {
  setUserPicture?: (files: File | undefined) => void;
  handleSubmit: (e: React.FormEvent<CustomForm>) => void;
  usernameIncluded?: boolean;
  emailIncluded?: boolean;
  passwordIncluded?: boolean;
  phoneIncluded?: boolean;
  fileIncluded?: boolean;
  buttonName: string;
}
const FormComponent = ({
  setUserPicture = () => {
    return undefined;
  },
  handleSubmit,
  usernameIncluded = false,
  emailIncluded = false,
  passwordIncluded = false,
  phoneIncluded = false,
  fileIncluded = false,
  buttonName,
}: Props) => {
  return (
    <form onSubmit={handleSubmit}>
      {usernameIncluded && (
        <InputComponent
          label="Username"
          type="text"
          placeholder="Enter Username"
          name="username"
        />
      )}
      {emailIncluded && (
        <InputComponent
          label="Email"
          type="email"
          placeholder="Enter Email"
          name="email"
        />
      )}
      {passwordIncluded && (
        <InputComponent
          label="Password"
          type="password"
          placeholder="Enter Password"
          name="password"
        />
      )}
      {phoneIncluded && (
        <InputComponent
          label="Phone"
          type="text"
          placeholder="Enter Phone"
          name="phone"
        />
      )}
      {fileIncluded && (
        <InputComponent
          label="Photo"
          accept=".png, .jpg, .jpeg"
          changeValue={(e) => {
            const files = e.target.files ? e.target.files[0] : undefined;
            setUserPicture(files);
          }}
          name="profilePicture"
          placeholder="Profile Picture"
          type="file"
        />
      )}

      <button type="submit" className="btn btn-primary w-100">
        {buttonName}
      </button>
    </form>
  );
};

export default FormComponent;
