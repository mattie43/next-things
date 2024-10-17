"use client";

import { Button, MenuItem, Autocomplete, TextField } from "@mui/material";

export default function page() {
    return (
        <div>
            <Button>Button</Button>
            <Autocomplete
                options={[
                    { id: "a", label: "a" },
                    { id: "b", label: "b" },
                ]}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        color="primary"
                        label="Autocomplete"
                    />
                )}
            />
        </div>
    );
}
