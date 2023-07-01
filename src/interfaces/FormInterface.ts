export interface CustomElements extends HTMLFormControlsCollection {
  username?: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  phone?: HTMLInputElement;
}

export interface CustomForm extends HTMLFormElement {
  readonly elements: CustomElements;
}

export interface productElements extends HTMLFormControlsCollection {
  profilePicture: HTMLInputElement;
  productName: HTMLInputElement;
  productCategory: HTMLInputElement;
  productPrice: HTMLInputElement;
  productQuantity: HTMLInputElement;
  productDescription: HTMLInputElement;
}

export interface productForm extends HTMLFormElement {
  readonly elements: productElements;
}
