import { Menu, YouTube } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export const SideNav = () => {
    return (
        <div
            style={{
                display: "flex",
                gap: "0.5em",
                alignItems: "center",
                height: "fit-content",
            }}
        >
            <IconButton>
                <Menu fontSize="small" />
            </IconButton>
            <YouTube />
            {"Youtube"}
        </div>
    );
};
