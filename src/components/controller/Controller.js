import React, { useState, useEffect, useRef } from "react";
import generatePinAsInteger from "../util/numberGenerators/GeneratePinAsInteger";
import pinWasGeneratedValidator from "../util/numberValidators/PinWasGeneratedValidator";
import pinIsTooSimpleValidator from "../util/numberValidators/PinIsTooSimpleValidator";
import saveToLocalStorage from "../model/SaveToLocalStorage";
import getDataFromLocalStorage from "../model/GetDataFromLocalStorage";
import View from "../view/View";

function Controller() {
  const [newPin, setNewPin] = useState();
  const didPageMount = useRef(false);
  const usernameRef = useRef("");
  const [listOfUsers, setListOfUsers] = useState([[], []]);
  const [toggleUsersList, setToggleUsersList] = useState(false);

  // Select the type of PIN generator
  const pinGenerator = generatePinAsInteger;

  function generatePin() {
    let pin = pinGenerator();

    while (pinIsTooSimpleValidator(pin) || pinWasGeneratedValidator(pin)) {
      pin = pinGenerator;
    }

    setNewPin(pin);
  }

  function showListOfUsers() {
    setListOfUsers(getDataFromLocalStorage());
  }

  useEffect(() => {
    if (didPageMount.current) {
      saveToLocalStorage(newPin, usernameRef.current.value);
    }
  }, [newPin]);

  useEffect(() => {
    didPageMount.current = true;
  }, []);

  return (
    <>
      <View
        newPin={newPin}
        generatePinFunc={generatePin}
        usernameRef={usernameRef}
        showListOfUsersFunc={showListOfUsers}
        listOfUsers={listOfUsers}
        setToggleUsersList={setToggleUsersList}
        toggleUsersList={toggleUsersList}
      />
    </>
  );
}

export default Controller;
