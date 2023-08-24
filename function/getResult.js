import { getUser } from "./getUser.js";
import { getEnrolledData } from "./getUserEnrolled.js";
import { kelas } from "../concept/kelas.js";

const getEnrolledClass = (user) => {
    const existingUser = getUser(user);
    if (!existingUser) {
        return "user not found!";
    }

    const userEnrollment = getEnrolledData(existingUser.id);

    if (!userEnrollment) {
        return "user not enroll yet!";
    }

    const classId = userEnrollment.map((kelas) => kelas.kelas_id);

    const className = [];
    for (let i = 0; i < classId.length; i++) {
        const cName = kelas.find((k) => k.id === classId[i]);
        className.push(cName.name);
    }

    return className;
};

console.log(getEnrolledClass("arief"));
