// src/components/Filter.js
import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Filter = ({ type, group, setType, setGroup }) => {
    return (
        <div className="filter-container">
            <FormControl variant="outlined" className="filter-item">
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)} label="Type">
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="A">A</MenuItem>
                    <MenuItem value="B">B</MenuItem>
                    <MenuItem value="AB">AB</MenuItem>
                    <MenuItem value="O">O</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className="filter-item">
                <InputLabel>Group</InputLabel>
                <Select value={group} onChange={(e) => setGroup(e.target.value)} label="Group">
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="A+">A+</MenuItem>
                    <MenuItem value="A-">A-</MenuItem>
                    <MenuItem value="B+">B+</MenuItem>
                    <MenuItem value="B-">B-</MenuItem>
                    <MenuItem value="AB+">AB+</MenuItem>
                    <MenuItem value="AB-">AB-</MenuItem>
                    <MenuItem value="O+">O+</MenuItem>
                    <MenuItem value="O-">O-</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default Filter;
