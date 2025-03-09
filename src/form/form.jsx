import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Form() {
    return (
        <div style={{ border: "2px solid", justifyItems: "center" }}>
            <Box sx={{ display: 'flex', alignItems: 'center', '& > :not(style)': { m: 1 } }}>
                <div style={{ justifyContent: 'space-around' }}>
                    <TextField
                        helperText=""
                        id="demo-helper-text-aligned"
                        label="First Name"
                    />

                    <TextField
                        helperText=""
                        id="demo-helper-text-aligned"
                        label="Middle Name"
                    />

                    <TextField
                        helperText=""
                        id="demo-helper-text-aligned"
                        label="Last Name"
                    />
                </div>


            </Box >
            <div>
                <TextField
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Phone Number"
                />
                <TextField
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Your Email Address"
                />
                <TextField
                    helperText=" "
                    id="demo-helper-text-aligned-no-helper"
                    label="Ward Email Address"
                />
            </div>
            <div >

                <TextField
                    helperText="Eg : Rice"
                    id="demo-helper-text-aligned-no-helper"
                    label="Product Name"
                />

                <TextField
                    helperText="Eg : Maharshi"
                    id="demo-helper-text-aligned-no-helper"
                    label="Type of Product"
                />

            </div>
            <div style={{marginBottom:20}}>
                <TextField
                    id="outlined-multiline-static"
                    label="Feedback"
                    multiline
                    rows={4}
                    defaultValue="Hello everyone."
                />
            </div>

        </div >

    );
}
