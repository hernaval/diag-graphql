import bcrypt = require("bcryptjs");

const converters = {
    toInteger: (value: string) => (value ? parseInt(value, 10) : null),
    toFloat: (value: string) => (value ? parseFloat(value) : null),
    toDate: (value: any) => {
        const val = value.split(" ");
        return value !== "" ? val[0] : null;
    },
    toBoolean: (value: string) => {
        if (value === "0") return false;
        else if (value === "1") return true;
        return value ? eval(value) : false;
    },
    toHash: (value: string) => (value ? bcrypt.hash(value, 10) : "default"),
    toNull: (value: any) => (value !== "" ? value : null),
};

export default converters;