import { kelas } from "../concept/kelas.js";

export const getKelas = (kelas_name) => {
    return (
        kelas.filter(
            (kelas) => kelas.name.toLowerCase() === kelas_name.toLowerCase()
        )[0] || null
    );
};
