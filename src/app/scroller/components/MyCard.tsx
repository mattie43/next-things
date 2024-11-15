import { pastelColors } from "@/constants";
import { Box } from "@mui/material";
import { Result } from "../useUsers";

export const MyCard = (props: { item: Result; ind: number }) => {
    const { item, ind } = props;

    return (
        <Box
            sx={{
                borderBottom: `1px solid ${
                    pastelColors[ind % pastelColors.length]
                }`,
                padding: "1em",
            }}
        >
            {item?.name?.first} {item?.name?.last}
        </Box>
    );
};
