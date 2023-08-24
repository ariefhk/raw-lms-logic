import { student } from "../concept/student.js";

export const getUser = (user) => {
    return (
        student.filter(
            (student) => student.name.toLowerCase() === user.toLowerCase()
        )[0] || null
    );
};
