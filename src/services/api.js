import { db } from "../firebase";

const api = {}

const TABLES = {
    videoList: 'videoList'
}

const generateId = length => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
    const charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

api.addVideo = async (values = {}) => {
    const id = generateId(20);
    let newObj = { ...values, id };
    await db.collection(TABLES.videoList).doc(id).set(newObj);
    return id;
}

api.getVideoList = async () => {
    const documents = await db.collection(TABLES.videoList).get();
    const list = documents.docs.map(d => {
        let data = d.data();

        return {
            ...data,
            date: data.date ? new Date(data.date.seconds * 1000) : new Date()
        }
    })
    return list;
}

api.deleteVideo = async id => {
    await db.collection(TABLES.videoList).doc(id).delete();
    return true;
}

export default api;