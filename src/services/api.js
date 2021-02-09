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

const getLocalStorage = (name, def) => {
    const storage = localStorage.getItem(name);
    if (!storage)
        return def;
    return JSON.parse(storage);
}

const setLocalStorage = (name, obj) => localStorage.setItem(name, JSON.stringify(obj));

api.addVideo = async (values = {}) => {
    const id = generateId(20);
    const list = getLocalStorage(TABLES.videoList, []);
    let newObj = { ...values, id };
    console.log(list.concat(newObj));
    setLocalStorage(TABLES.videoList, list.concat(newObj));
}

api.getVideoList = async () => {
    let list = getLocalStorage(TABLES.videoList, []);
    console.log(list);
    return list.map(l => ({ 
        ...l, 
        date: new Date(l.date),
    }));
}

export default api;