import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import './nav2.css';
import CountrySelect from './countryselect';

export default function Nav2() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            {/* <div style={{backgroundColor:"#45eb45", border: "2px solid #45eb45"}}> */}
            <div style={{background:"#FDF4E6", border: "2px solid #FDF4E6"}}>
                <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 10 }}>
                    {/* <div id='container'> */}
                    {/* <CountrySelect /> */}
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Provience</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={1}>Koshi</MenuItem>
                            <MenuItem value={2}>Madhesh</MenuItem>
                            <MenuItem value={3}>Bagmati</MenuItem>
                            <MenuItem value={4}>Gandaki</MenuItem>
                            <MenuItem value={5}>Lumbini</MenuItem>
                            <MenuItem value={6}>karnali</MenuItem>
                            <MenuItem value={7}>Sudur-Paschim</MenuItem>
                        </Select>

                    </FormControl>
                    <div>
                        <TextField
                            label="District"
                            id="outlined-size-small"
                            defaultValue="Kathmandu"
                            size="small"
                        />
                    </div>
                    <div>
                        <TextField
                            label="Municipality"
                            id="outlined-size-small"
                            defaultValue="Kathmandu"
                            size="small"
                        />
                    </div>
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-select-small-label">Ward</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="demo-select-small"
                                value={age}
                                label="Age"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {[...Array(35)].map((_, index) => (
                                    <MenuItem key={index + 1} value={index + 1}>
                                        {index + 1}
                                    </MenuItem>
                                ))}

                                {/* <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem> */}
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>

        </>
    );
}
