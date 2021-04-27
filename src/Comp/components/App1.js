import React from "react";
import { Formik, Form, FieldArray, useFormikContext } from "formik";
import "./styles.css";

const peopleData = {
  count: 2,
  people: [
    {
      name: "John",
      contacts: [{ number: "3837" }, { number: "111111111" }]
    },
    { name: "Doe", contacts: [] }
  ]
};

const membersData = {
   members: [
            {
              formalFullName: '',
              familiarShortName: '',
              telephoneNumber: '',
              role: 'Admin',
              emails: [],
              dateOfBirth: '',
              sex: '',
              otherSexText: '',
              alternativeIdentifiers: '',
            },
          ]
}

const Contacts = ({ personIndex, contactsArrayHelpers }) => {
  const [number, setNumber] = React.useState("");
  const { values } = useFormikContext();

  const handleAddContactNumber = () => {
    const contact = {};
    contact.number = number;

    contactsArrayHelpers.push(contact);
    setNumber("");
  };

  const handleChange = event => {
    setNumber(event.currentTarget.value);
  };

  return (
    <>
      {values.people[personIndex].contacts.map((contact, index) => (
        <div key={contact.number + index}>
          {". " + contact.number}
          <br />
        </div>
      ))}
      <input type="text" value={number} onChange={handleChange} />
      <button type="button" onClick={handleAddContactNumber}>
        add contact to {values.people[personIndex].name}
      </button>
    </>
  );
};

const People = ({ peopleArrayHelpers }) => {
  const [name, setName] = React.useState("");
  const [formalFullName, setFormalFullName] = React.useState("");
  const [familiarShortName, setFamiliarShortName] = React.useState("");
  const [role, setRole] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");
  const [sex, setsex] = React.useState("");
  const [otherSexText, setOtherSexText] = React.useState("");
  const [alternativeIdentifiers, setAlternativeIdentifiers] = React.useState("");

  

  const { values, setFieldValue } = useFormikContext();

  const handleAddPerson = () => {
    const person = {};
    person.name = name;
    person.formalFullName = formalFullName;
    person.familiarShortName = familiarShortName;
    person.dateOfBirth = dateOfBirth;
    person.sex = sex;
    person.emails = [];
    person.role = role;
    person.otherSexText = otherSexText;
    person.alternativeIdentifiers = alternativeIdentifiers;
    person.contacts = [];

    peopleArrayHelpers.push(person);
    setFieldValue("count", values.count + 1);
    setName("");
    setFormalFullName('');
    setFamiliarShortName('');
    setRole("");
    setDateOfBirth('');
    setsex('');
    setOtherSexText('');
    setAlternativeIdentifiers('');
  };

  const handleChange = event => {
    setName(event.currentTarget.value);
  };

  return (
    <>
      <input type="text" value={name} onChange={handleChange} />
      <button type="button" onClick={handleAddPerson}>
        add person
      </button>
      {values.people.map((person, index) => (
        <div key={person.name + index}>
          <br />
          <span>{person.name}'s contacts:</span>
          <FieldArray name={`people[${index}].contacts`}>
            {arrayHelpers => (
              <>
                <br />
                <Contacts
                  personIndex={index}
                  contactsArrayHelpers={arrayHelpers}
                />
              </>
            )}
          </FieldArray>
        </div>
      ))}
    </>
  );
};

const MyForm = () => {
  return (
    <Formik initialValues={{ ...peopleData }} enableReinitialize={true}>
      {({ values }) => (
        <Form
          onChange={event => {
            console.log(
              "name",
              event.target.name,
              " | value",
              event.target.value
            );
          }}
        >
          <div style={{ display: "flex" }}>
            <div style={{ float: "left" }}>
              <span>number of people: {values.count}</span>
              <FieldArray name="people">
                {arrayHelpers => {
                  return (
                    <>
                      <br />
                      <People peopleArrayHelpers={arrayHelpers} />
                    </>
                  );
                }}
              </FieldArray>
            </div>
            <div>
              <pre style={{ fontSize: "65%" }}>
                {JSON.stringify(values, null, 2)}
              </pre>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default function App1() {
  return <MyForm />;
}