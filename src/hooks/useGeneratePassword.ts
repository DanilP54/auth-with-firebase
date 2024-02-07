import React from "react";
export const useGeneratePassword = () => {
    const [value, setValue] = React.useState('');
    const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

    React.useEffect(() => {
        let password = '';
        for (let i = 0; i < 8; i++) {
            const charTypes = [rand(48, 57), rand(65, 90), rand(97, 122)];
            const randomCharCode = charTypes[rand(0, 2)];
            password += String.fromCharCode(randomCharCode);
        }

        if (pattern.test(password)) {
            setValue(password);
        }
    }, []);

    function rand(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {
        value,
        pattern
    };
}
