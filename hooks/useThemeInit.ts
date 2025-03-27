import { useCallback } from "react";

export const useThemeInit = () => {
    // const { setColor } = useUnit({
    //     setColor: appModel.setColor,
    // });

    const getThemeAsync = useCallback(
        async () => {
            // const storageColor = await asyncStorage.get(
            //     EAsyncStorage.ThemeColor,
            //     EThemeColor.Default
            // );
            // setColor(storageColor);
        },
        [
            // setColor
        ]
    );

    return { getThemeAsync };
};
