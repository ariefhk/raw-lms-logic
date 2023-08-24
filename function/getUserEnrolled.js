import { enrollment } from "../concept/enrollment.js";

export const getEnrolledData = (user_id) => {
    return (
        enrollment.filter((enrolled) => enrolled.user_id === user_id) || null
    );
};
