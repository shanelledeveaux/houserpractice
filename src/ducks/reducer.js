import axios from "axios";

const initialState = {
  name: "",
  address: "",
  city: "",
  userState: "",
  zipcode: "",
  imageurl: "",
  mortgage: "",
  rent: "",
  houses: []
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_USERSTATE = "UPDATE_USERSTATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_IMAGE = "UPDATE_IMAGE";
const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
const UPDATE_RENT = "UPDATE_RENT";
const SUBMIT_HOUSE = "SUBMIT_HOUSE";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { name: action.payload });

    case UPDATE_ADDRESS:
      return Object.assign({}, state, { address: action.payload });

    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.payload });

    case UPDATE_USERSTATE:
      return Object.assign({}, state, { userState: action.payload });

    case UPDATE_ZIP:
      return Object.assign({}, state, { zipcode: action.payload });

    case UPDATE_IMAGE:
      return Object.assign({}, state, { imageurl: action.payload });

    case UPDATE_MORTGAGE:
      return Object.assign({}, state, { mortgage: action.payload });

    case UPDATE_RENT:
      return Object.assign({}, state, { rent: action.payload });

    case SUBMIT_HOUSE:
      return Object.assign({}, state, { houses: action.payload.data });

    default:
      return state;
  }
}

export default reducer;

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}

export function updateAddress(address) {
  return {
    type: UPDATE_ADDRESS,
    payload: address
  };
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}

export function updateUserState(userState) {
  return {
    type: UPDATE_USERSTATE,
    payload: userState
  };
}

export function updateZip(zipcode) {
  return {
    type: UPDATE_ZIP,
    payload: zipcode
  };
}

export function updateImage(imageurl) {
  return {
    type: UPDATE_IMAGE,
    payload: imageurl
  };
}

export function updateMortgage(mortgage) {
  return {
    type: UPDATE_MORTGAGE,
    payload: mortgage
  };
}

export function updateRent(rent) {
  return {
    type: UPDATE_RENT,
    payload: rent
  };
}

export function submitHouse(
  name,
  address,
  city,
  userState,
  zipcode,
  imageurl,
  mortgage,
  rent
) {
  //   console.log(action.payload);
  return {
    type: SUBMIT_HOUSE,
    payload: axios.post("/api/houses", {
      name,
      address,
      city,
      userState,
      zipcode,
      imageurl,
      mortgage,
      rent
    })
  };
}
