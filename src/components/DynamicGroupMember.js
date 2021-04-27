import React, { useState, useEffect } from 'react';

import {useLocation} from "react-router-dom";
import {
  Divider,
  Button,
    Grid,
    Card,
    CardContent,
  Select,
Typography,
  TextField,
  CircularProgress,
} from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { FieldArray, Form, Formik, getIn } from 'formik';
import * as Yup from 'yup';
import { DatePickerField, SelectField } from './FormFields';



export default function DynamicGroupMember() {
    const [groupMembersCount, setGroupMembersCount] = useState(0);
    const [show, setShow] = useState(false);
    const [groupDetails, setGroupDetails] = useState([
        {fullName: "", phoneNo: "", gender: ""},
    ]);

    function handleChange(event, index) {
        console.log(event.target.value, index);
        let newArr = [...groupDetails]; // copying the old datas array
        let item = newArr[index];
        item = {...item, [event.target.name]: event.target.value};
        newArr[index] = item;

        setGroupDetails(newArr);
    }

    return (
        <div>
            Number of Group: <TextField name="groupMembersCount" onChange={(event) => {
            setGroupMembersCount(event.target.value)
        }}/>
            {Array.apply(null, {length: groupMembersCount}).map(
                (e, i) => (
                    <div key={i}>
                        <strong>Member #{i + 1}</strong>
                        <div className="getIndex" name={i + 1}>
                            <TextField
                                id={`name${i + 1}`}
                                name="fullName"
                                variant="outlined"
                                margin="none"
                                label="Name"
                                onChange={(event) => {
                                    handleChange(event, i)
                                }}
                            />
                            <TextField
                                id={`phoneNo${i + 1}`}
                                name="phoneNo"
                                variant="outlined"
                                margin="none"
                                label="Mobile Number"
                                onChange={(event) => {
                                    handleChange(event, i)
                                }}
                            />
                            <Select
                                id={`gender${i + 1}`}
                                name="gender"
                                variant="outlined"
                                margin="none"
                                label="Gender"
                                onChange={(event) => {
                                    handleChange(event, i)
                                }}
                            >
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                                <option value="OTHER">Other</option>
                            </Select>
                        </div>
                    </div>
                )
            )}
            <Button onClick={() => {
                setShow(true)
            }}>Show</Button>
            {
                show ?
                    groupDetails.map(member =>
                        <Card>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                {member.fullName}
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {member.phoneNo}
                            </Typography>
                            <Typography color="textSecondary">
                                {member.gender}
                            </Typography>
                        </CardContent>
                    </Card>) : null
            }
        </div>
    );
}